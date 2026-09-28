@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo === 참외톡톡 GitHub 업로드 ===
set /p REPO=GitHub 저장소 주소 (예: https://github.com/ChoHoHyeon/chamoetok.git): 
if not exist .git git init
git branch -M main
git add -A
git commit -m "참외톡톡 업데이트 %date% %time%"
git remote remove origin 2>nul
git remote add origin %REPO%
git push -u origin main
echo.
echo 완료. GitHub Pages가 켜져 있으면 1~2분 뒤 반영됩니다.
pause
