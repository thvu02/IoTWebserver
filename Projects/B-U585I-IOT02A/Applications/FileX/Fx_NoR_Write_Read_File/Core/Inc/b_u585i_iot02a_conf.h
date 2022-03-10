/**
  ******************************************************************************
  * @file    b_u585i_iot02a_conf.h
  * @author  MCD Application Team
  * @brief   configuration file.
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

/* Define to prevent recursive inclusion -------------------------------------*/
#ifndef B_U585I_IOT02A_CONF_H
#define B_U585I_IOT02A_CONF_H

#ifdef __cplusplus
extern "C" {
#endif

/* Includes ------------------------------------------------------------------*/
#include "stm32u5xx_hal.h"

/* COM define */
#define USE_BSP_COM_FEATURE                  0U
#define USE_COM_LOG                          0U

  /* Default EEPROM max trials */
#define EEPROM_MAX_TRIALS                    3000U

/* IRQ priorities */
#define BSP_BUTTON_USER_IT_PRIORITY   0x15UL  /* Default is lowest priority level */

/* CAMERA interrupt priority */
#define BSP_CAMERA_IT_PRIORITY        0x14UL  /* Default is lowest priority level */

/* I2C1 and I2C2 Frequencies in Hz  */
#define BUS_I2C1_FREQUENCY                   100000UL /* Frequency of I2C1 = 100 KHz*/
#define BUS_I2C2_FREQUENCY                   100000UL /* Frequency of I2C2 = 100 KHz*/

#ifdef __cplusplus
}
#endif

#endif /* B_U585I_IOT02_CONF_H */
