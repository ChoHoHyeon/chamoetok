// 앱에 들어갈 파일만 www/ 폴더로 복사 (원본 assets/src, _old 제외)
const fs=require('fs'),path=require('path');
const out='www'; fs.rmSync(out,{recursive:true,force:true}); fs.mkdirSync(path.join(out,'assets'),{recursive:true});
for(const f of ['index.html','manifest.json','sw.js']) fs.copyFileSync(f,path.join(out,f));
for(const f of fs.readdirSync('assets')) if(/\.(png|jpg)$/.test(f)&&!f.startsWith('_')) fs.copyFileSync(path.join('assets',f),path.join(out,'assets',f));
fs.mkdirSync(path.join(out,'assets','audio'),{recursive:true});
for(const f of fs.readdirSync('assets/audio')) if(/\.mp3$/.test(f)) fs.copyFileSync(path.join('assets/audio',f),path.join(out,'assets','audio',f));
fs.mkdirSync(path.join(out,'assets','audio','voice'),{recursive:true});
for(const f of fs.readdirSync('assets/audio/voice')) if(/\.mp3$/.test(f)) fs.copyFileSync(path.join('assets/audio/voice',f),path.join(out,'assets','audio','voice',f));
console.log('www/ 준비 완료');
