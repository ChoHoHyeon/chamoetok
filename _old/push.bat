@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist .git (
  git init
  git branch -M main
  git remote add origin https://github.com/ChoHoHyeon/chamoetok.git
)
git add -A
git commit -m "참외톡톡 업데이트 %date% %time%"
git push -u origin main
echo.
echo 완료. 1~2분 뒤 https://chohohyeon.github.io/chamoetok/ 에 반영됩니다.
timeout /t 5
