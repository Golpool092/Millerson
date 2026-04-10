(function() {
    var BASE_URL = 'https://millerson.shop';

    function createMenu() {
        var headerContainer = document.querySelector('.header__container');
        if (!headerContainer) return;
        headerContainer.innerHTML = '';

        var logo = document.createElement('span');
        logo.className = 'header__logo';
        logo.innerHTML = 'Millerson <span>Finance</span>';
        headerContainer.appendChild(logo);

        var sidebarToggle = document.createElement('button');
        sidebarToggle.className = 'sidebar-toggle';
        sidebarToggle.id = 'sidebarToggle';
        sidebarToggle.setAttribute('aria-label', 'Открыть боковое меню');
        sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
        headerContainer.appendChild(sidebarToggle);

        var burger = document.createElement('button');
        burger.className = 'burger';
        burger.id = 'burgerBtn';
        burger.setAttribute('aria-label', 'Открыть меню');
        for (var i = 0; i < 3; i++) {
            var line = document.createElement('span');
            line.className = 'burger__line';
            burger.appendChild(line);
        }
        headerContainer.appendChild(burger);

        var pages = [
            { href: BASE_URL + '/', text: 'Главная', icon: 'fa-home' },
            { href: BASE_URL + '/all.html', text: 'Все проекты', icon: 'fa-th-large' },
            { href: 'allfinance.html', text: 'Все калькуляторы', icon: 'fa-calculator' },
            { href: BASE_URL + '/about.html', text: 'О компании', icon: 'fa-info-circle' },
            { href: BASE_URL + '/contacts.html', text: 'Контакты', icon: 'fa-envelope' },
            { href: BASE_URL + '/shop/shop.html', text: 'Магазин', icon: 'fa-shopping-bag' }
        ];

        var sidebar = document.createElement('aside');
        sidebar.className = 'sidebar';
        sidebar.id = 'sidebar';
        sidebar.innerHTML =
            '<div class="sidebar__header">' +
                '<span class="sidebar__logo">Millerson <em>Finance</em></span>' +
                '<button class="sidebar__close" id="sidebarClose" aria-label="Закрыть меню"><i class="fas fa-times"></i></button>' +
            '</div>' +
            '<nav class="sidebar__nav" aria-label="Основная навигация"><ul class="sidebar__list" id="sidebarList"></ul></nav>' +
            '<div class="sidebar__footer" id="sidebarFooter"></div>';
        document.body.appendChild(sidebar);

        var overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.id = 'sidebarOverlay';
        document.body.appendChild(overlay);

        var sidebarList = document.getElementById('sidebarList');
        pages.forEach(function(p) {
            var li = document.createElement('li');
            li.innerHTML = '<a href="' + p.href + '" class="sidebar__link"><i class="fas ' + p.icon + '"></i> ' + p.text + '</a>';
            sidebarList.appendChild(li);
        });

        var divider = document.createElement('li');
        divider.className = 'sidebar__divider';
        sidebarList.appendChild(divider);

        var themeItem = document.createElement('li');
        themeItem.innerHTML =
            '<div class="sidebar__switch">' +
                '<span><i class="fas fa-moon"></i> Тёмная тема</span>' +
                '<label class="switch"><input type="checkbox" id="themeToggleDesktop"><span class="slider"></span></label>' +
            '</div>';
        sidebarList.appendChild(themeItem);

        var thematicItem = document.createElement('li');
        thematicItem.innerHTML =
            '<div class="sidebar__switch">' +
                '<span><i class="fas fa-palette"></i> Тематическая тема</span>' +
                '<label class="switch"><input type="checkbox" id="thematicToggleDesktop" checked><span class="slider"></span></label>' +
            '</div>';
        sidebarList.appendChild(thematicItem);

        var sidebarFooter = document.getElementById('sidebarFooter');
        sidebarFooter.innerHTML =
            '<div class="sidebar__support">' +
                '<span class="sidebar__support-title">Связь с нами</span>' +
                '<a href="https://t.me/Millerson_Company" target="_blank" rel="noopener" class="sidebar__support-link"><i class="fab fa-telegram"></i> Telegram</a>' +
                '<a href="mailto:MillersonShop@gmail.com" class="sidebar__support-link"><i class="fas fa-envelope"></i> Email</a>' +
            '</div>';

        var mobileNav = document.createElement('nav');
        mobileNav.className = 'nav nav--mobile';
        mobileNav.id = 'navMobile';
        var mobileUl = document.createElement('ul');
        mobileUl.className = 'nav__list';

        pages.forEach(function(p) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = p.href;
            a.className = 'nav__link';
            a.innerHTML = '<i class="fas ' + p.icon + '"></i> ' + p.text;
            li.appendChild(a);
            mobileUl.appendChild(li);
        });

        var mobileThemeLi = document.createElement('li');
        mobileThemeLi.innerHTML =
            '<div class="theme-switch"><span class="theme-switch__label">Тёмная тема</span>' +
            '<label class="switch"><input type="checkbox" id="themeToggleMobile"><span class="slider"></span></label></div>';
        mobileUl.appendChild(mobileThemeLi);

        var mobileThematicLi = document.createElement('li');
        mobileThematicLi.innerHTML =
            '<div class="theme-switch"><span class="theme-switch__label">Тематическая тема</span>' +
            '<label class="switch"><input type="checkbox" id="thematicToggleMobile" checked><span class="slider"></span></label></div>';
        mobileUl.appendChild(mobileThematicLi);

        var mobileSupportLi = document.createElement('li');
        mobileSupportLi.className = 'mobile-support';
        mobileSupportLi.innerHTML =
            '<div class="mobile-support__block">' +
                '<span class="mobile-support__title">Связь с нами</span>' +
                '<a href="https://t.me/Millerson_Company" target="_blank" rel="noopener" class="mobile-support__link"><i class="fab fa-telegram"></i> Telegram</a>' +
                '<a href="mailto:MillersonShop@gmail.com" class="mobile-support__link"><i class="fas fa-envelope"></i> Email</a>' +
            '</div>';
        mobileUl.appendChild(mobileSupportLi);

        mobileNav.appendChild(mobileUl);
        headerContainer.appendChild(mobileNav);
    }

    createMenu();

    var themeToggleDesktop = document.getElementById('themeToggleDesktop');
    var themeToggleMobile = document.getElementById('themeToggleMobile');
    var savedTheme = localStorage.getItem('theme');

    function setTheme(checked) {
        if (checked) { document.body.classList.add('dark-theme'); }
        else { document.body.classList.remove('dark-theme'); }
        localStorage.setItem('theme', checked ? 'dark' : 'light');
        if (themeToggleDesktop) themeToggleDesktop.checked = checked;
        if (themeToggleMobile) themeToggleMobile.checked = checked;
    }

    if (savedTheme !== 'light') { setTheme(true); } else { setTheme(false); }
    if (themeToggleDesktop) themeToggleDesktop.addEventListener('change', function(e) { setTheme(e.target.checked); });
    if (themeToggleMobile) themeToggleMobile.addEventListener('change', function(e) { setTheme(e.target.checked); });

    var thematicDesktop = document.getElementById('thematicToggleDesktop');
    var thematicMobile = document.getElementById('thematicToggleMobile');
    var savedThematic = localStorage.getItem('financeThematic');

    function setThematic(checked) {
        if (checked) { document.body.classList.add('thematic-theme'); }
        else { document.body.classList.remove('thematic-theme'); }
        localStorage.setItem('financeThematic', checked ? 'on' : 'off');
        if (thematicDesktop) thematicDesktop.checked = checked;
        if (thematicMobile) thematicMobile.checked = checked;
    }

    if (savedThematic !== 'off') { setThematic(true); } else { setThematic(false); }
    if (thematicDesktop) thematicDesktop.addEventListener('change', function(e) { setThematic(e.target.checked); });
    if (thematicMobile) thematicMobile.addEventListener('change', function(e) { setThematic(e.target.checked); });

    var burgerBtn = document.getElementById('burgerBtn');
    var navMobile = document.getElementById('navMobile');

    function closeMobileMenu() {
        if (navMobile) navMobile.classList.remove('active');
        if (burgerBtn) burgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (burgerBtn && navMobile) {
        burgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMobile.classList.toggle('active');
            burgerBtn.classList.toggle('active');
            document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
        });
        navMobile.querySelectorAll('.nav__link, .btn').forEach(function(link) { link.addEventListener('click', closeMobileMenu); });
        document.addEventListener('click', function(event) {
            if (!navMobile.contains(event.target) && !burgerBtn.contains(event.target)) closeMobileMenu();
        });
    }

    var sidebarEl = document.getElementById('sidebar');
    var sidebarToggleBtn = document.getElementById('sidebarToggle');
    var sidebarCloseBtn = document.getElementById('sidebarClose');
    var sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        if (sidebarEl) sidebarEl.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
    }
    function closeSidebar() {
        if (sidebarEl) sidebarEl.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    }
    if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', openSidebar);
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
})();
