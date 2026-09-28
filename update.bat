@echo off
chcp 65001 >nul
cd /d "%~dp0"
git add -A
git commit -m "참외톡톡 업데이트 %date% %time%"
git push
echo 완료.
pause
