const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('is-open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{
 if(toggle.getAttribute('aria-expanded')!=='true')return;
 if(e.key==='Escape'){closeMenu();toggle.focus();}
 if(e.key==='Tab'){
  const links=[...nav.querySelectorAll('a')],last=links.at(-1);
  if(e.shiftKey&&document.activeElement===toggle){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();toggle.focus();}
 }
});
window.matchMedia('(min-width:1024px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

const sectionLinks=[...nav.querySelectorAll('a[href^="#"]')];
let scheduled=false;
function markSection(){
 const boundary=document.querySelector('.nav').offsetHeight+window.innerHeight*.25;
 let current=null;
 for(const link of sectionLinks){
  const section=document.querySelector(link.getAttribute('href'));
  if(section&&section.getBoundingClientRect().top<=boundary)current=link;
 }
 for(const link of sectionLinks){
  if(link===current)link.setAttribute('aria-current','location');
  else link.removeAttribute('aria-current');
 }
 scheduled=false;
}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(markSection);}},{passive:true});
window.addEventListener('resize',markSection);
markSection();
