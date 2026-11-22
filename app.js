const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();toggle.focus();}});
window.matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
