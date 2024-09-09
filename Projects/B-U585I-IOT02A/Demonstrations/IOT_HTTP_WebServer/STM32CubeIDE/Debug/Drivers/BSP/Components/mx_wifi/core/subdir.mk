################################################################################
# Automatically-generated file. Do not edit!
# Toolchain: GNU Tools for STM32 (12.3.rel1)
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS += \
C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_address.c \
C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.c \
C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.c \
C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.c 

OBJS += \
./Drivers/BSP/Components/mx_wifi/core/mx_address.o \
./Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.o \
./Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.o \
./Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.o 

C_DEPS += \
./Drivers/BSP/Components/mx_wifi/core/mx_address.d \
./Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.d \
./Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.d \
./Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.d 


# Each subdirectory must supply rules for building sources it contributes
Drivers/BSP/Components/mx_wifi/core/mx_address.o: C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_address.c Drivers/BSP/Components/mx_wifi/core/subdir.mk
	arm-none-eabi-gcc "$<" -mcpu=cortex-m33 -std=gnu11 -g3 -DDEBUG -DSTM32U585xx -DUSE_HAL_DRIVER -c -I../../../../../../Drivers/CMSIS/Include -I../../../../../../Drivers/CMSIS/Device/ST/STM32U5xx/Include -I../../../../../../Drivers/STM32U5xx_HAL_Driver/Inc -I../../../../../../Drivers/BSP/B-U585I-IOT02A -I../../../../../../Drivers/BSP/Components/mx_wifi -I../../../../../../Middlewares/ST/STM32_Network_Library/Includes -I../../Core/Inc -I../../WebServer/App -I../../WebServer/App/wifi -I../../WebServer/App/web_addons -I../../WebServer/App/sensors -I../../WebServer/App/http -I../../WebServer/Target -O0 -ffunction-sections -fdata-sections -Wall -fstack-usage -fcyclomatic-complexity -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" --specs=nano.specs -mfpu=fpv5-sp-d16 -mfloat-abi=hard -mthumb -o "$@"
Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.o: C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.c Drivers/BSP/Components/mx_wifi/core/subdir.mk
	arm-none-eabi-gcc "$<" -mcpu=cortex-m33 -std=gnu11 -g3 -DDEBUG -DSTM32U585xx -DUSE_HAL_DRIVER -c -I../../../../../../Drivers/CMSIS/Include -I../../../../../../Drivers/CMSIS/Device/ST/STM32U5xx/Include -I../../../../../../Drivers/STM32U5xx_HAL_Driver/Inc -I../../../../../../Drivers/BSP/B-U585I-IOT02A -I../../../../../../Drivers/BSP/Components/mx_wifi -I../../../../../../Middlewares/ST/STM32_Network_Library/Includes -I../../Core/Inc -I../../WebServer/App -I../../WebServer/App/wifi -I../../WebServer/App/web_addons -I../../WebServer/App/sensors -I../../WebServer/App/http -I../../WebServer/Target -O0 -ffunction-sections -fdata-sections -Wall -fstack-usage -fcyclomatic-complexity -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" --specs=nano.specs -mfpu=fpv5-sp-d16 -mfloat-abi=hard -mthumb -o "$@"
Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.o: C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.c Drivers/BSP/Components/mx_wifi/core/subdir.mk
	arm-none-eabi-gcc "$<" -mcpu=cortex-m33 -std=gnu11 -g3 -DDEBUG -DSTM32U585xx -DUSE_HAL_DRIVER -c -I../../../../../../Drivers/CMSIS/Include -I../../../../../../Drivers/CMSIS/Device/ST/STM32U5xx/Include -I../../../../../../Drivers/STM32U5xx_HAL_Driver/Inc -I../../../../../../Drivers/BSP/B-U585I-IOT02A -I../../../../../../Drivers/BSP/Components/mx_wifi -I../../../../../../Middlewares/ST/STM32_Network_Library/Includes -I../../Core/Inc -I../../WebServer/App -I../../WebServer/App/wifi -I../../WebServer/App/web_addons -I../../WebServer/App/sensors -I../../WebServer/App/http -I../../WebServer/Target -O0 -ffunction-sections -fdata-sections -Wall -fstack-usage -fcyclomatic-complexity -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" --specs=nano.specs -mfpu=fpv5-sp-d16 -mfloat-abi=hard -mthumb -o "$@"
Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.o: C:/Users/trung/UCLA/VScode/iotwebserver/Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.c Drivers/BSP/Components/mx_wifi/core/subdir.mk
	arm-none-eabi-gcc "$<" -mcpu=cortex-m33 -std=gnu11 -g3 -DDEBUG -DSTM32U585xx -DUSE_HAL_DRIVER -c -I../../../../../../Drivers/CMSIS/Include -I../../../../../../Drivers/CMSIS/Device/ST/STM32U5xx/Include -I../../../../../../Drivers/STM32U5xx_HAL_Driver/Inc -I../../../../../../Drivers/BSP/B-U585I-IOT02A -I../../../../../../Drivers/BSP/Components/mx_wifi -I../../../../../../Middlewares/ST/STM32_Network_Library/Includes -I../../Core/Inc -I../../WebServer/App -I../../WebServer/App/wifi -I../../WebServer/App/web_addons -I../../WebServer/App/sensors -I../../WebServer/App/http -I../../WebServer/Target -O0 -ffunction-sections -fdata-sections -Wall -fstack-usage -fcyclomatic-complexity -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" --specs=nano.specs -mfpu=fpv5-sp-d16 -mfloat-abi=hard -mthumb -o "$@"

clean: clean-Drivers-2f-BSP-2f-Components-2f-mx_wifi-2f-core

clean-Drivers-2f-BSP-2f-Components-2f-mx_wifi-2f-core:
	-$(RM) ./Drivers/BSP/Components/mx_wifi/core/mx_address.cyclo ./Drivers/BSP/Components/mx_wifi/core/mx_address.d ./Drivers/BSP/Components/mx_wifi/core/mx_address.o ./Drivers/BSP/Components/mx_wifi/core/mx_address.su ./Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.cyclo ./Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.d ./Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.o ./Drivers/BSP/Components/mx_wifi/core/mx_rtos_abs.su ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.cyclo ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.d ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.o ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_hci.su ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.cyclo ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.d ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.o ./Drivers/BSP/Components/mx_wifi/core/mx_wifi_ipc.su

.PHONY: clean-Drivers-2f-BSP-2f-Components-2f-mx_wifi-2f-core

