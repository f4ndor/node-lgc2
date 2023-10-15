@echo off
start /d "D:\Work\node-lgc2\bin" WolCmd.exe AC5AF0D7FA96 192.168.1.110 255.255.255.0 1
cd D:\Work\node-lgc2
node setVolume.js --volume=0
@exit