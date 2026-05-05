const REVIEWS = [
  {id:1,name:'Александр К.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Всё чётко и по делу. Сайт сдали раньше срока, выглядит отлично. Работаю с фрилансерами давно — Millerson один из лучших по соотношению цены и качества.',date:'2024-02-14'},
  {id:2,name:'Мария Д.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Заказывала визитку для небольшого ателье. Результат превзошёл ожидания — адаптив работает идеально, анимации плавные, код аккуратный. Клиенты сразу спрашивают, кто делал.',date:'2024-03-01'},
  {id:3,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Быстро, качественно, недорого. Именно то, что нужно для старта. Спасибо!',date:'2024-03-15'},
  {id:4,name:'Дмитрий В.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Делал визитку для фотографа. Всё чисто, без лишнего. Дизайн согласовали за один круг правок, итог нравится.',date:'2024-04-02'},
  {id:5,name:'Елена Р.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Обращалась второй раз — снова довольна. Millerson всегда на связи, отвечает быстро, делает качественно. Рекомендую без оговорок.',date:'2024-04-18'},
  {id:6,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Грамотный специалист. Сайт загружается мгновенно, Google PageSpeed показал 98/100. Для такой цены — отличный результат.',date:'2024-05-05'},
  {id:7,name:'Максим С.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Рекомендую. Сделал визитку для репетитора — чисто, строго, профессионально. Клиенты уже пишут через форму на сайте.',date:'2024-05-20'},
  {id:8,name:'Ирина Н.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Очень понравился подход: сначала уточнил всё по задаче, потом сделал. Никаких лишних вопросов, никаких переделок. Просто работает.',date:'2024-06-08'},
  {id:9,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Получил готовый сайт за 2 дня. Для такой цены — просто отличное качество. Чистый HTML без конструкторов, всё моё.',date:'2024-06-22'},
  {id:10,name:'Артём Б.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Делал визитку для барбершопа. Итогом доволен, стиль попал в точку с первого раза. Сдал раньше оговорённого срока.',date:'2024-07-04'},
  {id:11,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Отличная работа. SEO базовое настроено, sitemap есть, все мета-теги на месте. Сразу видно, что человек понимает, что делает.',date:'2024-07-19'},
  {id:12,name:'Наталья О.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Заказывала минималистичную визитку для психолога. Всё получилось именно так, как я описала. Спокойно, аккуратно, без лишнего.',date:'2024-08-01'},
  {id:13,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Работает чётко. Написал ТЗ, получил результат в срок. Правки внёс быстро, без споров.',date:'2024-08-17'},
  {id:14,name:'Сергей М.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Приятно иметь дело с профессионалом. Открыл код — всё читабельно и структурировано. Чувствуется опыт.',date:'2024-09-02'},
  {id:15,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сделал второй раз — уже другой сайт для другого клиента. Оба остались довольны. Постоянно буду обращаться.',date:'2024-09-14'},
  {id:16,name:'Анна Т.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Хорошо понимает задачу. Не нужно объяснять одно и то же дважды. Редкое качество для фрилансера. Спасибо!',date:'2024-10-03'},
  {id:17,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Получил всё в срок. Адаптив проверял на разных устройствах — телефон, планшет, ноутбук. Везде выглядит хорошо.',date:'2024-10-21'},
  {id:18,name:'Виктория Л.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сайт для флориста. Нежный дизайн, всё аккуратно сверстано. Заказчик в полном восторге, сразу поделился с коллегами.',date:'2024-11-05'},
  {id:19,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Честный и ответственный. Предупредил заранее о небольшой задержке, уложились в итоге с запасом. Ценю такой подход.',date:'2024-11-22'},
  {id:20,name:'Константин Ф.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Рекомендую всем, кто ищет веб-разработчика без лишней воды и завышенных цен. За эти деньги получаете реально хороший продукт.',date:'2024-12-07'},
  {id:21,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Сделал вторую визитку — для жены. Всё хорошо, как и в первый раз. Millerson стабилен в качестве.',date:'2024-12-20'},
  {id:22,name:'Ольга К.',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',text:'Отличный исполнитель! Сайт получился именно таким, каким я его себе представляла. Спасибо за терпение и внимание к деталям.',date:'2025-01-09'},
  {id:23,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'В целом доволен. Небольшая правка по мобильной версии потребовалась, но Millerson исправил сразу без лишних разговоров.',date:'2024-03-22'},
  {id:24,name:'Игорь П.',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Хорошая работа. Сдача чуть затянулась — на день-два, но качество не пострадало. В целом доволен.',date:'2024-05-11'},
  {id:25,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Сделал всё по ТЗ. Был один момент с цветовой палитрой — согласовали, итог понравился. Рекомендую.',date:'2024-06-30'},
  {id:26,name:'Юлия С.',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'4 звезды. Хотела немного другой шрифт — поменяли без вопросов. Итоговый результат хороший.',date:'2024-08-25'},
  {id:27,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Справился с задачей. Мелкие замечания были, все решились быстро. Рекомендую для небольших проектов.',date:'2024-09-30'},
  {id:28,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'4 звезды — за то, что один раз пришлось напомнить о статусе. Зато сделал качественно, вопросов нет.',date:'2024-11-12'},
  {id:29,name:'Роман Г.',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Почти всё идеально. Хотелось бы чуть больше общения в процессе, но результатом доволен. Буду обращаться.',date:'2025-01-28'},
  {id:30,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Приемлемое качество за адекватные деньги. Сайт работает, клиенты находят. Буду обращаться снова.',date:'2025-02-14'},
  {id:31,name:'Евгений Х.',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',text:'Доволен итогом. Сайт выглядит профессионально. Небольших доработок хватило одного раунда.',date:'2025-03-01'},
  {id:32,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',text:'Сделал нормально, но ждал дольше обещанного — на 2 дня. Качество в итоге приемлемое, претензий нет.',date:'2024-07-28'},
  {id:33,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',text:'Работа средняя. Вёрстка местами неаккуратная на мобиле, пришлось доделать пару мелочей самому.',date:'2024-10-14'},
  {id:34,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',text:'Справился, но хотелось больше инициативы и предложений по дизайну. Пришлось самому всё расписывать.',date:'2025-02-03'},
  {id:35,name:'Аноним',avatar:'feedback/anonim.png',rating:2,category:'сайт-визитка',text:'Пришлось несколько раз переделывать одни и те же моменты. В итоге сдал, но осадок остался.',date:'2024-09-19'},

  {id:36,name:'Павел К.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Мощный лендинг для IT-курсов. Конверсия с первой недели выросла заметно. Структура продумана, CTA работают. Рекомендую.',date:'2024-02-28'},
  {id:37,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Продающий лендинг для онлайн-школы. Всё чётко, без воды, структура блоков продуманная. Заявки пошли сразу.',date:'2024-03-19'},
  {id:38,name:'Денис А.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг под Яндекс Директ. Скорость загрузки 97 баллов в Lighthouse. Клики идут, заявки приходят регулярно.',date:'2024-04-10'},
  {id:39,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Профессиональный подход. Учёл все нюансы целевой аудитории, текст и структура реально работают на конверсию.',date:'2024-04-28'},
  {id:40,name:'Кристина В.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Отличный лендинг для службы доставки. Мобильная версия безупречная — 80% трафика с телефонов, всё работает.',date:'2024-05-15'},
  {id:41,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Сдал в срок, всё по ТЗ. Анимации плавные, CTA заметны. Очень доволен результатом, рекомендую!',date:'2024-06-04'},
  {id:42,name:'Андрей М.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг для event-агентства. Получили комплименты от своих же клиентов по поводу сайта. Заказывали уже дважды.',date:'2024-06-25'},
  {id:43,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Заказал лендинг под акцию, нужен был срочно. Сделал быстро и в срок. Реклама уже запущена, заявки идут.',date:'2024-07-13'},
  {id:44,name:'Тимур Б.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Millerson — мой постоянный исполнитель. Уже третий лендинг, всегда на 5. Знает своё дело, не нужно долго объяснять.',date:'2024-08-08'},
  {id:45,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг для стоматологии. Пациенты звонят — значит работает. Форма записи встроена аккуратно, без глюков.',date:'2024-08-29'},
  {id:46,name:'Светлана Р.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Быстро разобрался с задачей. Без лишних вопросов и затяжных переговоров. Отдала ТЗ — получила готовый сайт.',date:'2024-09-17'},
  {id:47,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Красивые анимации скролла, хорошие hover-эффекты. Клиент показал своим и все спросили, где делал.',date:'2024-10-06'},
  {id:48,name:'Никита Ю.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Сделал под конкретный трафик с мобильных. Всё оптимизировано — Lighthouse 95+, Core Web Vitals зелёные.',date:'2024-10-25'},
  {id:49,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Лендинг для фитнес-клуба. Акции отображаются корректно, форма записи работает без сбоев. Всё ок.',date:'2024-11-14'},
  {id:50,name:'Антон Д.',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Дельный специалист. Предложил пару улучшений к структуре сам — они реально помогли. Приятно работать с инициативным человеком.',date:'2024-12-01'},
  {id:51,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',text:'Хороший результат при низкой стоимости. Советую тем, кто ищет лендинг без переплат за бренд.',date:'2024-12-26'},
  {id:52,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Хорошая работа. Была пара вопросов по иконкам — быстро поправил. В целом результатом доволен.',date:'2024-03-08'},
  {id:53,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'4 из 5. Лендинг рабочий, но хотел немного другую структуру некоторых блоков — обсудили, частично поправили.',date:'2024-05-28'},
  {id:54,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Доволен. Немного затянул с финальным файлом, но предупредил и извинился. Качество хорошее.',date:'2024-07-31'},
  {id:55,name:'Алина К.',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Нормальный исполнитель. Лендинг работает, конверсия есть. Для своего ценника — достойный результат.',date:'2024-09-05'},
  {id:56,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Всё по договорённости. Небольшой нюанс с шрифтом решили за один заход. Рекомендую.',date:'2024-11-29'},
  {id:57,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Хорошая работа, рекомендую. Процесс общения приятный, результат достойный. Буду обращаться.',date:'2025-01-18'},
  {id:58,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',text:'Лендинг сделан добротно. Были пожелания по цветовой схеме — поменяли без проблем и вопросов.',date:'2025-02-26'},
  {id:59,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'лендинг',text:'Результат ожидаемый, но без изюминки. Ждал, что предложит что-то своё по структуре. Просто сделал по ТЗ.',date:'2024-10-30'},
  {id:60,name:'Аноним',avatar:'feedback/anonim.png',rating:2,category:'лендинг',text:'Долго ждал и пришлось дважды напоминать. Сделал в итоге нормально, но нервы немного потрепал.',date:'2024-08-13'},

  {id:61,name:'Владимир Е.',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сделал многостраничник для юридической фирмы. Всё структурировано, SEO настроено грамотно. Очень доволен.',date:'2024-02-10'},
  {id:62,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Большой проект на 8 страниц. Сдал всё чисто, без ошибок. Хороший специалист, который понимает задачу.',date:'2024-04-22'},
  {id:63,name:'Татьяна И.',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сайт для медицинского центра. Навигация удобная, мобильная версия идеальная. Пациенты хвалят.',date:'2024-06-14'},
  {id:64,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Портфолио-сайт на 6 страниц. Анимации, галерея, фильтрация — всё работает без нареканий.',date:'2024-07-24'},
  {id:65,name:'Михаил З.',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Работали месяц над сложным проектом. Millerson справился отлично. Рекомендую для крупных и сложных задач.',date:'2024-08-20'},
  {id:66,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сайт для турагентства. Вся структура продумана, разделы понятные. Клиенты нашли нас через поиск.',date:'2024-09-11'},
  {id:67,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Делали 10 страниц. Всё в срок, правки внёс быстро. Отличная организация работы, никаких сюрпризов.',date:'2024-10-18'},
  {id:68,name:'Борис Н.',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Многостраничный для автосервиса. Расчёт стоимости, страница акций — всё работает чётко.',date:'2024-11-08'},
  {id:69,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Проект на 12 страниц. Был точен и аккуратен. Код читаемый, всё структурировано по папкам — удобно поддерживать.',date:'2024-12-14'},
  {id:70,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',text:'Сайт для образовательного центра. Интерактивный прайс, форма записи — всё работает именно так, как нужно.',date:'2025-01-22'},
  {id:71,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Хорошая работа над сложным проектом. Пара итераций по правкам, но итог хороший. Рекомендую.',date:'2024-05-17'},
  {id:72,name:'Руслан К.',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Справился с большим ТЗ. Немного затянул по срокам, но предупредил заранее. Итог устраивает.',date:'2024-08-05'},
  {id:73,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Многостраничник на 7 страниц. Несколько пожеланий по UI поправил без вопросов. В целом доволен.',date:'2024-11-25'},
  {id:74,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',text:'Хорошая работа. Мелкие баги исправил быстро после тестирования. Рекомендую.',date:'2025-02-09'},
  {id:75,name:'nedurovv',avatar:'feedback/nedurovv',rating:3,category:'многостраничный сайт',text:'Сделано нормально, но ожидал чуть более проактивного подхода. Правки принял, в итоге сдал.',date:'2024-09-28'},

  {id:76,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Прислал готовый макет из Figma — получил сайт один в один. Анимации, отступы, шрифты — всё точно. Пиксель-перфект.',date:'2024-04-06'},
  {id:77,name:'Дарья Л.',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Пиксель-перфект вёрстка. Открывала макет рядом с браузером — идентично. Очень рекомендую для верстки по макету.',date:'2024-06-19'},
  {id:78,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Сложный Figma-макет с анимациями. Millerson сверстал всё точно и аккуратно. Никаких отклонений от дизайна.',date:'2024-08-11'},
  {id:79,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Верстка по Figma без нареканий. Всё совпало с дизайном до пикселя, адаптив настроен правильно.',date:'2024-09-24'},
  {id:80,name:'Виктор О.',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Быстро и точно. Единственная правка — цвет одной кнопки. Поменял за минуту. Отличная работа с макетом.',date:'2024-11-02'},
  {id:81,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Давал сложный макет с micro-анимациями. Всё воспроизведено корректно. Очень доволен результатом!',date:'2024-12-18'},
  {id:82,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Figma → HTML/CSS за 2 дня. Чисто, аккуратно, всё совпало с макетом. Буду обращаться снова.',date:'2025-01-14'},
  {id:83,name:'Полина С.',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',text:'Хороший специалист по верстке макетов. Сделал точно по дизайну, уточнил неоднозначные моменты.',date:'2025-03-07'},

  {id:84,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Хотел сайт в стиле одного известного агентства. Millerson воссоздал структуру и атмосферу идеально, но под мой бренд.',date:'2024-07-07'},
  {id:85,name:'Кирилл А.',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Дал референс — получил точную копию стиля. Контент мой, код оригинальный. Всё законно и результат нравится.',date:'2024-08-31'},
  {id:86,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Клон сайта под наш бренд. Сделал быстро, адаптировал цвета и лого. Итоговый результат очень нравится.',date:'2024-10-11'},
  {id:87,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Спасибо за чистый код и честный подход. Не просто скопировал — переосмыслил под наши нужды. Стало даже лучше.',date:'2024-11-30'},
  {id:88,name:'Людмила П.',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Хотела повторить стиль конкретного сайта. Millerson сделал похожий, но полностью оригинальный. Очень довольна!',date:'2025-01-06'},
  {id:89,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',text:'Понравился чужой дизайн — теперь у меня такой же, но мой. Быстро, качественно, без лишних вопросов.',date:'2025-02-22'},
];

const TOTAL = REVIEWS.length;
const SUM = REVIEWS.reduce((s, r) => s + r.rating, 0);
const RATING = (SUM / TOTAL).toFixed(1);
const RATING_COUNTS = [5, 4, 3, 2, 1].map(s => ({
  stars: s,
  count: REVIEWS.filter(r => r.rating === s).length
}));

const CAT_RATINGS = {};
['сайт-визитка','лендинг','многостраничный сайт','по дизайну Figma','клон сайта'].forEach(cat => {
  const catRevs = REVIEWS.filter(r => r.category === cat);
  const avg = catRevs.reduce((s, r) => s + r.rating, 0) / catRevs.length;
  CAT_RATINGS[cat] = { avg: avg.toFixed(1), count: catRevs.length };
});

function renderRatingSummary(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div class="rv-summary">
      <div class="rv-summary__score">
        <span class="rv-summary__num">${RATING}</span>
        <div class="rv-summary__stars">★★★★★</div>
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

function renderReviews(containerId, { limit = null, filterCat = null } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const stars = (n) => '<i class="fas fa-star rv-star"></i>'.repeat(n) +
    '<i class="fas fa-star rv-star rv-star--empty"></i>'.repeat(5 - n);
  let list = filterCat
    ? REVIEWS.filter(r => r.category === filterCat)
    : REVIEWS.slice().reverse();
  if (limit) list = list.slice(0, limit);
  el.innerHTML = list.map(r => {
    const initials = r.name === 'Аноним' ? '?' : r.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
    const ratingClass = r.rating >= 5 ? 'rv-card--5' : r.rating === 4 ? 'rv-card--4' : r.rating === 3 ? 'rv-card--3' : 'rv-card--2';
    return `
    <article class="rv-card ${ratingClass}" itemscope itemtype="https://schema.org/Review">
      <meta itemprop="reviewRating" content="${r.rating}">
      <meta itemprop="author" content="${r.name}">
      <div class="rv-card__head">
        <div class="rv-card__avatar-wrap">
          <img class="rv-card__avatar" src="${r.avatar}" alt="${r.name}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="rv-card__avatar-fallback" style="display:none">${initials}</div>
        </div>
        <div class="rv-card__meta">
          <span class="rv-card__name" itemprop="author">${r.name}</span>
          <span class="rv-card__cat">${r.category}</span>
        </div>
        <div class="rv-card__stars">${stars(r.rating)}</div>
      </div>
      <p class="rv-card__text" itemprop="reviewBody">${r.text}</p>
      <time class="rv-card__date" datetime="${r.date}">${formatDate(r.date)}</time>
    </article>`;
  }).join('');
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

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
