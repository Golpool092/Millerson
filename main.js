(function() {
    const themeToggleDesktop = document.getElementById('themeToggleDesktop');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const savedTheme = localStorage.getItem('theme');
    function setTheme(checked) {
        if (checked) document.body.classList.add('dark-theme');
        else document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', checked ? 'dark' : 'light');
        if (themeToggleDesktop) themeToggleDesktop.checked = checked;
        if (themeToggleMobile) themeToggleMobile.checked = checked;
    }
    if (savedTheme === 'dark') setTheme(true);
    else setTheme(false);
    if (themeToggleDesktop) themeToggleDesktop.addEventListener('change', e => setTheme(e.target.checked));
    if (themeToggleMobile) themeToggleMobile.addEventListener('change', e => setTheme(e.target.checked));

    const burgerBtn = document.getElementById('burgerBtn');
    const navMobile = document.getElementById('navMobile');
    function closeMobileMenu() { navMobile.classList.remove('active'); burgerBtn.classList.remove('active'); document.body.style.overflow = ''; }
    if (burgerBtn && navMobile) {
        burgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMobile.classList.toggle('active');
            burgerBtn.classList.toggle('active');
            document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
        });
        navMobile.querySelectorAll('.nav__link, .btn').forEach(link => link.addEventListener('click', closeMobileMenu));
        document.addEventListener('click', function(event) {
            if (!navMobile.contains(event.target) && !burgerBtn.contains(event.target)) closeMobileMenu();
        });
    }

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
    });
    backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollProgress.style.width = (winScroll / height) * 100 + '%';
    });

    const supportFloat = document.getElementById('supportFloat');
    const supportModal = document.getElementById('supportModal');
    const closeSupport = document.getElementById('closeSupport');
    supportFloat.addEventListener('click', function(e) {
        e.stopPropagation();
        supportModal.classList.toggle('active');
    });
    closeSupport.addEventListener('click', function() {
        supportModal.classList.remove('active');
    });
    document.addEventListener('click', function(e) {
        if (!supportModal.contains(e.target) && !supportFloat.contains(e.target)) {
            supportModal.classList.remove('active');
        }
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => { item.classList.toggle('active'); });
    });

    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    if (!localStorage.getItem('cookieAccepted')) cookieBanner.style.display = 'block';
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    if (!localStorage.getItem('themeToastShown') && !document.body.classList.contains('dark-theme')) {
        const toast = document.createElement('div');
        toast.className = 'game-toast';
        toast.innerHTML = '<span style="flex:1; margin-right:8px;">Вы можете переключить на тёмную тему в меню</span><span style="font-size:1.2rem; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>';
        document.body.appendChild(toast);
        let startX=0,currentX=0,isSwiping=false;
        const onTouchStart = (e) => { startX = e.touches[0].clientX; isSwiping = true; };
        const onTouchMove = (e) => { if (!isSwiping) return; currentX = e.touches[0].clientX; toast.style.transform = `translateX(${currentX - startX}px)`; };
        const onTouchEnd = () => {
            if (!isSwiping) return;
            const deltaX = currentX - startX;
            if (Math.abs(deltaX) > 50) toast.remove();
            else toast.style.transform = '';
            isSwiping = false; startX = 0; currentX = 0;
        };
        toast.addEventListener('touchstart', onTouchStart);
        toast.addEventListener('touchmove', onTouchMove);
        toast.addEventListener('touchend', onTouchEnd);
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3500);
        localStorage.setItem('themeToastShown', 'true');
    }

    const allPagesData = [
        { category: "Главные страницы", files: ["index.html", "all.html", "about.html", "contacts.html", "privacy.html", "test.html"] },
        { category: "Финансовые калькуляторы", files: ["allfinance.html", "credit.html", "ndfl.html", "percent.html"] },
        { category: "Алгебра", files: ["algebra.html", "percent.html", "fraction.html", "allquadratic.html", "quadratic.html", "quadratic_nob.html", "quadratic_noc.html", "system_linear.html"] },
        { category: "Геометрия – плоские фигуры", files: ["allgeometry-basic.html", "circle.html", "sector.html", "square.html", "rectangle.html", "rhombus.html", "parallelogram.html", "trapezoid.html", "isosceles-trapezoid.html", "triangle.html", "right-triangle.html", "equilateral-triangle.html", "regular-polygon.html"] },
        { category: "Геометрия – 3D фигуры", files: ["allgeometry-3d.html", "cube.html", "rectangular-prism.html", "sphere.html", "cylinder.html", "cone.html", "frustum.html", "pyramid.html", "prism.html", "tetrahedron.html", "octahedron.html", "dodecahedron.html", "icosahedron.html", "spherical-cap.html", "spherical-sector.html", "torus.html", "ellipsoid.html"] },
        { category: "Аналитическая геометрия", files: ["all-coordinate-calculator.html", "2d-coordinate-calculator.html", "3d-coordinate-calculator.html", "curves-coordinate-calculator.html", "transforms-coordinate-calculator.html"] },
        { category: "Тригонометрия", files: ["alltrigonometry.html", "sin.html", "cos.html", "tan.html", "ctg.html", "sec.html", "cosec.html", "arcsin.html", "arccos.html", "arctan.html"] },
        { category: "Справочники (основные)", files: ["allgeometry-formulas.html", "geometry-guide.html", "circle-guide.html", "ellipse-guide.html", "cube-guide.html", "parallelepiped-guide.html", "prism-guide.html", "pyramid-guide.html", "cone-guide.html", "equilateral-triangle-guide.html", "right-triangle-guide.html", "regular-polygon-guide.html", "pythagorean-theorem.html"] },
        { category: "Подстраницы параллелограмма", files: ["parallelogram-area.html", "parallelogram-perimeter.html", "parallelogram-diagonal.html", "parallelogram-height.html"] },
        { category: "Подстраницы эллипса", files: ["ellipse-area.html", "ellipse-perimeter.html", "ellipse-eccentricity.html", "ellipse-foci.html"] },
        { category: "Подстраницы окружности", files: ["circle-length.html", "circle-area.html", "circle-arc.html", "circle-chord.html", "circle-segment.html", "circle-tangent.html", "circle-inscribed-angle.html"] },
        { category: "Подстраницы равностороннего треугольника", files: ["equilateral-area.html", "equilateral-height.html", "equilateral-circumradius.html", "equilateral-inradius.html"] },
        { category: "Подстраницы прямоугольного треугольника", files: ["right-triangle-area.html", "right-triangle-circumradius.html", "right-triangle-height.html", "right-triangle-hypotenuse.html", "right-triangle-inradius.html", "right-triangle-projections.html"] },
        { category: "Подстраницы прямоугольника", files: ["rectangle-area.html", "rectangle-perimeter.html", "rectangle-diagonal.html", "rectangle-guide.html"] },
        { category: "Подстраницы квадрата", files: ["square-area.html", "square-perimeter.html", "square-diagonal.html", "square-guide.html"] },
        { category: "Подстраницы ромба", files: ["rhombus-area.html", "rhombus-perimeter.html", "rhombus-diagonal.html", "rhombus-height.html", "rhombus-angle.html", "rhombus-radius.html", "rhombus-guide.html"] },
        { category: "Подстраницы трапеции", files: ["trapezoid-area.html", "trapezoid-perimeter.html", "trapezoid-midline.html", "trapezoid-height.html", "trapezoid-diagonal.html", "trapezoid-guide.html"] },
        { category: "Подстраницы треугольника", files: ["triangle-area.html", "triangle-perimeter.html", "triangle-median.html", "triangle-height.html", "triangle-bisector.html", "triangle-circumradius.html", "triangle-inradius.html", "triangle-guide.html"] },
        { category: "Дополнительные справочники", files: ["sector-guide.html", "regular-polygon-guide.html"] }
    ];

    function renderModalPages(filterText = "") {
        const container = document.getElementById("modalPagesList");
        if (!container) return;
        const lowerFilter = filterText.toLowerCase();
        let html = "";
        for (const category of allPagesData) {
            let filteredFiles = category.files;
            if (lowerFilter) {
                filteredFiles = category.files.filter(file => file.toLowerCase().includes(lowerFilter));
            }
            if (filteredFiles.length === 0) continue;
            html += `<div class="modal-category"><div class="modal-category__title"><i class="fas fa-folder-open"></i> ${category.category} (${filteredFiles.length})</div><div class="modal-category__grid">`;
            for (const file of filteredFiles) {
                let displayName = file.replace(/\.html$/, '').replace(/-/g, ' ');
                displayName = displayName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                html += `<a href="${file}" class="modal-page-link" target="_blank"><i class="fas fa-file-alt"></i> ${displayName}</a>`;
            }
            html += `</div></div>`;
        }
        if (html === "") {
            html = `<div style="text-align:center; padding:40px;">😕 Ничего не найдено</div>`;
        }
        container.innerHTML = html;
    }

    const modal = document.getElementById("allPagesModal");
    const statServices = document.getElementById("statServices");
    const statPages = document.getElementById("statPages");
    const closeModalBtn = document.getElementById("closeModalBtn");

    function openModal() {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
        renderModalPages("");
        const searchInput = document.getElementById("modalSearchInput");
        if (searchInput) searchInput.value = "";
    }
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
    if (statServices) statServices.addEventListener("click", openModal);
    if (statPages) statPages.addEventListener("click", openModal);
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    const overlay = document.querySelector(".modal-fullscreen__overlay");
    if (overlay) overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) closeModal();
    });
    const searchInput = document.getElementById("modalSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", function(e) { renderModalPages(e.target.value); });
    }
})();