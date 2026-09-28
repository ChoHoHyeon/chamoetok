# 참외톡톡 (확정) — 과일 낙하 퍼즐

## 파일 구성
- index.html      : 게임 본체 (HTML/JS 단일 파일). 더블클릭으로 바로 실행 가능
- manifest.json, sw.js : PWA(폰 홈화면 설치·오프라인). 웹서버(GitHub Pages 등)에 올렸을 때만 동작
- privacy.html    : 개인정보처리방침 (스토어 등록 시 URL 필요 → 같이 배포)
- capacitor.config.json, package.json, build-www.js : 앱 패키징용
- store/listing.md : 스토어 설명문·등록 절차 초안
- assets/         : 과일 캐릭터 6종(기본 + _joy 신난 표정), 배경(bg_portrait/bg_wide), 아이콘(icon-192/512/maskable), splash.jpg
- assets/src/     : 힉스필드 원본(1024px). 재가공 시 사용
- assets/_old/    : 이전 배경·미리보기 (삭제해도 됨)

## 테스트 방법
- PC: index.html 더블클릭 → 키보드(←→ 이동, Z/X 회전, ↓ 빨리, ↑/Space 바로놓기, Esc 일시정지)
- 폰: https://chohohyeon.github.io/chamoetok/ (수정 후 update.bat 더블클릭으로 반영). 터치(좌우 드래그 이동, 탭 회전, 아래로 스와이프 놓기)

## 스토어 등록(최종 단계) — Capacitor 패키징
1. Node.js 설치 후 이 폴더에서: npm install
2. npx cap add android   (capacitor.config.json 이미 준비됨, appId는 com.chohohyeon.chamoetok)
3. npm run android  → www/ 생성 + 동기화 + Android Studio 열림 → Build > Generate Signed Bundle(AAB)
   (스플래시: assets/splash.jpg, 아이콘: assets/icon.png 을 Android Studio Image Asset으로 등록)
4. Google Play Console(등록비 25달러, 1회)에 AAB 업로드. iOS는 Mac + Xcode + Apple Developer(연 99달러) 필요
5. 등록 전 KIPRIS(kipris.or.kr)에서 "참외톡톡" 상표 검색 1회

## IP 원칙
- 규칙(4개 연결 소멸·연쇄·방해블록)은 보호 대상 아님. 이름/캐릭터/음악/UI 연출은 전부 자체 제작
- 스토어 설명에 타사 게임명 언급 금지
