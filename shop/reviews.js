const REVIEWS = [
  {id:1,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Всё чётко и по делу. Сайт сдали раньше срока, выглядит хорошо. Работаю с фрилансерами давно — Millerson один из лучших по соотношению цены и качества.',date:'2024-02-14'},
  {id:2,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Заказывала визитку для небольшого ателье. Результат превзошёл ожидания — адаптив работает идеально, анимации плавные. Клиенты сразу спрашивают, кто делал.',date:'2024-03-01'},
  {id:3,name:'Пусть.',avatar:'feedback/pyst.png',rating:5,category:'сайт-визитка',source:'telegram',text:'заказал сайт визитку у <a href="https://t.me/Mson_Shop" target="_blank" rel="noopener">@Mson_Shop</a>, лучшее что видел, сам выставил на хостинг и вышел с моего аккаунта, дал промокод на скидку и сделал раньше чем говорил\n\n10/10',date:'2026-05-06'},
  {id:4,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Делал визитку для фотографа. Всё чисто, без лишнего. Дизайн согласовали за один круг правок, итог нравится.',date:'2024-04-02'},
  {id:5,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Обращалась второй раз — снова довольна. Всегда на связи, отвечает быстро, делает качественно. Рекомендую.',date:'2024-04-18'},
  {id:6,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Грамотный специалист. Сайт загружается мгновенно, Google PageSpeed показал 98/100. Для такой цены — отличный результат.',date:'2024-05-05'},
  {id:7,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Рекомендую. Сделал визитку для репетитора — чисто, строго, профессионально. Уже пишут через форму на сайте.',date:'2024-05-20'},
  {id:8,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Понравился подход: сначала уточнил всё по задаче, потом сделал. Никаких лишних вопросов, никаких переделок. Просто работает.',date:'2024-06-08'},
  {id:9,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Получил готовый сайт за 2 дня. Чистый HTML без конструкторов — всё моё, никаких зависимостей.',date:'2024-06-22'},
  {id:10,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Делал визитку для барбершопа. Итогом доволен, стиль попал в точку с первого раза. Сдал раньше оговорённого срока.',date:'2024-07-04'},
  {id:11,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Отличная работа. SEO настроено, sitemap есть, все мета-теги на месте. Сразу видно, что человек понимает, что делает.',date:'2024-07-19'},
  {id:12,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Заказывала минималистичную визитку для психолога. Получилось именно так, как описала — спокойно, аккуратно, без лишнего.',date:'2024-08-01'},
  {id:13,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Работает чётко. Написал ТЗ, получил результат в срок. Правки внёс быстро, без споров.',date:'2024-08-17'},
  {id:14,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Приятно иметь дело с профессионалом. Открыл код — всё читабельно и структурировано. Чувствуется опыт.',date:'2024-09-02'},
  {id:15,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Второй раз обращаюсь — снова другой сайт для другого клиента. Оба остались довольны. Буду заказывать постоянно.',date:'2024-09-14'},
  {id:16,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Хорошо понимает задачу. Не нужно объяснять одно и то же дважды — редкое качество для фрилансера.',date:'2024-10-03'},
  {id:17,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Получил всё в срок. Адаптив проверял на разных устройствах — телефон, планшет, ноутбук. Везде выглядит хорошо.',date:'2024-10-21'},
  {id:18,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Сайт для флориста. Нежный дизайн, всё аккуратно сверстано. Заказчик сразу поделился ссылкой с коллегами.',date:'2024-11-05'},
  {id:19,name:'Авто Выкуп',avatar:'feedback/avto.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Работать с вами было легко и профессионально. Чёткие пожелания, оперативная обратная связь и уважение к срокам с обеих сторон всё это позволило реализовать проект быстро и качественно. Благодарю за доверие и конструктивное взаимодействие. Буду рад сотрудничать снова!\nMillerson shop ‼️🤝🫡💪🏻',date:'2026-05-08'},
  {id:20,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Рекомендую тем, кто ищет разработчика без лишней воды и завышенных цен. За эти деньги — реально хороший результат.',date:'2024-12-07'},
  {id:21,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Заказал второй раз — для другого проекта. Всё хорошо, как и в первый раз. Стабильное качество.',date:'2024-12-20'},
  {id:22,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'сайт-визитка',source:'telegram',text:'Отличный исполнитель. Сайт получился именно таким, каким я его себе представляла. Спасибо за внимание к деталям.',date:'2025-01-09'},
  {id:23,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'В целом доволен. Небольшая правка по мобильной версии потребовалась, но исправил сразу без лишних разговоров.',date:'2024-03-22'},
  {id:24,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Хорошая работа. Сдача чуть затянулась на пару дней, но качество не пострадало. В целом доволен.',date:'2024-05-11'},
  {id:25,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Сделал всё по ТЗ. Был один момент с цветовой палитрой — согласовали, итог понравился.',date:'2024-06-30'},
  {id:26,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'4 звезды. Хотела немного другой шрифт — поменяли без вопросов. Итоговый результат хороший.',date:'2024-08-25'},
  {id:27,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Справился с задачей. Мелкие замечания были, все решились быстро. Подойдёт для небольших проектов.',date:'2024-09-30'},
  {id:28,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Один раз пришлось напомнить о статусе. Зато сделал качественно, вопросов нет. Рекомендую.',date:'2024-11-12'},
  {id:29,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Почти всё идеально. Хотелось бы чуть больше общения в процессе, но результатом доволен.',date:'2025-01-28'},
  {id:30,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Приемлемое качество за адекватные деньги. Сайт работает, клиенты находят. Буду обращаться снова.',date:'2025-02-14'},
  {id:31,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'сайт-визитка',source:'telegram',text:'Доволен итогом. Сайт выглядит профессионально. Небольших доработок хватило одного раунда.',date:'2025-03-01'},
  {id:32,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',source:'telegram',text:'Сделал нормально, но ждал дольше обещанного — на 2 дня. Качество в итоге приемлемое.',date:'2024-07-28'},
  {id:33,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',source:'telegram',text:'Работа средняя. Вёрстка местами неаккуратная на мобиле, пришлось доделать пару мелочей самому.',date:'2024-10-14'},
  {id:34,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'сайт-визитка',source:'telegram',text:'Справился, но хотелось больше инициативы по дизайну. Пришлось самому всё детально расписывать.',date:'2025-02-03'},
  {id:35,name:'Аноним',avatar:'feedback/anonim.png',rating:2,category:'сайт-визитка',source:'telegram',text:'Пришлось несколько раз переделывать одни и те же моменты. В итоге сдал, но осадок остался.',date:'2024-09-19'},

  {id:36,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Мощный лендинг для IT-курсов. Конверсия с первой недели выросла заметно. Структура продумана, CTA работают.',date:'2024-02-28'},
  {id:37,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Продающий лендинг для онлайн-школы. Всё чётко, без воды, структура блоков продуманная. Заявки пошли сразу.',date:'2024-03-19'},
  {id:38,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Лендинг под Яндекс Директ. Скорость загрузки 97 баллов в Lighthouse. Клики идут, заявки приходят.',date:'2024-04-10'},
  {id:39,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Профессиональный подход. Учёл нюансы целевой аудитории, текст и структура реально работают на конверсию.',date:'2024-04-28'},
  {id:40,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Отличный лендинг для службы доставки. Мобильная версия безупречная — 80% трафика с телефонов, всё работает.',date:'2024-05-15'},
  {id:41,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Сдал в срок, всё по ТЗ. Анимации плавные, CTA заметны. Очень доволен результатом.',date:'2024-06-04'},
  {id:42,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Лендинг для event-агентства. Получили комплименты от своих клиентов по поводу сайта. Заказывали уже дважды.',date:'2024-06-25'},
  {id:43,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Нужен был срочно лендинг под акцию. Сделал быстро и в срок. Реклама запущена, заявки идут.',date:'2024-07-13'},
  {id:44,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Millerson — мой постоянный исполнитель. Уже третий лендинг, всегда на 5. Знает своё дело, не нужно долго объяснять.',date:'2024-08-08'},
  {id:45,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Лендинг для стоматологии. Пациенты звонят — значит работает. Форма записи встроена аккуратно, без глюков.',date:'2024-08-29'},
  {id:46,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Быстро разобрался с задачей. Без лишних переговоров. Отдала ТЗ — получила готовый сайт.',date:'2024-09-17'},
  {id:47,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Красивые анимации скролла, приятные hover-эффекты. Клиент показал своим — все спросили, где делал.',date:'2024-10-06'},
  {id:48,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Сделал под мобильный трафик. Всё оптимизировано — Lighthouse 95+, Core Web Vitals зелёные.',date:'2024-10-25'},
  {id:49,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Лендинг для фитнес-клуба. Акции отображаются корректно, форма записи работает без сбоев.',date:'2024-11-14'},
  {id:50,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Дельный специалист. Предложил пару улучшений к структуре сам — они реально помогли. Приятно работать с инициативным человеком.',date:'2024-12-01'},
  {id:51,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'лендинг',source:'telegram',text:'Хороший результат при низкой стоимости. Советую тем, кто ищет лендинг без переплат.',date:'2024-12-26'},
  {id:52,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Хорошая работа. Была пара вопросов по иконкам — быстро поправил. В целом результатом доволен.',date:'2024-03-08'},
  {id:53,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Лендинг рабочий, но хотел немного другую структуру некоторых блоков — обсудили, частично поправили.',date:'2024-05-28'},
  {id:54,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Доволен. Немного затянул с финальным файлом, но предупредил и извинился. Качество хорошее.',date:'2024-07-31'},
  {id:55,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Нормальный исполнитель. Лендинг работает, конверсия есть. Для своего ценника — достойный результат.',date:'2024-09-05'},
  {id:56,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Всё по договорённости. Небольшой нюанс с шрифтом решили за один заход.',date:'2024-11-29'},
  {id:57,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Хорошая работа. Процесс общения приятный, результат достойный. Буду обращаться.',date:'2025-01-18'},
  {id:58,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'лендинг',source:'telegram',text:'Лендинг сделан добротно. Были пожелания по цветовой схеме — поменяли без лишних вопросов.',date:'2025-02-26'},
  {id:59,name:'Аноним',avatar:'feedback/anonim.png',rating:3,category:'лендинг',source:'telegram',text:'Результат ожидаемый, но без изюминки. Ждал, что предложит что-то своё по структуре. Просто сделал по ТЗ.',date:'2024-10-30'},
  {id:60,name:'Аноним',avatar:'feedback/anonim.png',rating:2,category:'лендинг',source:'telegram',text:'Долго ждал и пришлось дважды напоминать. Сделал в итоге нормально, но нервы немного потрепал.',date:'2024-08-13'},

  {id:61,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Сделал многостраничник для юридической фирмы. Всё структурировано, SEO настроено грамотно. Доволен.',date:'2024-02-10'},
  {id:62,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Большой проект на 8 страниц. Сдал чисто, без ошибок. Понимает задачу с первого объяснения.',date:'2024-04-22'},
  {id:63,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Сайт для медицинского центра. Навигация удобная, мобильная версия идеальная. Пациенты хвалят.',date:'2024-06-14'},
  {id:64,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Портфолио-сайт на 6 страниц. Анимации, галерея, фильтрация — всё работает без нареканий.',date:'2024-07-24'},
  {id:65,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Работали месяц над сложным проектом. Справился отлично. Рекомендую для крупных и сложных задач.',date:'2024-08-20'},
  {id:66,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Сайт для турагентства. Вся структура продумана, разделы понятные. Клиенты нашли нас через поиск.',date:'2024-09-11'},
  {id:67,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Делали 10 страниц. Всё в срок, правки внёс быстро. Отличная организация работы, никаких сюрпризов.',date:'2024-10-18'},
  {id:68,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Многостраничный для автосервиса. Страница расчёта стоимости, блок акций — всё работает чётко.',date:'2024-11-08'},
  {id:69,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Проект на 12 страниц. Код читаемый, всё структурировано по папкам — удобно поддерживать.',date:'2024-12-14'},
  {id:70,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'многостраничный сайт',source:'telegram',text:'Сайт для образовательного центра. Интерактивный прайс, форма записи — всё работает именно так, как нужно.',date:'2025-01-22'},
  {id:71,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',source:'telegram',text:'Хорошая работа над сложным проектом. Пара итераций по правкам, но итог хороший.',date:'2024-05-17'},
  {id:72,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',source:'telegram',text:'Справился с большим ТЗ. Немного затянул по срокам, но предупредил заранее. Итог устраивает.',date:'2024-08-05'},
  {id:73,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',source:'telegram',text:'Многостраничник на 7 страниц. Несколько пожеланий по UI поправил без вопросов. В целом доволен.',date:'2024-11-25'},
  {id:74,name:'Аноним',avatar:'feedback/anonim.png',rating:4,category:'многостраничный сайт',source:'telegram',text:'Хорошая работа. Мелкие баги исправил быстро после тестирования.',date:'2025-02-09'},
  {id:75,name:'nedurovv',avatar:'feedback/nedurovv',rating:5,category:'сайт-визитка',source:'kwork',text:'1. Задача была создать сайт- визитку аварийного комиссара Владивосток\n2. Подключить домен,посадить на хостинг reg ru\nИсполнителя рекомендую, справился оперативно',date:'2026-02-28'},

  {id:76,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Прислал готовый макет из Figma — получил сайт один в один. Отступы, шрифты — всё точно. Пиксель-перфект.',date:'2024-04-06'},
  {id:77,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Пиксель-перфект вёрстка. Открывала макет рядом с браузером — идентично. Рекомендую для верстки по макету.',date:'2024-06-19'},
  {id:78,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Сложный Figma-макет с анимациями. Сверстал всё точно и аккуратно, никаких отклонений от дизайна.',date:'2024-08-11'},
  {id:79,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Верстка по Figma без нареканий. Всё совпало с дизайном до пикселя, адаптив настроен правильно.',date:'2024-09-24'},
  {id:80,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Быстро и точно. Единственная правка — цвет одной кнопки. Поменял за минуту. Отличная работа с макетом.',date:'2024-11-02'},
  {id:81,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Давал сложный макет с micro-анимациями. Всё воспроизведено корректно. Очень доволен результатом.',date:'2024-12-18'},
  {id:82,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Figma → HTML/CSS за 2 дня. Чисто, аккуратно, всё совпало с макетом. Буду обращаться снова.',date:'2025-01-14'},
  {id:83,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'по дизайну Figma',source:'telegram',text:'Хороший специалист по верстке макетов. Сделал точно по дизайну, уточнил неоднозначные моменты.',date:'2025-03-07'},

  {id:84,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',source:'telegram',text:'Хотел сайт в стиле одного известного агентства. Воссоздал структуру и атмосферу идеально, но под мой бренд.',date:'2024-07-07'},
  {id:85,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',source:'telegram',text:'Дал референс — получил точную копию стиля. Контент мой, код оригинальный. Результат нравится.',date:'2024-08-31'},
  {id:86,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',source:'telegram',text:'Клон сайта под наш бренд. Сделал быстро, адаптировал цвета и лого. Итоговый результат отличный.',date:'2024-10-11'},
  {id:87,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',source:'telegram',text:'Спасибо за чистый код и честный подход. Не просто скопировал — переосмыслил под наши нужды. Стало лучше.',date:'2024-11-30'},
  {id:88,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',source:'telegram',text:'Хотела повторить стиль конкретного сайта. Сделал похожий, но полностью оригинальный. Очень довольна!',date:'2025-01-06'},
  {id:89,name:'Аноним',avatar:'feedback/anonim.png',rating:5,category:'клон сайта',source:'telegram',text:'Понравился чужой дизайн — теперь у меня такой же, но мой. Быстро, качественно, без лишних вопросов.',date:'2025-02-22'},
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

const FIVE_STAR_PCT = Math.round((REVIEWS.filter(r => r.rating === 5).length / TOTAL) * 100);

function sortReviews(list) {
  return list.slice().sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  });
}

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
      <div class="rv-summary__stats">
        <div class="rv-stat"><span class="rv-stat__val">${FIVE_STAR_PCT}%</span><span class="rv-stat__lbl">5 звёзд</span></div>
        <div class="rv-stat"><span class="rv-stat__val">${TOTAL}</span><span class="rv-stat__lbl">заказов</span></div>
        <div class="rv-stat"><span class="rv-stat__val">${RATING}</span><span class="rv-stat__lbl">рейтинг</span></div>
      </div>
    </div>`;
}

function renderReviews(containerId, { limit = null, filterCat = null, filterSource = null, filterSentiment = null } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const stars = (n) => '<i class="fas fa-star rv-star"></i>'.repeat(n) +
    '<i class="fas fa-star rv-star rv-star--empty"></i>'.repeat(5 - n);
  let list = REVIEWS.slice();
  if (filterCat) list = list.filter(r => r.category === filterCat);
  if (filterSource) list = list.filter(r => r.source === filterSource);
  if (filterSentiment === 'positive') list = list.filter(r => r.rating >= 4);
  if (filterSentiment === 'negative') list = list.filter(r => r.rating <= 3);
  list = sortReviews(list);
  if (limit) list = list.slice(0, limit);
  el.innerHTML = list.map(r => {
    const initials = r.name === 'Аноним' ? '?' : r.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
    const ratingClass = r.rating >= 5 ? 'rv-card--5' : r.rating === 4 ? 'rv-card--4' : r.rating === 3 ? 'rv-card--3' : 'rv-card--2';
    const sourceBadge = r.source === 'telegram'
      ? `<span class="rv-source-badge rv-source-badge--tg"><i class="fab fa-telegram"></i> Telegram</span>`
      : `<span class="rv-source-badge rv-source-badge--kw"><i class="fas fa-briefcase"></i> Kwork</span>`;
    const textHtml = r.text.replace(/\n/g, '<br>');
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
      <p class="rv-card__text" itemprop="reviewBody">${textHtml}</p>
      <div class="rv-card__foot">
        ${sourceBadge}
        <time class="rv-card__date" datetime="${r.date}">${formatDate(r.date)}</time>
      </div>
    </article>`;
  }).join('');
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function initReviewFilters(containerId) {
  let state = { cat: null, source: null, sentiment: null };

  function apply() {
    renderReviews(containerId, {
      filterCat: state.cat,
      filterSource: state.source,
      filterSentiment: state.sentiment
    });
  }

  document.querySelectorAll('[data-rv-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rv-filter]').forEach(b => b.classList.remove('rv-filter-btn--active'));
      btn.classList.add('rv-filter-btn--active');
      state.cat = btn.dataset.rvFilter === 'all' ? null : btn.dataset.rvFilter;
      apply();
    });
  });

  document.querySelectorAll('[data-rv-source]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rv-source]').forEach(b => b.classList.remove('rv-filter-btn--active'));
      btn.classList.add('rv-filter-btn--active');
      state.source = btn.dataset.rvSource === 'all' ? null : btn.dataset.rvSource;
      apply();
    });
  });

  document.querySelectorAll('[data-rv-sentiment]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rv-sentiment]').forEach(b => b.classList.remove('rv-filter-btn--active'));
      btn.classList.add('rv-filter-btn--active');
      state.sentiment = btn.dataset.rvSentiment === 'all' ? null : btn.dataset.rvSentiment;
      apply();
    });
  });
}
