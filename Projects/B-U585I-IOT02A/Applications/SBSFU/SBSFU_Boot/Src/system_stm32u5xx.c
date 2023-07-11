/**
  ******************************************************************************
  * @file    system_stm32u5xx.c
  * @author  MCD Application Team
  * @brief   CMSIS Cortex-M33 Device Peripheral Access Layer System Source File
  *
  *   This file provides two functions and one global variable to be called from
  *   user application:
  *      - SystemInit(): This function is called at startup just after reset and
  *                      before branch to main program. This call is made inside
  *                      the "startup_stm32u5xx.s" file.
  *
  *      - SystemCoreClock variable: Contains the core clock (HCLK), it can be used
  *                                  by the user application to setup the SysTick
  *                                  timer or configure other parameters.
  *
  *      - SystemCoreClockUpdate(): Updates the variable SystemCoreClock and must
  *                                 be called whenever the core clock is changed
  *                                 during program execution.
  *
  *   After each device reset the MSI (4 MHz) is used as system clock source.
  *   Then SystemInit() function is called, in "startup_stm32u5xx.s" file, to
  *   configure the system clock before to branch to main program.
  *
  *   This file configures the system clock as follows:
  *=============================================================================
  *-----------------------------------------------------------------------------
  *        System Clock source                     | MSI
  *-----------------------------------------------------------------------------
  *        SYSCLK(Hz)                              | 4000000
  *-----------------------------------------------------------------------------
  *        HCLK(Hz)                                | 4000000
  *-----------------------------------------------------------------------------
  *        AHB Prescaler                           | 1
  *-----------------------------------------------------------------------------
  *        APB1 Prescaler                          | 1
  *-----------------------------------------------------------------------------
  *        APB2 Prescaler                          | 1
  *-----------------------------------------------------------------------------
  *        APB3 Prescaler                          | 1
  *-----------------------------------------------------------------------------
  *        PLL1_SRC                                | No clock
  *-----------------------------------------------------------------------------
  *        PLL1_M                                  | 1
  *-----------------------------------------------------------------------------
  *        PLL1_N                                  | 8
  *-----------------------------------------------------------------------------
  *        PLL1_P                                  | 7
  *-----------------------------------------------------------------------------
  *        PLL1_Q                                  | 2
  *-----------------------------------------------------------------------------
  *        PLL1_R                                  | 2
  *-----------------------------------------------------------------------------
  *        PLL2_SRC                                | NA
  *-----------------------------------------------------------------------------
  *        PLL2_M                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL2_N                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL2_P                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL2_Q                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL2_R                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL3_SRC                                | NA
  *-----------------------------------------------------------------------------
  *        PLL3_M                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL3_N                                  | NA
  *-----------------------------------------------------------------------------
  *        PLL3_P                                  | NA
  *-----------------------------------------------------------------------------
  *        Require 48MHz for USB FS,               | Disabled
  *        SDIO and RNG clock                      |
  *-----------------------------------------------------------------------------
  *=============================================================================
  ******************************************************************************
  * @attention
  *
  * Copyright (c) 2021 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */

/** @addtogroup CMSIS
  * @{
  */

/** @addtogroup STM32U5xx_system
  * @{
  */

/** @addtogroup STM32U5xx_System_Private_Includes
  * @{
  */

#include "stm32u5xx.h"
#include <math.h>

/**
  * @}
  */

/** @addtogroup STM32U5xx_System_Private_TypesDefinitions
  * @{
  */

/**
  * @}
  */

/** @addtogroup STM32U5xx_System_Private_Defines
  * @{
  */

#if !defined  (HSE_VALUE)
  #define HSE_VALUE    16000000U /*!< Value of the External oscillator in Hz */
#endif /* HSE_VALUE */

#if !defined  (MSI_VALUE)
  #define MSI_VALUE    4000000U  /*!< Value of the Internal oscillator in Hz*/
#endif /* MSI_VALUE */

#if !defined  (HSI_VALUE)
  #define HSI_VALUE    16000000U /*!< Value of the Internal oscillator in Hz*/
#endif /* HSI_VALUE */

/************************* Miscellaneous Configuration ************************/
/*!< Uncomment the following line if you need to relocate your vector Table in
     Internal SRAM. */
/* #define VECT_TAB_SRAM */
#define VECT_TAB_OFFSET  0x00000000UL /*!< Vector Table base offset field.
                                   This value must be a multiple of 0x200. */
/******************************************************************************/

/**
  * @}
  */

/** @addtogroup STM32U5xx_System_Private_Macros
  * @{
  */

/**
  * @}
  */

/** @addtogroup STM32U5xx_System_Private_Variables
  * @{
  */
  /* The SystemCoreClock variable is updated in three ways:
      1) by calling CMSIS function SystemCoreClockUpdate()
      2) by calling HAL API function HAL_RCC_GetHCLKFreq()
      3) each time HAL_RCC_ClockConfig() is called to configure the system clock frequency
         Note: If you use this function to configure the system clock; then there
               is no need to call the 2 first functions listed above, since SystemCoreClock
               variable is updated automatically.
  */
  uint32_t SystemCoreClock = 4000000U;

  const uint8_t  AHBPrescTable[16] = {0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 1U, 2U, 3U, 4U, 6U, 7U, 8U, 9U};
  const uint8_t  APBPrescTable[8] =  {0U, 0U, 0U, 0U, 1U, 2U, 3U, 4U};
  const uint32_t MSIRangeTable[16] = {48000000U,24000000U,16000000U,12000000U, 4000000U, 2000000U, 1330000U,\
                                      1000000U, 3072000U, 1536000U,1024000U, 768000U, 400000U, 200000U, 133000U, 100000U};
/**
  * @}
  */

/** @addtogroup STM32U5xx_System_Private_FunctionPrototypes
  * @{
  */
static void SetSysClock(void);

/**
  * @}
  */

/** @addtogroup STM32U5xx_System_Private_Functions
  * @{
  */

/**
  * @brief  Setup the microcontroller system.
  * @param  None
  * @retval None
  */

void SystemInit(void)
{
  /* FPU settings ------------------------------------------------------------*/
  #if (__FPU_PRESENT == 1) && (__FPU_USED == 1)
   SCB->CPACR |= ((3UL << 20U)|(3UL << 22U));  /* set CP10 and CP11 Full Access */
  #endif

  /* Configure the System clock source, PLL Multiplier and Divider factors,
     AHB/APBx prescalers and Flash settings for System clock 160 MHz ---------*/
  SetSysClock();
}

/**
  * @brief  Update SystemCoreClock variable according to Clock Register Values.
  *         The SystemCoreClock variable contains the core clock (HCLK), it can
  *         be used by the user application to setup the SysTick timer or configure
  *         other parameters.
  *
  * @note   Each time the core clock (HCLK) changes, this function must be called
  *         to update SystemCoreClock variable value. Otherwise, any configuration
  *         based on this variable will be incorrect.
  *
  * @note   - The system frequency computed by this function is not the real
  *           frequency in the chip. It is calculated based on the predefined
  *           constant and the selected clock source:
  *
  *           - If SYSCLK source is MSI, SystemCoreClock will contain the MSI_VALUE(*)
  *
  *           - If SYSCLK source is HSI, SystemCoreClock will contain the HSI_VALUE(**)
  *
  *           - If SYSCLK source is HSE, SystemCoreClock will contain the HSE_VALUE(***)
  *
  *           - If SYSCLK source is PLL, SystemCoreClock will contain the HSE_VALUE(***)
  *             or HSI_VALUE(*) or MSI_VALUE(*) multiplied/divided by the PLL factors.
  *
  *         (*) MSI_VALUE is a constant defined in stm32u5xx_hal.h file (default value
  *             4 MHz) but the real value may vary depending on the variations
  *             in voltage and temperature.
  *
  *         (**) HSI_VALUE is a constant defined in stm32u5xx_hal.h file (default value
  *              16 MHz) but the real value may vary depending on the variations
  *              in voltage and temperature.
  *
  *         (***) HSE_VALUE is a constant defined in stm32u5xx_hal.h file (default value
  *              8 MHz), user has to ensure that HSE_VALUE is same as the real
  *              frequency of the crystal used. Otherwise, this function may
  *              have wrong result.
  *
  *         - The result of this function could be not correct when using fractional
  *           value for HSE crystal.
  *
  * @param  None
  * @retval None
  */
void SystemCoreClockUpdate(void)
{
  uint32_t pllr, pllsource, pllm , tmp, pllfracen, msirange;
  float_t fracn1, pllvco;

  /* Get MSI Range frequency--------------------------------------------------*/
  if(READ_BIT(RCC->ICSCR1, RCC_ICSCR1_MSIRGSEL) == 0U)
  {
    /* MSISRANGE from RCC_CSR applies */
    msirange = (RCC->CSR & RCC_CSR_MSISSRANGE) >> RCC_CSR_MSISSRANGE_Pos;
  }
  else
  {
    /* MSIRANGE from RCC_CR applies */
    msirange = (RCC->ICSCR1 & RCC_ICSCR1_MSISRANGE) >> RCC_ICSCR1_MSISRANGE_Pos;
  }

  /*MSI frequency range in HZ*/
  msirange = MSIRangeTable[msirange];

  /* Get SYSCLK source -------------------------------------------------------*/
  switch (RCC->CFGR1 & RCC_CFGR1_SWS)
  {
  case 0x00:  /* MSI used as system clock source */
    SystemCoreClock = msirange;
    break;

  case 0x04:  /* HSI used as system clock source */
    SystemCoreClock = HSI_VALUE;
    break;

  case 0x08:  /* HSE used as system clock source */
    SystemCoreClock = HSE_VALUE;
    break;

  case 0x0C:  /* PLL used as system clock source */
    /* PLL_VCO = (HSE_VALUE or HSI_VALUE or MSI_VALUE/ PLLM) * PLLN
    SYSCLK = PLL_VCO / PLLR
    */
    pllsource = (RCC->PLL1CFGR & RCC_PLL1CFGR_PLL1SRC);
    pllm = ((RCC->PLL1CFGR & RCC_PLL1CFGR_PLL1M)>> RCC_PLL1CFGR_PLL1M_Pos) + 1U;
    pllfracen = ((RCC->PLL1CFGR & RCC_PLL1CFGR_PLL1FRACEN)>>RCC_PLL1CFGR_PLL1FRACEN_Pos);
    fracn1 = (float_t)(uint32_t)(pllfracen* ((RCC->PLL1FRACR & RCC_PLL1FRACR_PLL1FRACN)>> RCC_PLL1FRACR_PLL1FRACN_Pos));

      switch (pllsource)
      {
      case 0x00:  /* No clock sent to PLL*/
        pllvco = (float_t)0U;
        break;

      case 0x02:  /* HSI used as PLL clock source */
        pllvco = ((float_t)HSI_VALUE / (float_t)pllm);
        break;

      case 0x03:  /* HSE used as PLL clock source */
        pllvco = ((float_t)HSE_VALUE / (float_t)pllm);
        break;

      default:    /* MSI used as PLL clock source */
        pllvco = ((float_t)msirange / (float_t)pllm);
        break;
      }

      pllvco = pllvco * ((float_t)(uint32_t)(RCC->PLL1DIVR & RCC_PLL1DIVR_PLL1N) + (fracn1/(float_t)0x2000) + (float_t)1U);
      pllr = (((RCC->PLL1DIVR & RCC_PLL1DIVR_PLL1R) >> RCC_PLL1DIVR_PLL1R_Pos) + 1U );
      SystemCoreClock = (uint32_t)((uint32_t)pllvco/pllr);
      break;

  default:
    SystemCoreClock = msirange;
    break;
  }
  /* Compute HCLK clock frequency --------------------------------------------*/
  /* Get HCLK prescaler */
  tmp = AHBPrescTable[((RCC->CFGR2 & RCC_CFGR2_HPRE) >> RCC_CFGR2_HPRE_Pos)];
  /* HCLK clock frequency */
  SystemCoreClock >>= tmp;
}

/**
  * @brief  Configures the System clock source, PLL Multiplier and Divider factors,
  *         AHB/APBx prescalers and Flash settings for System clock 160MHz
  * @retval None
  */
static void SetSysClock(void)
{
  __IO uint32_t tmp;

  /* Enable PWR clock */
  RCC->AHB3ENR |= RCC_AHB3ENR_PWREN;
  tmp = RCC->AHB3ENR;
  UNUSED(tmp);

  /* Set the regulator supply output voltage to range 1 for frequency above 100 Mhz */
  PWR->VOSR |= PWR_VOSR_VOS;  /* voltage range 1 */
  while ((PWR->VOSR & PWR_VOSR_VOSRDY) != PWR_VOSR_VOSRDY)
  {
  }

  /* Set Flash latency prior to system clock change */
  FLASH->ACR = FLASH_ACR_LATENCY_4WS;
  while ((FLASH->ACR & FLASH_ACR_LATENCY) != FLASH_ACR_LATENCY_4WS)
  {
  }

  /* Configure PLL clock source (MSI) */
  RCC->PLL1CFGR = RCC_PLL1CFGR_PLL1SRC_0;

  /* Enable the EPOD to reach max frequency */
  PWR->VOSR |= PWR_VOSR_BOOSTEN;
  while ((PWR->VOSR & PWR_VOSR_BOOSTRDY) != PWR_VOSR_BOOSTRDY)
  {
  }

  /* Main PLL configuration and activation */
  RCC->PLL1CFGR |= RCC_PLL1CFGR_PLL1REN;
  RCC->PLL1DIVR = ((2U-1U)  << RCC_PLL1DIVR_PLL1R_Pos) |
                  ((2U-1U)  << RCC_PLL1DIVR_PLL1Q_Pos) |
                  ((2U-1U)  << RCC_PLL1DIVR_PLL1P_Pos) |
                  ((80U-1U) << RCC_PLL1DIVR_PLL1N_Pos);
  RCC->CR |= RCC_CR_PLL1ON;
  while ((RCC->CR & RCC_CR_PLL1RDY) != RCC_CR_PLL1RDY)
  {
  }

  /* Set PLL1 as System Clock Source */
  RCC->CFGR1 = RCC_CFGR1_SW;
  while ((RCC->CFGR1 & RCC_CFGR1_SWS) != RCC_CFGR1_SWS)
  {
  }

  /* Enable the HSI48 oscillator (HSI48) for RNG peripherals */
  RCC->CR |= RCC_CR_HSI48ON;

  /* Enable the secure Internal High Speed oscillator (SHSI) for HW crypto peripherals */
  RCC->CR |= RCC_CR_SHSION;
}

/**
  * @}
  */

/**
  * @}
  */

/**
  * @}
  */
