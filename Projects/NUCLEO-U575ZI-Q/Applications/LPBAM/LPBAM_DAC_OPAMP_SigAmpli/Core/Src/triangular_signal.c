/**
  ******************************************************************************
  * @file    triangular_signal.c
  * @author  MCD Application Team
  * @brief   This file contains the triangle signal data.
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
/* Includes ------------------------------------------------------------------*/
#include "triangular_signal.h"

/* Exported variables --------------------------------------------------------*/
/* Triangular Signal Buffer Declaration */
uint32_t TriangularSignal_Buffer[DAC_TRIANGULAR_SIGNAL_DATASIZE]  =
{
  0x00, 0x02, 0x04, 0x06, 0x08, 0x0A, 0x0C, 0x0E,
  0x10, 0x12, 0x14, 0x16, 0x18, 0x1A, 0x1C, 0x1E,
  0x20, 0x22, 0x24, 0x26, 0x28, 0x2A, 0x2C, 0x2E,
  0x30, 0x32, 0x34, 0x36, 0x38, 0x3A, 0x3C, 0x3E,
  0x40, 0x42, 0x44, 0x46, 0x48, 0x4A, 0x4C, 0x4E,
  0x50, 0x52, 0x54, 0x56, 0x58, 0x5A, 0x5C, 0x5E,
  0x60, 0x62, 0x64, 0x66, 0x68, 0x6A, 0x6C, 0x6E,
  0x70, 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, 0x7E,
  0x80, 0x82, 0x84, 0x86, 0x88, 0x8A, 0x8C, 0x8E,
  0x90, 0x92, 0x94, 0x96, 0x98, 0x9A, 0x9C, 0x9E,
  0xA0, 0xA2, 0xA4, 0xA6, 0xA8, 0xAA, 0xAC, 0xAE,
  0xB0, 0xB2, 0xB4, 0xB6, 0xB8, 0xBA,

  0xBA, 0xB8, 0xB6, 0xB4, 0xB2, 0xB0, 0xAE, 0xAC,
  0xAA, 0xA8, 0xA6, 0xA4, 0xA2, 0xA0, 0x9E, 0x9C,
  0x9A, 0x98, 0x96, 0x94, 0x92, 0x90, 0x8E, 0x8C,
  0x8A, 0x88, 0x86, 0x84, 0x82, 0x80, 0x7E, 0x7C,
  0x7A, 0x78, 0x76, 0x74, 0x72, 0x70, 0x6E, 0x6C,
  0x6A, 0x68, 0x66, 0x64, 0x62, 0x60, 0x5E, 0x5C,
  0x5A, 0x58, 0x56, 0x54, 0x52, 0x50, 0x4E, 0x4C,
  0x4A, 0x48, 0x46, 0x44, 0x42, 0x40, 0x3E, 0x3C,
  0x3A, 0x38, 0x36, 0x34, 0x32, 0x30, 0x2E, 0x2C,
  0x2A, 0x28, 0x26, 0x24, 0x22, 0x20, 0x1E, 0x1C,
  0x1A, 0x18, 0x16, 0x14, 0x12, 0x10, 0x0E, 0x0C,
  0x0A, 0x08, 0x06, 0x04, 0x02, 0x00,


  0x00, 0x02, 0x04, 0x06, 0x08, 0x0A, 0x0C, 0x0E,
  0x10, 0x12, 0x14, 0x16, 0x18, 0x1A, 0x1C, 0x1E,
  0x20, 0x22, 0x24, 0x26, 0x28, 0x2A, 0x2C, 0x2E,
  0x30, 0x32, 0x34, 0x36, 0x38, 0x3A, 0x3C, 0x3E,
  0x40, 0x42, 0x44, 0x46, 0x48, 0x4A, 0x4C, 0x4E,
  0x50, 0x52, 0x54, 0x56, 0x58, 0x5A, 0x5C, 0x5E,
  0x60, 0x62, 0x64, 0x66, 0x68, 0x6A, 0x6C, 0x6E,
  0x70, 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, 0x7E,
  0x80, 0x82, 0x84, 0x86, 0x88, 0x8A, 0x8C, 0x8E,
  0x90, 0x92, 0x94, 0x96, 0x98, 0x9A, 0x9C, 0x9E,
  0xA0, 0xA2, 0xA4, 0xA6, 0xA8, 0xAA, 0xAC, 0xAE,
  0xB0, 0xB2, 0xB4, 0xB6, 0xB8, 0xBA,

  0xBA, 0xB8, 0xB6, 0xB4, 0xB2, 0xB0, 0xAE, 0xAC,
  0xAA, 0xA8, 0xA6, 0xA4, 0xA2, 0xA0, 0x9E, 0x9C,
  0x9A, 0x98, 0x96, 0x94, 0x92, 0x90, 0x8E, 0x8C,
  0x8A, 0x88, 0x86, 0x84, 0x82, 0x80, 0x7E, 0x7C,
  0x7A, 0x78, 0x76, 0x74, 0x72, 0x70, 0x6E, 0x6C,
  0x6A, 0x68, 0x66, 0x64, 0x62, 0x60, 0x5E, 0x5C,
  0x5A, 0x58, 0x56, 0x54, 0x52, 0x50, 0x4E, 0x4C,
  0x4A, 0x48, 0x46, 0x44, 0x42, 0x40, 0x3E, 0x3C,
  0x3A, 0x38, 0x36, 0x34, 0x32, 0x30, 0x2E, 0x2C,
  0x2A, 0x28, 0x26, 0x24, 0x22, 0x20, 0x1E, 0x1C,
  0x1A, 0x18, 0x16, 0x14, 0x12, 0x10, 0x0E, 0x0C,
  0x0A, 0x08, 0x06, 0x04, 0x02, 0x00,


  0x00, 0x02, 0x04, 0x06, 0x08, 0x0A, 0x0C, 0x0E,
  0x10, 0x12, 0x14, 0x16, 0x18, 0x1A, 0x1C, 0x1E,
  0x20, 0x22, 0x24, 0x26, 0x28, 0x2A, 0x2C, 0x2E,
  0x30, 0x32, 0x34, 0x36, 0x38, 0x3A, 0x3C, 0x3E,
  0x40, 0x42, 0x44, 0x46, 0x48, 0x4A, 0x4C, 0x4E,
  0x50, 0x52, 0x54, 0x56, 0x58, 0x5A, 0x5C, 0x5E,
  0x60, 0x62, 0x64, 0x66, 0x68, 0x6A, 0x6C, 0x6E,
  0x70, 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, 0x7E,
  0x80, 0x82, 0x84, 0x86, 0x88, 0x8A, 0x8C, 0x8E,
  0x90, 0x92, 0x94, 0x96, 0x98, 0x9A, 0x9C, 0x9E,
  0xA0, 0xA2, 0xA4, 0xA6, 0xA8, 0xAA, 0xAC, 0xAE,
  0xB0, 0xB2, 0xB4, 0xB6, 0xB8, 0xBA,

  0xBA, 0xB8, 0xB6, 0xB4, 0xB2, 0xB0, 0xAE, 0xAC,
  0xAA, 0xA8, 0xA6, 0xA4, 0xA2, 0xA0, 0x9E, 0x9C,
  0x9A, 0x98, 0x96, 0x94, 0x92, 0x90, 0x8E, 0x8C,
  0x8A, 0x88, 0x86, 0x84, 0x82, 0x80, 0x7E, 0x7C,
  0x7A, 0x78, 0x76, 0x74, 0x72, 0x70, 0x6E, 0x6C,
  0x6A, 0x68, 0x66, 0x64, 0x62, 0x60, 0x5E, 0x5C,
  0x5A, 0x58, 0x56, 0x54, 0x52, 0x50, 0x4E, 0x4C,
  0x4A, 0x48, 0x46, 0x44, 0x42, 0x40, 0x3E, 0x3C,
  0x3A, 0x38, 0x36, 0x34, 0x32, 0x30, 0x2E, 0x2C,
  0x2A, 0x28, 0x26, 0x24, 0x22, 0x20, 0x1E, 0x1C,
  0x1A, 0x18, 0x16, 0x14, 0x12, 0x10, 0x0E, 0x0C,
  0x0A, 0x08, 0x06, 0x04, 0x02, 0x00,


  0x00, 0x02, 0x04, 0x06, 0x08, 0x0A, 0x0C, 0x0E,
  0x10, 0x12, 0x14, 0x16, 0x18, 0x1A, 0x1C, 0x1E,
  0x20, 0x22, 0x24, 0x26, 0x28, 0x2A, 0x2C, 0x2E,
  0x30, 0x32, 0x34, 0x36, 0x38, 0x3A, 0x3C, 0x3E,
  0x40, 0x42, 0x44, 0x46, 0x48, 0x4A, 0x4C, 0x4E,
  0x50, 0x52, 0x54, 0x56, 0x58, 0x5A, 0x5C, 0x5E,
  0x60, 0x62, 0x64, 0x66, 0x68, 0x6A, 0x6C, 0x6E,
  0x70, 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, 0x7E,
  0x80, 0x82, 0x84, 0x86, 0x88, 0x8A, 0x8C, 0x8E,
  0x90, 0x92, 0x94, 0x96, 0x98, 0x9A, 0x9C, 0x9E,
  0xA0, 0xA2, 0xA4, 0xA6, 0xA8, 0xAA, 0xAC, 0xAE,
  0xB0, 0xB2, 0xB4, 0xB6, 0xB8, 0xBA,

  0xBA, 0xB8, 0xB6, 0xB4, 0xB2, 0xB0, 0xAE, 0xAC,
  0xAA, 0xA8, 0xA6, 0xA4, 0xA2, 0xA0, 0x9E, 0x9C,
  0x9A, 0x98, 0x96, 0x94, 0x92, 0x90, 0x8E, 0x8C,
  0x8A, 0x88, 0x86, 0x84, 0x82, 0x80, 0x7E, 0x7C,
  0x7A, 0x78, 0x76, 0x74, 0x72, 0x70, 0x6E, 0x6C,
  0x6A, 0x68, 0x66, 0x64, 0x62, 0x60, 0x5E, 0x5C,
  0x5A, 0x58, 0x56, 0x54, 0x52, 0x50, 0x4E, 0x4C,
  0x4A, 0x48, 0x46, 0x44, 0x42, 0x40, 0x3E, 0x3C,
  0x3A, 0x38, 0x36, 0x34, 0x32, 0x30, 0x2E, 0x2C,
  0x2A, 0x28, 0x26, 0x24, 0x22, 0x20, 0x1E, 0x1C,
  0x1A, 0x18, 0x16, 0x14, 0x12, 0x10, 0x0E, 0x0C,
  0x0A, 0x08, 0x06, 0x04, 0x02, 0x00,


  0x00, 0x02, 0x04, 0x06, 0x08, 0x0A, 0x0C, 0x0E,
  0x10, 0x12, 0x14, 0x16, 0x18, 0x1A, 0x1C, 0x1E,
  0x20, 0x22, 0x24, 0x26, 0x28, 0x2A, 0x2C, 0x2E,
  0x30, 0x32, 0x34, 0x36, 0x38, 0x3A, 0x3C, 0x3E,
  0x40, 0x42, 0x44, 0x46, 0x48, 0x4A, 0x4C, 0x4E,
  0x50, 0x52, 0x54, 0x56, 0x58, 0x5A, 0x5C, 0x5E,
  0x60, 0x62, 0x64, 0x66, 0x68, 0x6A, 0x6C, 0x6E,
  0x70, 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, 0x7E,
  0x80, 0x82, 0x84, 0x86, 0x88, 0x8A, 0x8C, 0x8E,
  0x90, 0x92, 0x94, 0x96, 0x98, 0x9A, 0x9C, 0x9E,
  0xA0, 0xA2, 0xA4, 0xA6, 0xA8, 0xAA, 0xAC, 0xAE,
  0xB0, 0xB2, 0xB4, 0xB6, 0xB8, 0xBA,

  0xBA, 0xB8, 0xB6, 0xB4, 0xB2, 0xB0, 0xAE, 0xAC,
  0xAA, 0xA8, 0xA6, 0xA4, 0xA2, 0xA0, 0x9E, 0x9C,
  0x9A, 0x98, 0x96, 0x94, 0x92, 0x90, 0x8E, 0x8C,
  0x8A, 0x88, 0x86, 0x84, 0x82, 0x80, 0x7E, 0x7C,
  0x7A, 0x78, 0x76, 0x74, 0x72, 0x70, 0x6E, 0x6C,
  0x6A, 0x68, 0x66, 0x64, 0x62, 0x60, 0x5E, 0x5C,
  0x5A, 0x58, 0x56, 0x54, 0x52, 0x50, 0x4E, 0x4C,
  0x4A, 0x48, 0x46, 0x44, 0x42, 0x40, 0x3E, 0x3C,
  0x3A, 0x38, 0x36, 0x34, 0x32, 0x30, 0x2E, 0x2C,
  0x2A, 0x28, 0x26, 0x24, 0x22, 0x20, 0x1E, 0x1C,
  0x1A, 0x18, 0x16, 0x14, 0x12, 0x10, 0x0E, 0x0C,
  0x0A, 0x08, 0x06, 0x04, 0x02, 0x00,
};
