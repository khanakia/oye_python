:: Name:     add-mongo-as-service.cmd
:: Purpose:  Adds MongoDB as a service to a Windows application development environment.
:: Note:     Run this script as an administrator.
:: Author:   www.geoffhayward.eu
:: Revision: Oct 2016 - initial version
:: setx /M PATH "%MY_DIR%mongodb"
@ECHO OFF

SETLOCAL ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

SET ME=%~n0
set MY_DIR=%~dp0

start ConEmu64 -single -cmd cmd
start ConEmu64 -single -cmd cmd /k "D: && cd D:\EasyPHP-DevServer-14.1VC11\data\localweb\trakkar_webapp\client\public && http-server"
start ConEmu64 -single -cmd cmd /k "D: && cd D:\EasyPHP-DevServer-14.1VC11\data\localweb\trakkar_webapp\client && webpack --watch"

:: pause
ENDLOCAL