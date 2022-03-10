/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file    app_netxduo.c
  * @author  MCD Application Team
  * @brief   NetXDuo applicative file
  ******************************************************************************
    * @attention
  *
  * Copyright (c) 2022 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */
/* USER CODE END Header */

/* Includes ------------------------------------------------------------------*/
#include "app_netxduo.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
#include "app_azure_rtos.h"
#include "app_mdns.h"
#include "msg.h"
#include <stdbool.h>
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */
static TX_THREAD AppMainThread;
static TX_THREAD AppMain2Thread;
static __IO bool AppMain2ThreadRunning = true;

TX_THREAD AppMdnsThread;

TX_BYTE_POOL *AppBytePool;
static NX_PACKET_POOL AppPacketPool;

static NX_IP IpInstance;

static NX_DHCP DhcpClient;
static TX_SEMAPHORE DhcpSemaphore;

NX_MDNS MdnsInstance;

UCHAR local_service_cache[2048];
UCHAR peer_service_cache[2048];

/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */

/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/
/* USER CODE BEGIN PV */

/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
/* USER CODE BEGIN PFP */
static VOID App_Main_Thread_Entry(ULONG thread_input);
static VOID App_Main2_Thread_Entry(ULONG thread_input);

static VOID App_Mdns_Thread_Entry(ULONG thread_input);

static VOID ip_address_change_notify_callback(NX_IP *ip_instance, VOID *ptr);

static void NetXDuo_DeInit(void);

/* USER CODE END PFP */
/**
  * @brief  Application NetXDuo Initialization.
  * @param memory_ptr: memory pointer
  * @retval int
  */
UINT MX_NetXDuo_Init(VOID *memory_ptr)
{
  UINT ret = NX_SUCCESS;
  TX_BYTE_POOL *byte_pool = (TX_BYTE_POOL*)memory_ptr;

   /* USER CODE BEGIN App_NetXDuo_MEM_POOL */
  (void)byte_pool;
  /* USER CODE END App_NetXDuo_MEM_POOL */

  /* USER CODE BEGIN MX_NetXDuo_Init */

  MSG_INFO("Nx_MDNS application started..\n");

  MSG_INFO("# build: %s-%s, %s, %s %s\n",
           "SPI",
           "RTOS",
           "Network on module",
           __TIME__, __DATE__);

  /* Initialize the NetX system.  */
  nx_system_initialize();

  /* Allocate the memory for packet_pool.  */
  {
    const ULONG pool_size = NX_PACKET_POOL_SIZE;
    VOID *pool_start;

    if (tx_byte_allocate(byte_pool, &pool_start, pool_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Create the Packet pool to be used for packet allocation */
    ret = nx_packet_pool_create(&AppPacketPool, "Main Packet Pool", PAYLOAD_SIZE, pool_start, pool_size);

    if (ret != NX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
    MSG_DEBUG("nx_packet_pool_create() done\n");
  }

  /* Allocate the memory for Ip_Instance */
  {
    const ULONG stack_size = MAIN_IP_THREAD_STACK_SIZE;
    VOID *stack_ptr;
    if (tx_byte_allocate(byte_pool, &stack_ptr, stack_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Create the main NX_IP instance. */
    ret = nx_ip_create(&IpInstance, "Main Ip instance", 0, 0, &AppPacketPool,
                       nx_driver_emw3080_entry, stack_ptr, stack_size, MAIN_IP_THREAD_PRIORITY);

    if (ret != NX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
    MSG_DEBUG("nx_ip_create() done\n");
  }

  /* Create the DHCP client. */
  ret = nx_dhcp_create(&DhcpClient, &IpInstance, "DHCP Client");
  if (ret != NX_SUCCESS)
  {
    return NX_NOT_ENABLED;
  }
  MSG_DEBUG("nx_dhcp_create() done\n");

  /* Allocate the memory for ARP */
  {
    const ULONG arp_cache_size = ARP_MEMORY_SIZE;
    VOID *arp_cache_memory;

    if (tx_byte_allocate(byte_pool, &arp_cache_memory, arp_cache_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Enable the ARP protocol and provide the ARP cache size for the IP instance */
    ret = nx_arp_enable(&IpInstance, arp_cache_memory, arp_cache_size);

    if (ret != NX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
    MSG_DEBUG("nx_arp_enable() done\n");
  }

  /* Enable the ICMP */
  ret = nx_icmp_enable(&IpInstance);

  if (ret != NX_SUCCESS)
  {
    return NX_NOT_ENABLED;
  }
  MSG_DEBUG("nx_icmp_enable() done\n");

  /* Enable the IGMP */
  ret = nx_igmp_enable(&IpInstance);

  if (ret != NX_SUCCESS)
  {
    return NX_NOT_ENABLED;
  }
  MSG_DEBUG("nx_igmp_enable() done\n");

  /* Enable the UDP protocol required for  DHCP communication */
  ret = nx_udp_enable(&IpInstance);

  if (ret != NX_SUCCESS)
  {
    return NX_NOT_ENABLED;
  }
  MSG_DEBUG("nx_udp_enable() done\n");

  /* Enable the TCP protocol. */
  ret = nx_tcp_enable(&IpInstance);

  if (ret != NX_SUCCESS)
  {
    return NX_NOT_ENABLED;
  }
  MSG_DEBUG("nx_tcp_enable() done\n");

  /* Allocate the memory for internal MDNS thread   */
  {
    const ULONG stack_size = MDNS_THREAD_STACK_SIZE;
    VOID *stack_ptr;

    if (tx_byte_allocate(byte_pool, (VOID **) &stack_ptr, stack_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Create the MDNS instance. */
    ret = nx_mdns_create(&MdnsInstance, &IpInstance, &AppPacketPool,
                         MDNS_THREAD_PRIORITY, stack_ptr, stack_size,
                         (UCHAR *)mdns_host_name,
                         (VOID *)local_service_cache, sizeof(local_service_cache),
                         (VOID *)peer_service_cache, sizeof(peer_service_cache), probing_notify);

    if (ret != NX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
  }

  /* Allocate the memory for main thread   */
  {
    const ULONG stack_size = MAIN_THREAD_STACK_SIZE;
    VOID *stack_ptr;

    if (tx_byte_allocate(byte_pool, &stack_ptr, stack_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Create the main thread */
    ret = tx_thread_create(&AppMainThread, "App Main thread", App_Main_Thread_Entry,
                           (ULONG)byte_pool, stack_ptr, stack_size,
                           MAIN_THREAD_PRIORITY, MAIN_THREAD_PRIORITY, TX_NO_TIME_SLICE, TX_AUTO_START);

    if (ret != TX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
    MSG_DEBUG("tx_thread_create() done\n");
  }

  /* Allocate the memory for main2 thread. */
  {
    const ULONG stack_size = MAIN2_THREAD_STACK_SIZE;
    VOID *stack_ptr;

    if (tx_byte_allocate(byte_pool, &stack_ptr, stack_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Create the main2 thread. */
    ret = tx_thread_create(&AppMain2Thread, "App Main2 thread", App_Main2_Thread_Entry,
                           (ULONG)byte_pool, stack_ptr, stack_size,
                           MAIN2_THREAD_PRIORITY, MAIN2_THREAD_PRIORITY, TX_NO_TIME_SLICE, TX_AUTO_START);

    if (ret != TX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
    MSG_DEBUG("tx_thread_create() done\n");
  }

  /* Allocate the memory for MDNS thread. */
  {
    const ULONG stack_size = MDNS_THREAD_STACK_SIZE;
    VOID *stack_ptr;

    if (tx_byte_allocate(byte_pool, &stack_ptr, stack_size, TX_NO_WAIT) != TX_SUCCESS)
    {
      return TX_POOL_ERROR;
    }

    /* Create the MDNS thread. */
    ret = tx_thread_create(&AppMdnsThread, "App MDNS Thread", App_Mdns_Thread_Entry,
                           (ULONG)byte_pool, stack_ptr, stack_size,
                           APP_MDNS_THREAD_PRIORITY, APP_MDNS_THREAD_PRIORITY, TX_NO_TIME_SLICE, TX_DONT_START);

    if (ret != TX_SUCCESS)
    {
      return NX_NOT_ENABLED;
    }
    MSG_DEBUG("tx_thread_create() done\n");
  }

  /* set DHCP notification callback  */
  tx_semaphore_create(&DhcpSemaphore, "DHCP Semaphore", 0);
  /* USER CODE END MX_NetXDuo_Init */

  return ret;
}

/* USER CODE BEGIN 1 */
/**
  * @brief  ip address change callback.
  * @param ip_instance: NX_IP instance
  * @param ptr: user data
  * @retval none
  */
static VOID ip_address_change_notify_callback(NX_IP *ip_instance, VOID *ptr)
{
  NX_PARAMETER_NOT_USED(ip_instance);
  NX_PARAMETER_NOT_USED(ptr);

  MSG_DEBUG(">\n");

  /* release the semaphore as soon as an IP address is available */
  tx_semaphore_put(&DhcpSemaphore);
}

/**
  * @brief  Main thread entry.
  * @param thread_input: ULONG user argument used by the thread entry
  * @retval none
  */
static VOID App_Main_Thread_Entry(ULONG thread_input)
{
  NX_PARAMETER_NOT_USED(thread_input);

  UINT ret;
#ifndef NX_MDNS_DISABLE_CLIENT
  ULONG service_mask = 0x00000002;
#endif /* NX_MDNS_DISABLE_CLIENT  */

  MSG_DEBUG(">\n");

  ret = nx_ip_address_change_notify(&IpInstance, ip_address_change_notify_callback, NULL);
  if (ret != NX_SUCCESS)
  {
    Error_Handler();
  }
  MSG_DEBUG("nx_ip_address_change_notify() done\n");

  /* Start the DHCP client. */
  ret = nx_dhcp_start(&DhcpClient);
  if (ret != NX_SUCCESS)
  {
    Error_Handler();
  }
  MSG_DEBUG("nx_dhcp_start() done\n");

  /* Wait until an IP address is ready. */
  if (tx_semaphore_get(&DhcpSemaphore, TX_WAIT_FOREVER) != TX_SUCCESS)
  {
    MSG_ERROR("ERROR: Cannot connect WiFi interface !\n");
    Error_Handler();
  }

  /* Kill our terminator. */
  AppMain2ThreadRunning = false;

  {
    ULONG IpAddress;
    ULONG NetMask;
    ret = nx_ip_address_get(&IpInstance, &IpAddress, &NetMask);

    if (ret != TX_SUCCESS)
    {
      Error_Handler();
    }

    MSG_INFO("\n- Network Interface connected: ");
    PRINT_IP_ADDRESS(IpAddress);
    MSG_INFO("\n");
  }

  /* Set the cache notify callback function.  */
  ret = nx_mdns_cache_notify_set(&MdnsInstance, cache_full_notify);

  if (ret != NX_SUCCESS)
  {
    Error_Handler();
  }

#ifndef NX_MDNS_DISABLE_CLIENT
  /* Set the service change callback function to listen the service.  */
  ret = nx_mdns_service_notify_set(&MdnsInstance, service_mask, service_change_notify);

  if (ret != NX_SUCCESS)
  {
    Error_Handler();
  }
#endif /* NX_MDNS_DISABLE_CLIENT  */

  /* The network is correctly initialized, start the Mdns thread. */
  tx_thread_resume(&AppMdnsThread);

  /* this thread is not needed any more, we relinquish it */
  tx_thread_relinquish();

  return;
}

/**
  * @brief  Main2 thread entry.
  * @param thread_input: ULONG user argument used by the thread entry
  * @retval none
  */
static VOID App_Main2_Thread_Entry(ULONG thread_input)
{
  const uint32_t ticks_for_1s = TX_TIMER_TICKS_PER_SECOND;
  uint32_t time_out = 0;
  NX_PARAMETER_NOT_USED(thread_input);

  MSG_DEBUG(">\n");

  AppMain2ThreadRunning = true;

  while (AppMain2ThreadRunning)
  {
    tx_thread_sleep(ticks_for_1s);
    time_out++;

    if (time_out == 20)
    {
      MSG_DEBUG("Could not get an IP address !\n");
      MSG_INFO("ERROR: Cannot connect WiFi interface !\n");
      Error_Handler();
    }
  }
  MSG_DEBUG("<\n");
}


/**
  * @brief  MDNS thread entry.
  * @param thread_input: ULONG user argument used by the thread entry
  * @retval none
  */
static void App_Mdns_Thread_Entry(ULONG thread_input)
{
	TX_BYTE_POOL *const byte_pool = (TX_BYTE_POOL *) thread_input;

  UINT ret = NX_SUCCESS;
  MDNS_TESTCASES testcase;
  const ULONG ticksFor5s = (5 * TX_TIMER_TICKS_PER_SECOND);

  MSG_DEBUG(">\n");

  /* Share the byte pool with the future needs. */
  AppBytePool = byte_pool;

  {
    MX_WIFIObject_t *pMxWifiObj = wifi_obj_get();

    MSG_INFO(" - Device Name    : %s. \n", pMxWifiObj->SysInfo.Product_Name);
    MSG_INFO(" - Device ID      : %s. \n", pMxWifiObj->SysInfo.Product_ID);
    MSG_INFO(" - Device Version : %s. \n", pMxWifiObj->SysInfo.FW_Rev);
    MSG_INFO(" - MAC address    : %02X.%02X.%02X.%02X.%02X.%02X\n",
             pMxWifiObj->SysInfo.MAC[0], pMxWifiObj->SysInfo.MAC[1], pMxWifiObj->SysInfo.MAC[2],
             pMxWifiObj->SysInfo.MAC[3], pMxWifiObj->SysInfo.MAC[4], pMxWifiObj->SysInfo.MAC[5]);
  }

  testcase = MDNS_START;

  while (1)
  {
    switch (testcase)
    {
      case MDNS_START:
      {
        MSG_INFO("\n\nStarting TEST_Full_MDNS_Start_ ...");
        ret = nx_mdns_enable(&MdnsInstance, 0);

        /* Wait for host name register. */
        tx_thread_sleep(ticksFor5s);

        if (ret != NX_SUCCESS)
        {
          Error_Handler();
        }
        else
        {
          MSG_INFO("    ... [Pass]\n\n");
        }
      }
      break;

      case MDNS_ANNOUNCE:
      {
        MSG_INFO("\n\nStarting TEST_Full_Announce_Service_ ...\n");
        register_local_service((UCHAR *)SERVICE_INSTANCE_NAME, (UCHAR *)SERVICE1_TYPE_TEST_ST,
                               SERVICE_SUBTYPE_NULL, (UCHAR *)SERVICE1_TXT_INFO, SERVICE1_TTL,
                               SERVICE1_PRIORITY, SERVICE1_WEIGHTS, SERVICE1_PORT, NX_TRUE);
        MSG_INFO("check cmd: 'dns-sd -B mDNS_instance_name domain_name (local by default)'\n\n");
      }
      break;

      case MDNS_ANNOUNCE_INVALID_PARAMS:
      {
        MSG_INFO("\n\nStarting TEST_Full_Announce_Service_InvalidParams_ ...\n");
        register_local_service(SERVICE_INSTANCE_NULL, SERVICE_TYPE_NULL, SERVICE_SUBTYPE_NULL,
                               SERVICE_TXT_NULL, 0, 0, 0, 0, NX_TRUE);
      }
      break;

      case MDNS_DEANNOUNCE:
      {
        MSG_INFO("\n\nStarting TEST_Full_Deannounce_Service_ ...\n");
        delete_local_service((UCHAR *)SERVICE_INSTANCE_NAME, (UCHAR *)SERVICE1_TYPE_TEST_ST, SERVICE_SUBTYPE_NULL);
      }
      break;

      case MDNS_DEANNOUNCE_INVALID_PARAMS:
      {
        MSG_INFO("\n\nStarting TEST_Full_Deannounce_Service_InvalidParams_ ...\n");
        delete_local_service(SERVICE_INSTANCE_NULL, SERVICE_TYPE_NULL, SERVICE_SUBTYPE_NULL);
      }
      break;

      case MDNS_DEANNOUNCE_ALL:
      {
        MSG_INFO("\n\nStarting TEST_Full_Deannounce_Service_all_ ...\n");
        register_local_service((UCHAR *)SERVICE1_INSTANCE_NAME, (UCHAR *)SERVICE1_TYPE_TEST_ST,
                               SERVICE_SUBTYPE_NULL, (UCHAR *)SERVICE1_TXT_INFO, SERVICE1_TTL,
                               SERVICE1_PRIORITY, SERVICE1_WEIGHTS, SERVICE1_PORT, NX_TRUE);
        tx_thread_sleep(ticksFor5s);
        register_local_service((UCHAR *)SERVICE2_INSTANCE_NAME, (UCHAR *)SERVICE1_TYPE_TEST_ST,
                               SERVICE_SUBTYPE_NULL, (UCHAR *)SERVICE1_TXT_INFO, SERVICE1_TTL,
                               SERVICE1_PRIORITY, SERVICE1_WEIGHTS, SERVICE1_PORT, NX_TRUE);
        tx_thread_sleep(ticksFor5s);
        register_local_service((UCHAR *)SERVICE3_INSTANCE_NAME, (UCHAR *)SERVICE1_TYPE_TEST_ST,
                               SERVICE_SUBTYPE_NULL, (UCHAR *)SERVICE1_TXT_INFO, SERVICE1_TTL,
                               SERVICE1_PRIORITY, SERVICE1_WEIGHTS, SERVICE1_PORT, NX_TRUE);
        MSG_INFO("\nmDNS will deannounce all services after 10 seconds\n");
        tx_thread_sleep(2 * ticksFor5s);
        delete_all_services(SERVICE_INSTANCE_NULL, (UCHAR *)SERVICE1_TYPE_TEST_ST, SERVICE_SUBTYPE_NULL);
      }
      break;

      case MDNS_SET_HOSTNAME:
      {
        MSG_DEBUG("Not done\n");
      }
      break;

      case MDNS_UPDATE_TXT_RECORD:
      {
        MSG_DEBUG("Not done\n");
      }
      break;

      case MDNS_STOP:
      {
        MSG_INFO("\n\nStarting TEST_Full_MDNS_Stop_ ...");
        ret = nx_mdns_disable(&MdnsInstance, 0);

        /* Wait for host name deregister. */
        tx_thread_sleep(ticksFor5s);

        if (ret != NX_SUCCESS)
        {
          Error_Handler();
        }
        else
        {
          MSG_INFO("    ... [Pass]\n\n");
        }
      }
      break;

      default:
        Error_Handler();
    }
    tx_thread_sleep(ticksFor5s);
    testcase++;

    if (testcase == MDNS_RESERVE)
    {
      testcase = MDNS_START;
      break;
    }
  }

  NetXDuo_DeInit();

  /* this thread is not needed any more, we relinquish it */
  tx_thread_relinquish();

  MSG_DEBUG("<\n");
}

static void NetXDuo_DeInit(void)
{
  MSG_DEBUG(">\n");

  {
    const UINT status = nx_mdns_delete(&MdnsInstance);
    MSG_INFO("nx_mdns_delete() done with 0x%"PRIx32"\n", (uint32_t)status);
  }

  {
    const UINT status = nx_ip_delete(&IpInstance);
    MSG_INFO("nx_ip_delete() done with 0x%"PRIx32"\n", (uint32_t)status);
  }

  {
    CHAR *name;
    ULONG available_bytes = 0;
    ULONG fragments = 0;
    TX_THREAD *first_suspended;
    ULONG suspended_count;
    TX_BYTE_POOL *next_pool;

    tx_byte_pool_info_get(AppBytePool, &name,
                          &available_bytes, &fragments,
                          &first_suspended, &suspended_count, &next_pool);
    MSG_INFO("Pool \"%s\" (%"PRIu32")\n", name, (uint32_t)AppBytePool->tx_byte_pool_size);
    MSG_INFO(" - available bytes: %"PRIu32"\n", (uint32_t)available_bytes);
    MSG_INFO(" - fragments      : %"PRIu32"\n", (uint32_t)fragments);
    MSG_INFO(" - suspended count: %"PRIu32"\n", (uint32_t)suspended_count);
  }

  {
    ULONG total_packets = 0;
    ULONG free_packets = 0;
    ULONG empty_pool_requests = 0;
    ULONG empty_pool_suspensions = 0;
    ULONG invalid_packet_releases = 0;

    nx_packet_pool_info_get(&AppPacketPool,
                            &total_packets, &free_packets,
                            &empty_pool_requests, &empty_pool_suspensions,
                            &invalid_packet_releases);
    MSG_INFO("Packet Pool \"%s\" (%"PRIu32")\n",
             AppPacketPool.nx_packet_pool_name,
             (uint32_t)AppPacketPool.nx_packet_pool_payload_size);
    MSG_INFO(" - total packets          : %"PRIu32"\n", (uint32_t)total_packets);
    MSG_INFO(" - free packets           : %"PRIu32"\n", (uint32_t)free_packets);
    MSG_INFO(" - invalid packet releases: %"PRIu32"\n", (uint32_t)invalid_packet_releases);
  }

  MSG_DEBUG("<\n");
}
/* USER CODE END 1 */
