(function(){
var NAV=[
{href:'../index.html',label:'Главная',icon:'fa-home'},
{href:'../about.html',label:'О компании',icon:'fa-building'},
{href:'../all.html',label:'Все проекты',icon:'fa-th'},
{href:'shop.html',label:'Каталог',icon:'fa-store'},
{href:'svc-vizitka.html',label:'Сайт-визитка',icon:'fa-id-card'},
{href:'svc-landing.html',label:'Лендинг',icon:'fa-rocket'},
{href:'svc-multipage.html',label:'Многостраничный',icon:'fa-layer-group'},
{href:'svc-figma.html',label:'По Figma',icon:'fa-pen-ruler'},
{href:'svc-clone.html',label:'Клон сайта',icon:'fa-copy'},
{href:'svc-tgbot.html',label:'Telegram-бот',icon:'fa-robot'},
{href:'svc-desktop.html',label:'Приложение для ПК',icon:'fa-desktop'},
{href:'svc-parser.html',label:'Парсинг',icon:'fa-spider'},
{href:'portfolio.html',label:'Портфолио',icon:'fa-images'},
{href:'feedback.html',label:'Отзывы',icon:'fa-star'},
];
var NON_WEB=['svc-tgbot.html','svc-desktop.html','svc-parser.html','svc-console.html'];
function tgLink(){return 'https://t.me/Millerson_Company/30';}
function tgHandle(){return 'Millerson Company';}
function cur(href){
if(href.startsWith('http'))return false;
var p=location.pathname.split('/').pop()||'shop.html';
return p===href.split('#')[0];
}
function inject(){
var hdr=document.createElement('header');
hdr.className='sc-header';
hdr.innerHTML='<div class="container"><a class="sc-logo" href="shop.html">Millerson<span> Shop</span></a><nav class="sc-nav" id="smNav"></nav><div class="sc-header-right"><button class="sc-search-btn" id="smSearchBtn" aria-label="Поиск"><i class="fas fa-search"></i></button><a href="'+tgLink()+'" target="_blank" rel="noopener" class="btn btn--tg btn--sm" style="flex-shrink:0"><i class="fab fa-telegram"></i> Написать</a><button class="sc-burger" id="smBurger" aria-label="Меню"><span></span><span></span><span></span></button></div></div>';
document.body.insertBefore(hdr,document.body.firstChild);
var searchBar=document.createElement('div');
searchBar.className='sc-search-bar';searchBar.id='smSearchBar';
searchBar.innerHTML='<div class="container"><div class="sc-search-inner"><i class="fas fa-search"></i><input type="search" id="smSearchInput" placeholder="Поиск по странице…" autocomplete="off"><button id="smSearchClose"><i class="fas fa-times"></i></button></div><div class="sc-search-results" id="smSearchResults"></div></div>';
hdr.after(searchBar);
var nav=document.getElementById('smNav');
NAV.slice(0,6).forEach(function(l){
var a=document.createElement('a');
a.href=l.href;a.textContent=l.label;
if(cur(l.href))a.className='active';
nav.appendChild(a);
});
var overlay=document.createElement('div');
overlay.className='sc-overlay';overlay.id='smOverlay';
document.body.appendChild(overlay);
var drawer=document.createElement('div');
drawer.className='sc-drawer';drawer.id='smDrawer';
var dhdr=document.createElement('div');dhdr.className='sc-drawer-hdr';
dhdr.innerHTML='<span class="sc-drawer-hdr__title"><i class="fas fa-bars"></i> Меню</span><button class="sc-drawer-close" id="smDrawerClose" aria-label="Закрыть меню"><i class="fas fa-times"></i></button>';
var dnav=document.createElement('nav');
NAV.forEach(function(l){
var a=document.createElement('a');
a.href=l.href;
a.innerHTML='<i class="fas '+l.icon+'"></i>'+l.label;
if(cur(l.href))a.className='active';
dnav.appendChild(a);
});
var sep=document.createElement('div');sep.className='sc-drawer-sep';
var foot=document.createElement('div');foot.className='sc-drawer-foot';
foot.innerHTML='<a href="'+tgLink()+'" target="_blank" rel="noopener"><i class="fab fa-telegram" style="color:var(--c-tg)"></i>'+tgHandle()+'</a><a href="https://kwork.ru/user/Millerson_Shop" target="_blank" rel="noopener"><i class="fas fa-briefcase" style="color:var(--c-accent)"></i>Kwork</a>';
drawer.appendChild(dhdr);drawer.appendChild(dnav);drawer.appendChild(sep);drawer.appendChild(foot);
document.body.appendChild(drawer);
var burger=document.getElementById('smBurger');
function openD(){drawer.classList.add('open');overlay.classList.add('open');burger.classList.add('open');document.body.style.overflow='hidden';}
function closeD(){drawer.classList.remove('open');overlay.classList.remove('open');burger.classList.remove('open');document.body.style.overflow='';}
document.getElementById('smDrawerClose').addEventListener('click',closeD);
burger.addEventListener('click',function(){drawer.classList.contains('open')?closeD():openD();});
overlay.addEventListener('click',closeD);
dnav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeD);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeD();closeSearch();}});
var scrollBar=document.getElementById('scrollBar');
window.addEventListener('scroll',function(){
if(scrollBar){var p=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;scrollBar.style.width=Math.min(p,100)+'%';}
var bt=document.getElementById('backTop');
if(bt)bt.classList.toggle('visible',window.scrollY>400);
},{passive:true});
var bt=document.getElementById('backTop');
if(bt)bt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
initSearch();
}
function initSearch(){
var btn=document.getElementById('smSearchBtn');
var bar=document.getElementById('smSearchBar');
var input=document.getElementById('smSearchInput');
var results=document.getElementById('smSearchResults');
var closeBtn=document.getElementById('smSearchClose');
if(!btn||!bar||!input)return;
btn.addEventListener('click',function(){
bar.classList.toggle('open');
if(bar.classList.contains('open')){input.focus();}
else{closeSearch();}
});
if(closeBtn)closeBtn.addEventListener('click',closeSearch);
input.addEventListener('input',function(){
var q=input.value.trim();
if(q.length<2){results.innerHTML='';results.style.display='none';return;}
doSearch(q);
});
input.addEventListener('keydown',function(e){
if(e.key==='Escape')closeSearch();
if(e.key==='Enter'){
var first=results.querySelector('.sc-sr-item');
if(first)first.click();
}
});
}
function closeSearch(){
var bar=document.getElementById('smSearchBar');
var input=document.getElementById('smSearchInput');
var results=document.getElementById('smSearchResults');
if(bar)bar.classList.remove('open');
if(input)input.value='';
if(results){results.innerHTML='';results.style.display='none';}
}
function doSearch(q){
var results=document.getElementById('smSearchResults');
if(!results)return;
var ql=q.toLowerCase();
var hits=[];
var seen=new Set();
var elems=document.querySelectorAll('h1,h2,h3,h4,.svc-card__title,.pf-card__title,.rv-card__text,.sect-hdr__title,.ms-hero__title,p,li');
elems.forEach(function(el){
var txt=el.textContent||'';
if(txt.toLowerCase().indexOf(ql)>-1&&!seen.has(el)&&hits.length<8){
seen.add(el);
var heading=el.closest('section');
var sectionTitle='';
if(heading){var h=heading.querySelector('h2,h3,.sect-hdr__title,.svc-card__title');if(h)sectionTitle=h.textContent.trim().slice(0,40);}
var snippet=txt.trim().slice(0,80);
hits.push({el:el,label:sectionTitle||snippet,snippet:snippet});
}
});
if(hits.length===0){results.innerHTML='<div class="sc-sr-empty">Ничего не найдено</div>';results.style.display='block';return;}
results.innerHTML=hits.map(function(h,i){
return '<div class="sc-sr-item" data-idx="'+i+'"><i class="fas fa-search"></i><span>'+escHtml(h.label||h.snippet)+'</span></div>';
}).join('');
results.style.display='block';
results.querySelectorAll('.sc-sr-item').forEach(function(item,i){
item.addEventListener('click',function(){
hits[i].el.scrollIntoView({behavior:'smooth',block:'center'});
hits[i].el.classList.add('sc-highlight');
setTimeout(function(){hits[i].el.classList.remove('sc-highlight');},2200);
closeSearch();
});
});
}
function escHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',inject);}
else{inject();}
})();
