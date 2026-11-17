// The original Day 8 ink courier carries evaluation runs through Day 9 checkpoints.
(()=>{
document.querySelector('.lab-scene')?.remove();
const rail=document.createElement('div');rail.className='day9-eval-rail';
rail.innerHTML='<span class="scene-caption">LogiX-VN / Evaluation</span><div class="scene-stations"><span>ITEM × SEED</span><i></i><span>GRADER</span><i></i><span>REPORT</span><i></i><span class="scene-gate">GATE</span><strong class="scene-verdict">PASS</strong></div><small class="scene-context"></small>';
document.body.append(rail);
const contexts={INTRO:'Tổng quan · Hiểu bài lab trước khi thực hành',M0:'M0 · Chuẩn bị dữ liệu và môi trường',M1:'M1 · Trace có bằng chứng cho từng failure mode',M2:'M2 · Judge đạt calibration mới được sử dụng',M3:'M3 · Chấm ledger, approval và reply',M4:'M4 · So baseline với PR trước khi merge',M5:'M5 · Kiểm tra riêng từng slice quan trọng',M6:'M6 · Đánh giá độ ổn định qua nhiều seed',M7:'M7 · Chặn report thiếu bằng chứng hoặc spec bị nới'};
let elapsed=0,last=0;
function update(now){if(!document.hidden){elapsed+=(now-last)/1000;}last=now;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const phase=reduce?0:Math.floor(elapsed/3)%4;const labels=['fixed · MERGE','seeded_regression · BLOCK','honest_refactor · MERGE','slice_regression · BLOCK'];const bad=phase%2===1;rail.classList.toggle('is-block',bad);rail.querySelector('.scene-verdict').textContent=labels[phase];rail.querySelector('.scene-context').textContent=contexts[slides[current].cp];requestAnimationFrame(update)}
requestAnimationFrame(t=>{last=t;update(t)});
const button=document.createElement('button');button.className='scene-toggle';button.textContent='Hình động A';button.setAttribute('aria-pressed','true');document.querySelector('.deck-footer > div').prepend(button);function toggle(){const hidden=document.body.classList.toggle('scene-off');button.setAttribute('aria-pressed',String(!hidden));}button.onclick=toggle;document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='a')toggle()});
})();
