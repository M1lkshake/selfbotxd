@echo off
title M1lkbot installer

echo /------------------\
echo Created by M1lkshake
echo \------------------/
echo.
echo Installing selfbot...
cd %~dp0
cmd /c "npm i"
echo.
echo Done!
echo.
echo Creating run file for M1lkbot..
echo -------------------------------
echo @echo off > run.bat
echo ::Created by M1lkshake. DO NOT EDIT. >> run.bat
echo echo Created by M1lkshake. >> run.bat
echo title M1lkbot >> run.bat
echo node self.js >> run.bat
echo echo M1lkbot closed. >> run.bat
echo Run file created. Have fun!
del "%~f0"
exit