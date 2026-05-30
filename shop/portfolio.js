var PROJECTS=[
  {id:'car-purchase',title:'Авто Выкуп',desc:'Реальный сайт выкупа автомобилей. Форма заявки, калькулятор, галерея, полный адаптив.',tag:'Визитка',type:'real',cat:'vizitki',imgs:['example/images/car-purchase1.jpg','example/images/car-purchase2.jpg','example/images/car-purchase3.jpg','example/images/car-purchase4.jpg'],link:'car-purchase.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example3',title:'Кира Эхо',desc:'Персональная визитка TikTok-креатора. Яркий стиль, плавные анимации, упор на медиа-контент.',tag:'Визитка',type:'demo',cat:'vizitki',imgs:['example/images/example3_1.jpg','example/images/example3_2.jpg','example/images/example3_3.jpg','example/images/example3_7.jpg','example/images/example3_8.jpg'],link:'example3.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example4',title:'VOLT',desc:'Визитка Twitch-стримера. Тёмная неоновая эстетика, расписание стримов, интеграция соцсетей.',tag:'Визитка',type:'demo',cat:'vizitki',imgs:['example/images/example4_1.jpg','example/images/example4_2.jpg','example/images/example4_3.jpg','example/images/example4_4.jpg','example/images/example4_5.jpg'],link:'example4.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example5',title:'Артём Корсак',desc:'Визитка Beauty & Fashion ретушёра. Минималистичный премиальный дизайн, портфолио работ.',tag:'Визитка',type:'demo',cat:'vizitki',imgs:['example/images/example5_1.jpg','example/images/example5_2.jpg','example/images/example5_3.jpg','example/images/example5_4.jpg'],link:'example5.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example6',title:'Никита НоваКаст',desc:'Визитка YouTube-блогера. Энергичная подача, превью видео, статистика канала и социальные сети.',tag:'Визитка',type:'demo',cat:'vizitki',imgs:['example/images/example6_1.jpg','example/images/example6_2.jpg','example/images/example6_3.jpg','example/images/example6_4.jpg','example/images/example6_8.jpg'],link:'example6.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example7',title:'Анна Серебрякова',desc:'Визитка репетитора по математике. Спокойный академический стиль, программы, расписание, форма записи.',tag:'Визитка',type:'demo',cat:'vizitki',imgs:['example/images/example7_1.jpg','example/images/example7_2.jpg','example/images/example7_3.jpg','example/images/example7_4.jpg'],link:'example7.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example1',title:'Портфолио Millerson',desc:'Презентационный лендинг-портфолио веб-разработчика. Структура, акценты, плавные анимации.',tag:'Лендинг',type:'demo',cat:'landings',imgs:['example/images/example1_1.jpg','example/images/example1_2.jpg','example/images/example1_3.jpg','example/images/example1_7.jpg','example/images/example1_8.jpg'],link:'example1.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example2',title:'ATELIER NORD',desc:'Лендинг-портфолио арт-директора. Сдержанная эстетика, типографика, кейсы крупными блоками.',tag:'Лендинг',type:'demo',cat:'landings',imgs:['example/images/example2_1.jpg','example/images/example2_2.jpg','example/images/example2_3.jpg','example/images/example2_4.jpg'],link:'example2.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example9',title:'ATELIER',desc:'Премиальный лендинг архитектурно-строительного бюро. Тёмная тема, тёплая палитра, бенто-сетка.',tag:'Лендинг',type:'demo',cat:'landings',imgs:['example/images/example9_1.jpg','example/images/example9_2.jpg','example/images/example9_3.jpg','example/images/example9_4.jpg','example/images/example9_5.jpg'],link:'example9.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example10',title:'MONO — Кофе и кухня',desc:'Лендинг для кофейни в стиле editorial: тёплая палитра, анимации при скролле, меню и форма бронирования.',tag:'Лендинг',type:'demo',cat:'landings',imgs:['example/images/example10_1.jpg','example/images/example10_2.jpg','example/images/example10_3.jpg','example/images/example10_4.jpg'],link:'example10.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example12',title:'Vivienne Noir — Nail Artist',desc:'Лендинг для мастера маникюра: тёмная роскошная эстетика, золотые акценты, галерея работ, онлайн-запись.',tag:'Лендинг',type:'demo',cat:'landings',imgs:['example/images/example12_4.jpg','example/images/example12_5.jpg','example/images/example12_6.jpg','example/images/example12_7.jpg','example/images/example12_8.jpg'],link:'example12.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  {id:'example8',title:'Полярис+',desc:'Корпоративный сайт медицинского центра. Услуги, врачи, прайс, запись на приём.',tag:'Многостраничник',type:'demo',cat:'multipage',imgs:['example/images/example8_1.jpg','example/images/example8_2.jpg','example/images/example8_3.jpg','example/images/example8_4.jpg','example/images/example8_5.jpg','example/images/example8_6.jpg'],link:'example8.html',meta:['ПК','HTML/CSS/JS']},
  {id:'example11',title:'АРТЕРИЯ — Кавер-группа',desc:'Многостраничный сайт кавер-группы: о команде, репертуар, галерея, концерты, онлайн-бронирование.',tag:'Многостраничник',type:'demo',cat:'multipage',imgs:['example/images/example11_7.jpg','example/images/example11_8.jpg'],link:'example/example11_about.html',meta:['ПК + Mobile','HTML/CSS/JS']},
  ];

  var CAT_META={
  vizitki:{label:'Сайты-визитки',icon:'fa-id-card',sub:'Личные и профессиональные одностраничники'},
  landings:{label:'Лендинги',icon:'fa-rocket',sub:'Продающие страницы для рекламы'},
  multipage:{label:'Многостраничные',icon:'fa-layer-group',sub:'Корпоративные сайты и порталы'},
  };
  var CATS=['vizitki','landings','multipage'];

  var filterType=null;
  var filterCat=null;

  function getVisible(){
  return PROJECTS.filter(function(p){
  if(filterType&&p.type!==filterType)return false;
  if(filterCat&&p.cat!==filterCat)return false;
  return true;
  });
  }

  function renderAll(){
  var visible=getVisible();
  var countEl=document.getElementById('pfCardsCount');
  if(countEl){
  var byCat={};
  CATS.forEach(function(c){byCat[c]=visible.filter(function(p){return p.cat===c;}).length;});
  var parts=CATS.filter(function(c){return byCat[c]>0;}).map(function(c){return '<strong>'+byCat[c]+'</strong> '+CAT_META[c].label;});
  countEl.innerHTML='Показано: '+visible.length+' работ — '+parts.join(', ');
  }
  CATS.forEach(function(cat){
  var sec=document.querySelector('[data-cat="'+cat+'"]');
  if(!sec)return;
  var catProjects=visible.filter(function(p){return p.cat===cat;});
  sec.style.display=catProjects.length?'':'none';
  var countSpan=sec.querySelector('.pf-cat-count');
  if(countSpan){var n=catProjects.length;countSpan.textContent=n+' '+(n===1?'работа':n<5?'работы':'работ');}
  var lent=sec.querySelector('.pf-lent');
  if(!lent)return;
  lent.style.transform='translateX(0)';
  lent.dataset.offset='0';
  lent.innerHTML=catProjects.map(function(p){
  var realBadge=p.type==='real'?'<span class="pf-card__real-badge pf-card__real-badge--real"><i class="fas fa-circle-check"></i> Реальный</span>':'<span class="pf-card__real-badge pf-card__real-badge--demo"><i class="fas fa-flask"></i> Демо</span>';
  var photoCnt=p.imgs.length>1?'<span class="pf-card__photo-cnt"><i class="fas fa-images"></i> '+p.imgs.length+'</span>':'';
  var viewIcon=p.link?'<i class="fas fa-arrow-up-right-from-square"></i> Открыть':'<i class="fas fa-expand"></i> Фото';
  var metaHtml=(p.meta||[]).map(function(m,i){return '<span><i class="fas '+(i===0?'fa-desktop':'fa-bolt')+'"></i> '+m+'</span>';}).join('');
  var wantUrl=p.cat==='vizitki'?'svc-vizitka.html':p.cat==='landings'?'svc-landing.html':'svc-multipage.html';
  return '<article class="pf-card" data-id="'+p.id+'" title="'+(p.link?'Открыть демо: '+p.title:'Смотреть скриншоты: '+p.title)+'"><div class="pf-card__media"><span class="pf-card__tag">'+p.tag+'</span>'+realBadge+photoCnt+'<img class="pf-card__img" src="'+p.imgs[0]+'" alt="'+p.title+'" loading="lazy" onerror="this.onerror=null;this.classList.add(\'pf-card__img--err\');this.removeAttribute(\'src\')"><div class="pf-card__no-img" style="display:none"><i class=\'fas fa-image\'></i><span>Скриншот в процессе</span></div><div class="pf-card__view">'+viewIcon+'</div></div><div class="pf-card__body"><h3 class="pf-card__title">'+p.title+'</h3><p class="pf-card__desc">'+p.desc+'</p><div class="pf-card__meta">'+metaHtml+'</div><a class="pf-card__want-btn" href="'+wantUrl+'" onclick="event.stopPropagation()"><i class="fas fa-heart"></i> Хочу такой же</a></div></article>';
  }).join('');
  lent.querySelectorAll('.pf-card').forEach(function(card){
  card.addEventListener('click',function(){openProject(card.dataset.id);});
  });
  });
  }

  function openProject(id){
  var p=PROJECTS.find(function(x){return x.id===id;});
  if(!p)return;
  if(p.link){window.open(p.link,'_blank','noopener');return;}
  openLightbox(p,0);
  }

  var lbProject=null,lbIdx=0;
  function openLightbox(p,idx){
  lbProject=p;lbIdx=idx;
  var lb=document.getElementById('pfLightbox');
  if(!lb)return;
  lb.classList.add('open');
  document.body.style.overflow='hidden';
  showLbImg(idx);
  }
  function showLbImg(idx){
  if(!lbProject)return;
  if(idx<0)idx=lbProject.imgs.length-1;
  if(idx>=lbProject.imgs.length)idx=0;
  lbIdx=idx;
  var img=document.getElementById('pfLbImg');
  var title=document.getElementById('pfLbTitle');
  var counter=document.getElementById('pfLbCounter');
  var openBtn=document.getElementById('pfLbOpen');
  if(img){img.src=lbProject.imgs[idx];img.alt=lbProject.title;}
  if(title)title.textContent=lbProject.title;
  if(counter)counter.textContent=(idx+1)+' / '+lbProject.imgs.length;
  if(openBtn)openBtn.style.display=lbProject.link?'':'none';
  }
  function closeLightbox(){
  var lb=document.getElementById('pfLightbox');
  if(lb)lb.classList.remove('open');
  document.body.style.overflow='';
  lbProject=null;
  }

  function initArrows(){
  document.querySelectorAll('.pf-cat-head').forEach(function(head){
  var sec=head.closest('[data-cat]');
  if(!sec)return;
  var lent=sec.querySelector('.pf-lent');
  if(!lent)return;
  head.querySelectorAll('.pf-arrow').forEach(function(btn){
  btn.addEventListener('click',function(){
  var dir=btn.dataset.dir;
  var cardW=316;
  var offset=parseInt(lent.dataset.offset)||0;
  var maxCards=lent.querySelectorAll('.pf-card').length;
  var wrap=lent.parentElement;
  var wrapW=wrap?wrap.offsetWidth:900;
  var visible=Math.floor(wrapW/cardW)||1;
  var maxOffset=-(Math.max(0,maxCards-visible))*cardW;
  if(dir==='next')offset=Math.max(maxOffset,offset-cardW);
  else offset=Math.min(0,offset+cardW);
  lent.dataset.offset=offset;
  lent.style.transform='translateX('+offset+'px)';
  });
  });
  });
  }

  function initFilters(){
  document.querySelectorAll('[data-pf-type]').forEach(function(btn){
  btn.addEventListener('click',function(){
  document.querySelectorAll('[data-pf-type]').forEach(function(b){b.classList.remove('is-active');});
  var val=btn.dataset.pfType;
  filterType=val==='all'?null:val;
  btn.classList.add('is-active');
  renderAll();
  });
  });
  document.querySelectorAll('[data-pf-cat]').forEach(function(btn){
  btn.addEventListener('click',function(){
  document.querySelectorAll('[data-pf-cat]').forEach(function(b){b.classList.remove('is-active');});
  var val=btn.dataset.pfCat;
  filterCat=val==='all'?null:val;
  btn.classList.add('is-active');
  renderAll();
  });
  });
  }

  function pfInit(){
  var lbHtml='<div id="pfLightbox" class="pf-lightbox"><div class="pf-lb-bg"></div><button class="pf-lb-close" id="pfLbClose"><i class="fas fa-times"></i></button><button class="pf-lb-arrow pf-lb-prev" id="pfLbPrev"><i class="fas fa-chevron-left"></i></button><button class="pf-lb-arrow pf-lb-next" id="pfLbNext"><i class="fas fa-chevron-right"></i></button><div class="pf-lb-wrap"><img id="pfLbImg" src="" alt=""><div class="pf-lb-info"><span id="pfLbTitle"></span><span id="pfLbCounter"></span><a id="pfLbOpen" href="#" target="_blank" rel="noopener" class="btn btn--primary btn--sm" style="display:none"><i class="fas fa-arrow-up-right-from-square"></i> Открыть работу</a></div></div></div>';
  document.body.insertAdjacentHTML('beforeend',lbHtml);
  document.getElementById('pfLbClose').addEventListener('click',closeLightbox);
  document.getElementById('pfLbPrev').addEventListener('click',function(){showLbImg(lbIdx-1);});
  document.getElementById('pfLbNext').addEventListener('click',function(){showLbImg(lbIdx+1);});
  document.querySelector('.pf-lb-bg').addEventListener('click',closeLightbox);
  document.getElementById('pfLbOpen').addEventListener('click',function(e){
  e.preventDefault();if(lbProject&&lbProject.link)window.open(lbProject.link,'_blank','noopener');
  });
  document.addEventListener('keydown',function(e){
  var lb=document.getElementById('pfLightbox');
  if(!lb||!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowLeft')showLbImg(lbIdx-1);
  if(e.key==='ArrowRight')showLbImg(lbIdx+1);
  });
  renderAll();
  initArrows();
  initFilters();
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',pfInit);}
  else{pfInit();}
