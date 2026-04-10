(function() {
    var BASE_URL = 'https://millerson.shop';

    function createMenu() {
        var headerContainer = document.querySelector('.header__container');
        if (!headerContainer) return;
        headerContainer.innerHTML = '';

        var logo = document.createElement('span');
        logo.className = 'header__logo';
        logo.textContent = 'Millerson Company';
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
            { href: BASE_URL + '/about.html', text: 'О компании', icon: 'fa-info-circle' },
            { href: BASE_URL + '/contacts.html', text: 'Контакты', icon: 'fa-envelope' },
            { href: BASE_URL + '/shop/shop.html', text: 'Магазин', icon: 'fa-shopping-bag' }
        ];

        var sidebar = document.createElement('aside');
        sidebar.className = 'sidebar';
        sidebar.id = 'sidebar';
        sidebar.innerHTML =
            '<div class="sidebar__header">' +
                '<span class="sidebar__logo">Millerson</span>' +
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

        var simpleItem = document.createElement('li');
        simpleItem.innerHTML =
            '<div class="sidebar__switch">' +
                '<span><i class="fas fa-bolt"></i> Супер-простой режим</span>' +
                '<label class="switch"><input type="checkbox" id="simpleModeToggleDesktop"><span class="slider"></span></label>' +
            '</div>';
        sidebarList.appendChild(simpleItem);

        var precisionItem = document.createElement('li');
        precisionItem.className = 'sidebar__precision';
        precisionItem.innerHTML =
            '<div class="sidebar__switch">' +
                '<span><i class="fas fa-crosshairs"></i> Точность</span>' +
                '<select id="precisionSelectDesktop"><option value="2" selected>2</option><option value="4">4</option><option value="6">6</option></select>' +
            '</div>';
        sidebarList.appendChild(precisionItem);

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

        var mobileSimpleLi = document.createElement('li');
        mobileSimpleLi.innerHTML =
            '<div class="theme-switch"><span class="theme-switch__label">Супер-простой режим</span>' +
            '<label class="switch"><input type="checkbox" id="simpleModeToggleMobile"><span class="slider"></span></label></div>';
        mobileUl.appendChild(mobileSimpleLi);

        var mobilePrecisionLi = document.createElement('li');
        mobilePrecisionLi.className = 'precision-selector';
        mobilePrecisionLi.innerHTML = '<span>Точность:</span><select id="precisionSelectMobile"><option value="2" selected>2</option><option value="4">4</option><option value="6">6</option></select>';
        mobileUl.appendChild(mobilePrecisionLi);

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

    function showGameToast(text) {
        var existingToast = document.querySelector('.game-toast');
        if (existingToast) existingToast.remove();
        var toast = document.createElement('div');
        toast.className = 'game-toast';
        toast.innerHTML = '<span style="flex:1;margin-right:8px;">' + text + '</span><span style="font-size:1.2rem;cursor:pointer;" onclick="this.parentElement.remove()">✕</span>';
        document.body.appendChild(toast);
        setTimeout(function() { if (toast.parentNode) toast.remove(); }, 3500);
    }

    var simpleToggleDesktop = document.getElementById('simpleModeToggleDesktop');
    var simpleToggleMobile = document.getElementById('simpleModeToggleMobile');

    function setSimpleMode(checked) {
        if (checked) { document.body.classList.add('simple-mode'); showGameToast('Супер-простой режим включён'); }
        else { document.body.classList.remove('simple-mode'); showGameToast('Супер-простой режим выключен'); }
        if (simpleToggleDesktop) simpleToggleDesktop.checked = checked;
        if (simpleToggleMobile) simpleToggleMobile.checked = checked;
    }

    if (simpleToggleDesktop) simpleToggleDesktop.addEventListener('change', function(e) { setSimpleMode(e.target.checked); });
    if (simpleToggleMobile) simpleToggleMobile.addEventListener('change', function(e) { setSimpleMode(e.target.checked); });

    var precisionDesktop = document.getElementById('precisionSelectDesktop');
    var precisionMobile = document.getElementById('precisionSelectMobile');

    function setPrecision(val) {
        var precision = parseInt(val, 10);
        if (precisionDesktop) precisionDesktop.value = val;
        if (precisionMobile) precisionMobile.value = val;
        window.precision = precision;
        window.dispatchEvent(new CustomEvent('precisionChange', { detail: precision }));
    }

    if (precisionDesktop) precisionDesktop.addEventListener('change', function(e) { setPrecision(e.target.value); });
    if (precisionMobile) precisionMobile.addEventListener('change', function(e) { setPrecision(e.target.value); });

    if (precisionDesktop || precisionMobile) {
        var initialVal = precisionDesktop ? precisionDesktop.value : (precisionMobile ? precisionMobile.value : '2');
        window.precision = parseInt(initialVal, 10);
    } else {
        window.precision = 2;
    }
})();
