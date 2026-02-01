document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeMenu = document.getElementById('theme-menu');
    const desktopMenuToggle = document.getElementById('desktop-menu-toggle');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menuLinks = document.querySelectorAll('.menu-link');
    const body = document.body;
    const scrollProgress = document.querySelector('.scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    
    if (localStorage.getItem('theme') === 'light') {
        themeSwitcher.checked = true;
        body.classList.add('light-theme');
    }
    
    themeSwitcher.addEventListener('change', function() {
        if(this.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    function toggleMenu() {
        themeMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
    
    function closeMenu() {
        themeMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    }
    
    desktopMenuToggle.addEventListener('click', toggleMenu);
    mobileMenuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', closeMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                closeMenu();
            }
        });
    });
    
    document.querySelectorAll('a[href^="#"]:not(.menu-link)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    const serviceModal = document.getElementById('service-modal');
    const modalClose = document.getElementById('modal-close');
    const detailButtons = document.querySelectorAll('.detail-btn');
    
    const serviceData = {
        card: {
            title: 'Сайт-визитка',
            price: '700 ₽ за страницу',
            description: 'Идеальное решение для представления себя, своего бизнеса или услуг в интернете. Просто, эффективно, профессионально. Включает все необходимые секции: о компании, услуги, портфолио, контакты. Полностью адаптивный дизайн, работает на всех устройствах.',
            time: '2-3 рабочих дня. Срок может увеличиться при добавлении дополнительных секций или сложных анимаций.',
            priceDetails: 'Цена зависит от количества страниц, сложности дизайна и дополнительных элементов. Базовая цена включает до 5 стандартных секций на странице. Каждая дополнительная секция +100₽. Сложные анимации обсуждаются отдельно.'
        },
        landing: {
            title: 'Лендинг (Одностраничник)',
            price: '500 ₽ за сайт',
            description: 'Одностраничный сайт для максимальной концентрации на одной цели: заявка, продажа, регистрация. Высокая конверсия и четкая структура. Идеально для рекламных кампаний и презентации одного продукта или услуги.',
            time: '1-2 рабочих дня. Срок зависит от сложности структуры и количества блоков.',
            priceDetails: 'Стоимость статична. Сложные интерактивные элементы обсуждаются отдельно.'
        },
        blog: {
            title: 'Блог / Портфолио',
            price: '750 ₽ за страницу',
            description: 'Сайт для демонстрации ваших работ, статей или проектов. Удобная навигация и приятный визуал для посетителей. Включает галерею, категории и систему навигации. Идеально для творческих людей и специалистов.',
            time: '2-3 рабочих дня. Срок может увеличиться при добавлении сложной системы фильтрации или галереи.',
            priceDetails: 'Цена зависит от количества страниц, сложности галереи и системы навигации. Базовая цена включает до 3 категорий и 10 элементов галереи. Каждая дополнительная категория +100₽, элемент галереи +20₽.'
        },
        catalog: {
            title: 'Каталог товаров',
            price: '800 ₽ + 25 ₽/товар',
            description: 'Презентация вашей продукции с удобной фильтрацией и детальным описанием. Без корзины и онлайн-оплаты. Идеально для демонстрации ассортимента. Включает систему фильтрации, сортировки и детальные карточки товаров.',
            time: 'от 3 рабочих дней. Срок зависит от количества товаров и сложности фильтрации.',
            priceDetails: 'Базовая стоимость включает структуру каталога. Дополнительно оплачивается каждый товар (25₽ за товар).'
        },
        faq: {
            title: 'Сайт-справка / FAQ',
            price: '300 ₽ за страницу',
            description: 'Информационный ресурс с аккордеонами, вкладками и поиском. Идеально для базы знаний или часто задаваемых вопросов. Удобная навигация по разделам. Включает систему поиска и категоризацию контента.',
            time: '2-3 рабочих дня. Срок зависит от количества вопросов и сложности системы навигации.',
            priceDetails: 'Стоимость зависит от количества вопросов/ответов и сложности системы навигации. Базовая цена включает до 15 вопросов. Каждый дополнительный вопрос +25₽. Сложная система поиска +200₽.'
        },
        article: {
            title: 'Сайт для статьи',
            price: '300 ₽ за страницу',
            description: 'Оптимальное решение для публикации длинных текстов, исследований, обзоров. Чистый дизайн без отвлекающих элементов, фокус на контенте. Идеально для блогеров, журналистов и исследователей.',
            time: '1-2 рабочих дня. Срок зависит от объема текста и сложности структуры.',
            priceDetails: 'Цена фиксированная за страницу. Дополнительные функции (оглавление, подсветка кода, кнопка печати) включены в стоимость. Большие объемы текста обсуждаются отдельно.'
        },
        custom: {
            title: 'Индивидуальный проект',
            price: 'Договорная',
            description: 'Не нашли подходящий вариант? Обсудим вашу задачу и создадим уникальное решение под ваши требования. Полная кастомизация под ваш бренд. Любая сложность и функциональность (в рамках HTML/CSS).',
            time: 'от 5 рабочих дней. Точный срок определяется после обсуждения проекта.',
            priceDetails: 'Цена рассчитывается индивидуально исходя из сложности проекта, количества страниц и уникальных требований. Минимальная стоимость 750₽. Составляем подробное ТЗ и согласовываем бюджет перед началом работы.'
        },
        css: {
            title: 'CSS на заказ',
            price: '400-2000 ₽',
            description: 'Уникальные анимации, сложные эффекты, кастомные стили под ваш проект. От отдельных элементов до полного дизайна. Работаю с современными CSS-технологиями: CSS Grid, Flexbox, анимации, градиенты, переменные.',
            time: '1-5 рабочих дней. Срок зависит от сложности задач и объема работы.',
            priceDetails: 'Стоимость зависит от сложности анимаций, количества элементов и необходимости адаптации под разные устройства. Простые анимации от 400₽. Сложные комплексные решения до 2000₽. Каждый элемент оценивается отдельно.'
        },
        fix: {
            title: 'Исправление вашего кода',
            price: '300-1500 ₽',
            description: 'Оптимизация, рефакторинг, исправление ошибок в существующем HTML/CSS коде. Улучшаю производительность и исправляю баги. С Базовым JavaScript. Работаю с любым существующим кодом.',
            time: '1-3 рабочих дня. Срок зависит от объема кода и количества ошибок.',
            priceDetails: 'Цена зависит от объёма кода, количества ошибок и сложности требуемых исправлений. Минимальная стоимость 300₽ за анализ и мелкие исправления. Крупный рефакторинг до 1500₽. Оцениваю по факту просмотра кода.'
        }
    };
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            const data = serviceData[modalType];
            
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-price').textContent = data.price;
            document.getElementById('modal-description').textContent = data.description;
            document.getElementById('modal-time').textContent = data.time;
            document.getElementById('modal-price-details').textContent = data.priceDetails;
            
            serviceModal.classList.add('active');
            body.classList.add('no-scroll');
        });
    });
    
    modalClose.addEventListener('click', function() {
        serviceModal.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
    
    const portfolioModal = document.getElementById('portfolio-modal');
    const portfolioClose = document.getElementById('portfolio-close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioImages = document.getElementById('portfolio-images');
    const portfolioTitle = document.getElementById('portfolio-title');
    const portfolioText = document.getElementById('portfolio-text');
    const portfolioPrev = document.getElementById('portfolio-prev');
    const portfolioNext = document.getElementById('portfolio-next');
    
    const imageViewerModal = document.getElementById('image-viewer-modal');
    const imageViewerClose = document.getElementById('image-viewer-close');
    const fullSizeImage = document.getElementById('full-size-image');
    const imagePrev = document.getElementById('image-prev');
    const imageNext = document.getElementById('image-next');
    const imageCounter = document.getElementById('image-counter');
    
    const portfolioData = {
        1: {
            title: 'Магазин сувениров',
            description: 'Интернет-магазин с каталогом товаров, фильтрацией по категориям и адаптивным дизайном. Реализована удобная система просмотра товаров, детальные карточки с описанием и ценами. Сайт оптимизирован для мобильных устройств и имеет быструю загрузку страниц.',
            images: [
                'images/port1.jpg',
                'images/port2.jpg'
            ]
        },
        2: {
            title: 'Квантовые вычисления',
            description: 'Корпоративный сайт для компании, занимающейся квантовыми технологиями. Современный дизайн с анимациями, разделы о технологиях, команде и проектах. Реализована адаптивная галерея проектов и система отзывов клиентов.',
            images: [
                'images/port3.jpg',
                'images/port4.jpg',
                'images/port5.jpg'
            ]
        },
        3: {
            title: 'Сайт-визитка фотографа',
            description: 'Элегантное портфолио для профессионального фотографа. Галерея работ с фильтрацией по категориям, раздел об авторе, контакты и форма обратной связи. Адаптивный дизайн с акцентом на визуальный контент.',
            images: [
                'images/port6.jpg',
                'images/port7.jpg',
                'images/port8.jpg',
                'images/port9.jpg'
            ]
        }
    };
    
    let currentPortfolio = 1;
    let currentImageIndex = 0;
    let currentImages = [];
    const totalPortfolios = 3;
    
    function loadPortfolioImages(images) {
        portfolioImages.innerHTML = '';
        currentImages = images;
        
        images.forEach((imgSrc, index) => {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'portfolio-image';
            imgDiv.dataset.index = index;
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Проект ${currentPortfolio} - изображение ${index + 1}`;
            img.loading = 'lazy';
            
            imgDiv.appendChild(img);
            portfolioImages.appendChild(imgDiv);
            
            imgDiv.addEventListener('click', () => {
                openImageViewer(index);
            });
        });
    }
    
    function openPortfolio(id) {
        currentPortfolio = id;
        const data = portfolioData[id];
        
        if (!data) return;
        
        portfolioTitle.textContent = data.title;
        portfolioText.textContent = data.description;
        loadPortfolioImages(data.images);
        
        portfolioModal.classList.add('active');
        body.classList.add('no-scroll');
    }
    
    function openImageViewer(index) {
        currentImageIndex = index;
        updateImageViewer();
        imageViewerModal.classList.add('active');
        body.classList.add('no-scroll');
    }
    
    function updateImageViewer() {
        if (currentImages.length === 0) return;
        
        fullSizeImage.src = currentImages[currentImageIndex];
        fullSizeImage.alt = `Проект ${currentPortfolio} - изображение ${currentImageIndex + 1}`;
        imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
    }
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.portfolio-count') || e.target.closest('a')) return;
            
            const id = parseInt(this.getAttribute('data-portfolio'));
            openPortfolio(id);
        });
    });
    
    portfolioClose.addEventListener('click', function() {
        portfolioModal.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    portfolioModal.addEventListener('click', function(e) {
        if (e.target === portfolioModal) {
            portfolioModal.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
    
    portfolioPrev.addEventListener('click', function() {
        currentPortfolio = currentPortfolio > 1 ? currentPortfolio - 1 : totalPortfolios;
        openPortfolio(currentPortfolio);
    });
    
    portfolioNext.addEventListener('click', function() {
        currentPortfolio = currentPortfolio < totalPortfolios ? currentPortfolio + 1 : 1;
        openPortfolio(currentPortfolio);
    });
    
    imageViewerClose.addEventListener('click', function() {
        imageViewerModal.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    imageViewerModal.addEventListener('click', function(e) {
        if (e.target === imageViewerModal) {
            imageViewerModal.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
    
    imagePrev.addEventListener('click', function() {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentImages.length - 1;
        updateImageViewer();
    });
    
    imageNext.addEventListener('click', function() {
        currentImageIndex = currentImageIndex < currentImages.length - 1 ? currentImageIndex + 1 : 0;
        updateImageViewer();
    });
    
    document.addEventListener('keydown', function(e) {
        if (imageViewerModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                imageViewerModal.classList.remove('active');
                body.classList.remove('no-scroll');
            }
            if (e.key === 'ArrowLeft') {
                imagePrev.click();
            }
            if (e.key === 'ArrowRight') {
                imageNext.click();
            }
        }
        
        if (portfolioModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                portfolioModal.classList.remove('active');
                body.classList.remove('no-scroll');
            }
            if (e.key === 'ArrowLeft') {
                portfolioPrev.click();
            }
            if (e.key === 'ArrowRight') {
                portfolioNext.click();
            }
        }
        
        if (serviceModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                serviceModal.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        }
    });
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
        
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const fadeElements = document.querySelectorAll('.service-card, .process-step, .portfolio-item, .contact-card');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    window.dispatchEvent(new Event('scroll'));
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenuToggle.style.display = 'none';
            desktopMenuToggle.style.display = 'flex';
        } else {
            mobileMenuToggle.style.display = 'flex';
            desktopMenuToggle.style.display = 'none';
        }
    });
    
    window.dispatchEvent(new Event('resize'));
    
    const buttons = document.querySelectorAll('.order-btn, .detail-btn, .contact-link, .cta-button');
    buttons.forEach(button => {
        button.classList.add('touch-button');
    });
});