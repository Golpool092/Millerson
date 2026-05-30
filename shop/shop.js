var ORDER_CONFIG={
vizitka:{title:'Сайт-визитка',base:'4 000 ₽',instructions:'Укажите: тематику сайта, желаемый стиль и цвета, количество страниц, наличие текста и фотографий.',options:['Адаптив (mobile)','Форма обратной связи','Анимации','SEO-оптимизация','Разработка под Figma-макет']},
landing:{title:'Лендинг',base:'6 000 ₽',instructions:'Укажите: нишу и целевую аудиторию, главный оффер, желаемые блоки (FAQ, CTA, галерея), наличие готового текста.',options:['Форма / кнопка CTA','Калькулятор цены','Анимации и эффекты','SEO-оптимизация','Интеграция Яндекс.Метрика']},
multipage:{title:'Многостраничный сайт',base:'10 000 ₽',instructions:'Укажите: количество и названия страниц, тематику, наличие текста и фотографий, особые пожелания.',options:['До 5 страниц','Блог / новости','Поиск по сайту','SEO + sitemap','Интерактивный прайс']},
figma:{title:'По дизайну Figma',base:'3 000 ₽',instructions:'Пришлите ссылку на Figma-макет. Укажите: нужен ли адаптив, анимации из прототипа, количество страниц.',options:['Пиксель-перфект вёрстка','Адаптивная версия','Анимации из прототипа','Слайдеры / галерея','Интерактивные формы']},
clone:{title:'Клон сайта',base:'4 000 ₽',instructions:'Пришлите ссылку на сайт-референс. Укажите: ваш контент, логотип, фирменные цвета и отличия от оригинала.',options:['Адаптация под ваш бренд','Изменение цвета/шрифта','Ваш контент и логотип','SEO-подготовка','Адаптивная версия']},
tgbot:{title:'Telegram-бот',base:'2 000 ₽',instructions:'Опишите задачи бота: что должен делать, кто будет им пользоваться, нужна ли база данных или сторонние интеграции.',options:['Приём заявок / заказов','Рассылка и уведомления','Меню, кнопки, инлайн','База данных','Интеграция с Google Таблицами']},
console:{title:'Консольная программа',base:'1 500 ₽',instructions:'Опишите задачу: что обрабатывает программа, формат входных/выходных данных, нужен ли автозапуск по расписанию.',options:['Обработка файлов и данных','Интеграция с API','Логирование и отчёты','Автозапуск / планировщик','Сложная логика алгоритмов']},
desktop:{title:'Приложение для ПК',base:'3 500 ₽',instructions:'Опишите интерфейс и функционал: что делает приложение, с какими данными работает, требуется ли упаковка в .exe.',options:['Графический интерфейс (PyQt/Tkinter)','Работа с файлами и данными','Упаковка в .exe','Инсталлятор','Сложная логика']},
parser:{title:'Парсинг сайтов',base:'1 500 ₽',instructions:'Укажите: ссылку на целевой сайт, нужные поля для сбора данных, формат выгрузки (Excel/CSV/JSON) и частоту запуска.',options:['Выгрузка в Excel/CSV/JSON','Обход базовой защиты','Автозапуск по расписанию','Авторизация','Сложный сайт']},
fixes:{title:'Правки и доработка',base:'300 ₽ за правку',instructions:'Укажите: ссылку на сайт или пришлите файлы, опишите конкретные изменения которые необходимо внести.',options:['Исправление ошибок (багов)','Добавление нового блока','Оптимизация скорости','Корректировка дизайна','Адаптация под мобильные']},
redesign:{title:'Редизайн сайта',base:'3 000 ₽',instructions:'Укажите: ссылку на текущий сайт, желаемый стиль, цвета бренда, есть ли Figma-макет нового дизайна.',options:['Новая цветовая схема','Обновление типографики','Современный UI/UX','Обновление структуры','Анимации и переходы']},
seo:{title:'SEO-оптимизация',base:'2 000 ₽',instructions:'Укажите: ссылку на сайт или пришлите файлы, целевые ключевые слова, нужен ли полный аудит скорости и технических ошибок.',options:['Мета-теги и заголовки','Schema.org разметка','Sitemap и robots.txt','Оптимизация скорости','Яндекс.Метрика / GA']},
pricepage:{title:'Страница прайса',base:'2 000 ₽',instructions:'Укажите: список тарифов и услуг с ценами, нужна ли форма заказа, предпочтительный стиль оформления (таблица/карточки/калькулятор).',options:['Таблица тарифов','Интерактивный калькулятор','Акции и скидки','Адаптивная версия','Форма заказа']},
contactform:{title:'Форма контактов',base:'1 000 ₽',instructions:'Укажите: нужные поля формы, куда отправлять заявки (Telegram/Email), дизайн-референс при наличии.',options:['Отправка в Telegram','Email-уведомления','Валидация полей','Защита от спама','Кастомный дизайн']},
adaptive:{title:'Адаптивная версия',base:'1 500 ₽',instructions:'Пришлите ссылку на сайт или файлы. Укажите проблемные устройства и размеры экранов для тестирования.',options:['Мобильная версия (до 768px)','Планшетная версия','Тестирование на устройствах','Исправление критичных багов','Оптимизация изображений']},
};

var NON_WEB_KEYS=['tgbot','desktop','parser','console'];

function openOrder(key){
var cfg=ORDER_CONFIG[key];
if(!cfg)return;
var ov=document.getElementById('orderOverlay');
var t=document.getElementById('orderTitle');
var sub=document.getElementById('orderSub');
var chips=document.getElementById('orderChips');
if(!ov||!t||!chips)return;
t.textContent='Заказать: '+cfg.title;
if(sub)sub.textContent='От '+cfg.base+'. '+(cfg.instructions||'Опишите задачу — сформируем текст для отправки.');
chips.innerHTML='';
cfg.options.forEach(function(o){
var c=document.createElement('div');
c.className='order-chip';c.textContent=o;
c.addEventListener('click',function(){c.classList.toggle('sel');buildPreview(key);});
chips.appendChild(c);
});
var serviceField=document.getElementById('orderService');
if(serviceField)serviceField.value=key;
buildPreview(key);
ov.classList.add('open');
document.body.style.overflow='hidden';
}

function buildPreview(key){
var cfg=ORDER_CONFIG[key]||{};
var name=document.getElementById('orderName');
var desc=document.getElementById('orderDesc');
var chips=document.querySelectorAll('#orderChips .order-chip.sel');
var opts=[];
chips.forEach(function(c){opts.push('  • '+c.textContent);});
var lines=['Здравствуйте!',''];
lines.push('Хочу оформить заказ на: '+((cfg&&cfg.title)||key));
lines.push('Базовая стоимость: от '+((cfg&&cfg.base)||'—'));
if(desc&&desc.value.trim()){lines.push('');lines.push('Описание задачи:');lines.push(desc.value.trim());}
if(opts.length){lines.push('');lines.push('Дополнительные опции:');opts.forEach(function(o){lines.push(o);});}
if(name&&name.value.trim()){lines.push('');lines.push('Контакт для связи: '+name.value.trim());}
lines.push('');lines.push('С уважением, жду вашего ответа!');
var prev=document.getElementById('orderPreviewText');
if(prev)prev.textContent=lines.join('\n');
}

function closeOrder(){
var ov=document.getElementById('orderOverlay');
if(ov)ov.classList.remove('open');
document.body.style.overflow='';
}

function sendToTg(){
var text=document.getElementById('orderPreviewText');
if(!text)return;
var svcField=document.getElementById('orderService');
var key=svcField?svcField.value:'';
var url=NON_WEB_KEYS.indexOf(key)>-1
?'https://t.me/GeronZxc?text='+encodeURIComponent(text.textContent)
:'https://t.me/Mson_Shop?text='+encodeURIComponent(text.textContent);
window.open(url,'_blank','noopener');
}

document.addEventListener('DOMContentLoaded',function(){
var ov=document.getElementById('orderOverlay');
var closeBtn=document.getElementById('orderClose');
if(closeBtn)closeBtn.addEventListener('click',closeOrder);
if(ov)ov.addEventListener('click',function(e){if(e.target===ov)closeOrder();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeOrder();});
var nameEl=document.getElementById('orderName');
var descEl=document.getElementById('orderDesc');
if(nameEl)nameEl.addEventListener('input',function(){buildPreview(document.getElementById('orderService')?document.getElementById('orderService').value:'');});
if(descEl)descEl.addEventListener('input',function(){buildPreview(document.getElementById('orderService')?document.getElementById('orderService').value:'');});
var sendBtn=document.getElementById('orderSend');
if(sendBtn)sendBtn.addEventListener('click',sendToTg);
var bt=document.getElementById('backTop');
if(bt)bt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
document.querySelectorAll('.faq-q').forEach(function(q){
q.addEventListener('click',function(){
var item=q.closest('.faq-item');
var wasOpen=item.classList.contains('open');
document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');});
if(!wasOpen)item.classList.add('open');
});
});
});
