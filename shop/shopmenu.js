(function(){
var NAV=[
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
function cur(href){
var p=location.pathname.split('/').pop()||'shop.html';
return p===href.split('#')[0]||p===href;
}
function inject(){
var old=document.querySelector('header.header,.header,[data-old-header]');
if(old)old.style.display='none';
var hdr=document.createElement('header');
hdr.className='sc-header';
hdr.innerHTML='<div class="container"><a class="sc-logo" href="shop.html">Millerson<span> Shop</span></a><nav class="sc-nav" id="smNav"></nav><div class="sc-header-right"><a href="https://t.me/Mson_Shop" target="_blank" rel="noopener" class="btn btn--tg btn--sm"><i class="fab fa-telegram"></i> Написать</a><button class="sc-burger" id="smBurger" aria-label="Меню"><span></span><span></span><span></span></button></div></div>';
document.body.insertBefore(hdr,document.body.firstChild);
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
foot.innerHTML='<a href="https://t.me/Mson_Shop" target="_blank" rel="noopener"><i class="fab fa-telegram" style="color:var(--c-tg)"></i>@Mson_Shop</a><a href="https://kwork.ru/user/Millerson_Shop" target="_blank" rel="noopener"><i class="fas fa-briefcase" style="color:var(--c-accent)"></i>Kwork</a><a href="../index.html"><i class="fas fa-home" style="color:var(--c-text2)"></i>Главный сайт</a>';
drawer.appendChild(dnav);drawer.appendChild(sep);drawer.appendChild(foot);
document.body.appendChild(drawer);
var burger=document.getElementById('smBurger');
function open(){drawer.classList.add('open');overlay.classList.add('open');burger.classList.add('open');document.body.style.overflow='hidden';}
function close(){drawer.classList.remove('open');overlay.classList.remove('open');burger.classList.remove('open');document.body.style.overflow='';}
burger.addEventListener('click',function(){drawer.classList.contains('open')?close():open();});
overlay.addEventListener('click',close);
dnav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',inject);}
else{inject();}
})();
