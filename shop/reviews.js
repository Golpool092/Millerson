/* ================================================
   Millerson — reviews.js
   89 отзывов · средний рейтинг 4.6
   5★=62  4★=20  3★=5  2★=2
   ================================================ */

const REVIEWS = [
  /* --- САЙТ-ВИЗИТКА (35 шт: 5★×22, 4★×9, 3★×3, 2★×1) --- */
  {id:1,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Всё чётко и по делу. Сайт сдали раньше срока, выглядит отлично. Работаю с фрилансерами давно — Millerson один из лучших по соотношению цены и качества.',date:'2024-02-14'},
  {id:2,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Заказывал визитку для небольшого ателье. Результат превзошёл ожидания — адаптив работает идеально, анимации плавные, код аккуратный.',date:'2024-03-01'},
  {id:3,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Быстро, качественно, недорого. Именно то, что нужно для старта. Спасибо!',date:'2024-03-15'},
  {id:4,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сделал визитку для фотографа. Всё чисто, без лишнего. Дизайн согласовали за один круг правок.',date:'2024-04-02'},
  {id:5,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Обращался второй раз — снова доволен. Всегда на связи, отвечает быстро, делает качественно.',date:'2024-04-18'},
  {id:6,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Грамотный специалист. Сайт загружается мгновенно, Google PageSpeed показал 98/100.',date:'2024-05-05'},
  {id:7,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Рекомендую. Сделал визитку для репетитора — чисто, строго, профессионально. Клиенты уже пишут через форму.',date:'2024-05-20'},
  {id:8,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Понравился подход: сначала уточнил всё по задаче, потом сделал. Никаких лишних вопросов и переделок.',date:'2024-06-08'},
  {id:9,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Получил готовый сайт за 2 дня. Для такой цены — просто отличное качество. Чистый HTML без конструкторов.',date:'2024-06-22'},
  {id:10,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Делал визитку для барбершопа. Итогом доволен, стиль попал в точку. Сдал без задержек.',date:'2024-07-04'},
  {id:11,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Отличная работа. SEO базовое настроено, sitemap есть, всё по уму.',date:'2024-07-19'},
  {id:12,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Заказывал минималистичную визитку для психолога. Всё получилось именно так, как я описал.',date:'2024-08-01'},
  {id:13,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Работает чётко. Написал ТЗ, получил результат. Правки внёс быстро.',date:'2024-08-17'},
  {id:14,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Приятно иметь дело с профессионалом. Код открыл — всё читабельно и структурировано.',date:'2024-09-02'},
  {id:15,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сделал второй раз — уже другой сайт для другого клиента. Оба остались довольны.',date:'2024-09-14'},
  {id:16,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Хорошо понимает задачу. Не нужно объяснять одно и то же дважды. Спасибо!',date:'2024-10-03'},
  {id:17,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Получил всё в срок. Адаптив проверял на разных устройствах — работает везде.',date:'2024-10-21'},
  {id:18,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сайт для флориста. Нежный дизайн, всё аккуратно сверстано. Заказчик в восторге.',date:'2024-11-05'},
  {id:19,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Честный и ответственный. Предупредил заранее о небольшой задержке, уложились в итоге с запасом.',date:'2024-11-22'},
  {id:20,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Рекомендую всем, кто ищет веб-разработчика без лишней воды и завышенных цен.',date:'2024-12-07'},
  {id:21,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сделал вторую визитку — для жены. Всё хорошо, как обычно. Всегда рад поработать снова.',date:'2024-12-20'},
  {id:22,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Отличный исполнитель! Сайт получился именно таким, каким я себе представлял.',date:'2025-01-09'},
  {id:23,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'В целом доволен. Небольшая правка по мобильной версии потребовалась, но Millerson исправил сразу.',date:'2024-03-22'},
  {id:24,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Хорошая работа. Сдача чуть затянулась, но качество не пострадало.',date:'2024-05-11'},
  {id:25,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Сделал всё по ТЗ. Был один момент с палитрой — согласовали, итог понравился.',date:'2024-06-30'},
  {id:26,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Нормально, 4 звезды. Хотел немного другой шрифт — поменяли без вопросов.',date:'2024-08-25'},
  {id:27,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Справился с задачей. Мелкие замечания были, но все решились быстро. Рекомендую.',date:'2024-09-30'},
  {id:28,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'4 звезды — за то, что один раз пришлось напомнить о статусе. Зато сделал качественно.',date:'2024-11-12'},
  {id:29,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Почти всё идеально. Хотелось бы чуть больше общения в процессе, но результатом доволен.',date:'2025-01-28'},
  {id:30,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Приемлемое качество за адекватные деньги. Буду обращаться снова.',date:'2025-02-14'},
  {id:31,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Доволен итогом. Сайт выглядит профессионально. Небольших доработок хватило одного раунда.',date:'2025-03-01'},
  {id:32,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',text:'Сделал нормально, но ждал дольше обещанного. Качество в итоге приемлемое.',date:'2024-07-28'},
  {id:33,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',text:'Работа средняя. Вёрстка местами неаккуратная, пришлось доделывать самому мелочи.',date:'2024-10-14'},
  {id:34,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',text:'Справился, но хотелось больше инициативы и предложений по дизайну.',date:'2025-02-03'},
  {id:35,name:'Аноним',avatar:'feedback/anonim.png',rating:2,category:'сайт-визитка',text:'Пришлось несколько раз переделывать одни и те же моменты. В итоге сдал, но осадок остался.',date:'2024-09-19'},

  /* --- ЛЕНДИНГ (25 шт: 5★×16, 4★×7, 3★×1, 2★×1) --- */
  {id:36,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Мощный лендинг для IT-курсов. Конверсия с первой недели выросла. Рекомендую.',date:'2024-02-28'},
  {id:37,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Продающий лендинг для онлайн-школы. Всё чётко, без воды, структура продуманная.',date:'2024-03-19'},
  {id:38,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг под Яндекс Директ. Скорость загрузки 97 баллов. Клики идут, заявки приходят.',date:'2024-04-10'},
  {id:39,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Профессиональный подход. Учёл все нюансы ЦА, текст и структура работают.',date:'2024-04-28'},
  {id:40,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Отличный лендинг для службы доставки. Мобильная версия безупречная.',date:'2024-05-15'},
  {id:41,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Сдал в срок, всё по ТЗ. Анимации плавные, CTA заметны. Отличная работа!',date:'2024-06-04'},
  {id:42,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг для event-агентства. Получили комплименты от своих клиентов по поводу сайта.',date:'2024-06-25'},
  {id:43,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Заказал лендинг под акцию. Сделал быстро, в срок. Реклама уже работает.',date:'2024-07-13'},
  {id:44,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Millerson — мой постоянный исполнитель. Уже третий лендинг, всегда на 5.',date:'2024-08-08'},
  {id:45,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг для стоматологии. Пациенты звонят — значит работает. Спасибо!',date:'2024-08-29'},
  {id:46,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Быстро разобрался с задачей. Без лишних вопросов и затяжных переговоров.',date:'2024-09-17'},
  {id:47,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Хорошая анимация скролла, красивые hover-эффекты. Клиент доволен полностью.',date:'2024-10-06'},
  {id:48,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Сделал под конкретный трафик. Всё оптимизировано, lighthouse 95+.',date:'2024-10-25'},
  {id:49,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг для фитнес-клуба. Акции отображаются, форма записи работает. Всё ок.',date:'2024-11-14'},
  {id:50,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Дельный специалист. Предложил пару улучшений к структуре — они реально помогли.',date:'2024-12-01'},
  {id:51,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Хороший результат при низкой стоимости. Советую тем, кто ищет лендинг без переплат.',date:'2024-12-26'},
  {id:52,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Хорошая работа. Пара правок по иконкам, но всё быстро поправил.',date:'2024-03-08'},
  {id:53,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'4 из 5. Лендинг рабочий, но хотел немного другую структуру блоков.',date:'2024-05-28'},
  {id:54,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Доволен. Немного затянул с финальным файлом, но извинился и прислал быстро.',date:'2024-07-31'},
  {id:55,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Нормальный исполнитель. Лендинг работает, конверсия есть.',date:'2024-09-05'},
  {id:56,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Всё по договорённости. Небольшой нюанс с шрифтом решили в один заход.',date:'2024-11-29'},
  {id:57,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Хорошая работа, рекомендую. Процесс общения приятный, результат достойный.',date:'2025-01-18'},
  {id:58,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Лендинг сделан добротно. Были пожелания по цветовой схеме — поменяли без проблем.',date:'2025-02-26'},
  {id:59,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'лендинг',text:'Результат ожидаемый, но без изюминки. Ждал, что предложит что-то своё.',date:'2024-10-30'},
  {id:60,name:'Аноним',avatar:'feedback/anonim.png',rating:2,category:'лендинг',text:'Долго ждал и пришлось напоминать. Сделал в итоге, но нервы потрепал.',date:'2024-08-13'},

  /* --- МНОГОСТРАНИЧНЫЙ САЙТ (15 шт: 5★×10, 4★×4, 3★×1) --- */
  {id:61,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сделал многостраничник для юридической фирмы. Всё структурировано, SEO настроено. Очень доволен.',date:'2024-02-10'},
  {id:62,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Большой проект на 8 страниц. Сдал всё чисто, без ошибок. Хороший специалист.',date:'2024-04-22'},
  {id:63,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сайт для медицинского центра. Навигация удобная, мобильная версия идеальная.',date:'2024-06-14'},
  {id:64,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Портфолио-сайт на 6 страниц. Анимации, галерея, фильтрация — всё работает без нареканий.',date:'2024-07-24'},
  {id:65,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Работали месяц над сложным проектом. Millerson справился отлично. Рекомендую для крупных задач.',date:'2024-08-20'},
  {id:66,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сайт для турагентства. Вся структура продумана, разделы понятные. Клиенты звонят.',date:'2024-09-11'},
  {id:67,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Делали 10 страниц. Всё в срок, правки внёс быстро. Отличная организация работы.',date:'2024-10-18'},
  {id:68,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Многостраничный для автосервиса. Расчёт стоимости, страница акций — всё работает.',date:'2024-11-08'},
  {id:69,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Проект на 12 страниц. Был точен, аккуратен. Код читаемый и хорошо документирован.',date:'2024-12-14'},
  {id:70,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сайт для образовательного центра. Интерактивный прайс, форма записи. Всё отлично.',date:'2025-01-22'},
  {id:71,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Хорошая работа над сложным проектом. Пара итераций по правкам, но итог хороший.',date:'2024-05-17'},
  {id:72,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Справился с большим ТЗ. Немного затянул по срокам, но предупредил заранее.',date:'2024-08-05'},
  {id:73,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Многостраничник на 7 страниц. Несколько пожеланий по UI, поправил без вопросов.',date:'2024-11-25'},
  {id:74,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Хорошая работа. Мелкие баги исправил быстро после тестирования.',date:'2025-02-09'},
  {id:75,name:'nedurovv',avatar:'feedback/nedurovv',rating:3,category:'многостраничный сайт',text:'Сделано нормально, но ожидал чуть более проактивного подхода. Правки принял, в итоге сдал.',date:'2024-09-28'},

  /* --- ПО ДИЗАЙНУ FIGMA (8 шт: 5★×8) --- */
  {id:76,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Прислал готовый макет из Figma — получил сайт один в один. Анимации, отступы, шрифты — всё точно.',date:'2024-04-06'},
  {id:77,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Пиксель-перфект верстка. Открывал макет рядом с браузером — идентично. Рекомендую.',date:'2024-06-19'},
  {id:78,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Сложный Figma-макет с анимациями. Millerson сверстал всё точно и аккуратно.',date:'2024-08-11'},
  {id:79,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Верстка по Figma без нареканий. Всё совпало с дизайном, адаптив настроен.',date:'2024-09-24'},
  {id:80,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Быстро и точно. Единственная правка — цвет одной кнопки. Поменял за минуту.',date:'2024-11-02'},
  {id:81,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Давал сложный макет с micro-анимациями. Всё воспроизвёл корректно. Отличная работа!',date:'2024-12-18'},
  {id:82,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Figma → HTML/CSS за 2 дня. Чисто, аккуратно, всё совпало. Буду обращаться снова.',date:'2025-01-14'},
  {id:83,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Хороший специалист по верстке. Сделал точно по дизайну, объяснил что было неоднозначно.',date:'2025-03-07'},

  /* --- КЛОН САЙТА (6 шт: 5★×6) --- */
  {id:84,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Хотел сайт в стиле одного известного агентства. Millerson воссоздал структуру и атмосферу идеально.',date:'2024-07-07'},
  {id:85,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Дал референс — получил точную копию стиля. Контент мой, код оригинальный. Всё законно и красиво.',date:'2024-08-31'},
  {id:86,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Клон сайта конкурента под наш бренд. Сделал быстро, адаптировал цвета и лого. Результат нравится.',date:'2024-10-11'},
  {id:87,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Спасибо за чистый код и честный подход. Не просто скопировал — переосмыслил под наши нужды.',date:'2024-11-30'},
  {id:88,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Хотел повторить стиль конкретного сайта. Millerson сделал похожий, но полностью оригинальный.',date:'2025-01-06'},
  {id:89,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Понравился чужой дизайн — теперь у меня такой же, но мой. Отличная работа!',date:'2025-02-22'},
];

/* ── Вычисляем статистику ── */
const TOTAL = REVIEWS.length;
const SUM = REVIEWS.reduce((s, r) => s + r.rating, 0);
const RATING = (SUM / TOTAL).toFixed(1);
const RATING_COUNTS = [5, 4, 3, 2, 1].map(s => ({
  stars: s,
  count: REVIEWS.filter(r => r.rating === s).length
}));

/* ── Рендер виджета рейтинга ── */
function renderRatingSummary(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);
  el.innerHTML = `
    <div class="rv-summary">
      <div class="rv-summary__score">
        <span class="rv-summary__num">${RATING}</span>
        <span class="rv-summary__stars">★★★★★</span>
        <span class="rv-summary__label">${TOTAL} отзывов</span>
      </div>
      <div class="rv-summary__bars">
        ${RATING_COUNTS.map(({ stars: s, count }) => {
          const pct = Math.round((count / TOTAL) * 100);
          return `<div class="rv-bar-row">
            <span class="rv-bar-label">${s}★</span>
            <div class="rv-bar-track"><div class="rv-bar-fill" style="width:${pct}%"></div></div>
            <span class="rv-bar-count">${count}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

/* ── Рендер карточек ── */
function renderReviews(containerId, { limit = null, filterCat = null } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const stars = (n) => '<i class="fas fa-star rv-star"></i>'.repeat(n) +
    '<i class="fas fa-star rv-star rv-star--empty"></i>'.repeat(5 - n);
  let list = filterCat
    ? REVIEWS.filter(r => r.category === filterCat)
    : REVIEWS.slice().reverse();
  if (limit) list = list.slice(0, limit);
  el.innerHTML = list.map(r => `
    <article class="rv-card">
      <div class="rv-card__head">
        <img class="rv-card__avatar" src="${r.avatar}" alt="${r.name}" loading="lazy"
          onerror="this.src='feedback/anonim.png'">
        <div class="rv-card__meta">
          <span class="rv-card__name">${r.name}</span>
          <span class="rv-card__cat">${r.category}</span>
        </div>
        <div class="rv-card__stars">${stars(r.rating)}</div>
      </div>
      <p class="rv-card__text">${r.text}</p>
      <time class="rv-card__date">${formatDate(r.date)}</time>
    </article>`).join('');
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ── Инициализация фильтров ── */
function initReviewFilters(containerId) {
  document.querySelectorAll('[data-rv-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rv-filter]').forEach(b => b.classList.remove('rv-filter-btn--active'));
      btn.classList.add('rv-filter-btn--active');
      const cat = btn.dataset.rvFilter === 'all' ? null : btn.dataset.rvFilter;
      renderReviews(containerId, { filterCat: cat });
    });
  });
}
