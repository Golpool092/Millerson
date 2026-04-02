(function() {
    var backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        });
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    var scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgress.style.width = (height > 0 ? (winScroll / height) * 100 : 0) + '%';
        });
    }

    var supportFloat = document.getElementById('supportFloat');
    var supportModal = document.getElementById('supportModal');
    var closeSupport = document.getElementById('closeSupport');
    if (supportFloat && supportModal) {
        supportFloat.addEventListener('click', function(e) {
            e.stopPropagation();
            supportModal.style.display = supportModal.style.display === 'block' ? 'none' : 'block';
        });
        if (closeSupport) {
            closeSupport.addEventListener('click', function() {
                supportModal.style.display = 'none';
            });
        }
        document.addEventListener('click', function(e) {
            if (!supportModal.contains(e.target) && !supportFloat.contains(e.target)) {
                supportModal.style.display = 'none';
            }
        });
    }

    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        var question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });

    var cookieBanner = document.getElementById('cookieBanner');
    var acceptBtn = document.getElementById('acceptCookies');
    if (cookieBanner && acceptBtn) {
        if (!localStorage.getItem('cookieAccepted')) cookieBanner.style.display = 'block';
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieAccepted', 'true');
            cookieBanner.style.display = 'none';
        });
    }

    if (!localStorage.getItem('themeToastShown') && !document.body.classList.contains('dark-theme')) {
        var toast = document.createElement('div');
        toast.className = 'game-toast';
        toast.innerHTML = '<span style="flex:1; margin-right:8px;">Вы можете переключить на тёмную тему в меню</span><span style="font-size:1.2rem; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>';
        document.body.appendChild(toast);
        var startX = 0, currentX = 0, isSwiping = false;
        toast.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; isSwiping = true; });
        toast.addEventListener('touchmove', function(e) { if (!isSwiping) return; currentX = e.touches[0].clientX; toast.style.transform = 'translateX(' + (currentX - startX) + 'px)'; });
        toast.addEventListener('touchend', function() {
            if (!isSwiping) return;
            var deltaX = currentX - startX;
            if (Math.abs(deltaX) > 50) toast.remove();
            else toast.style.transform = '';
            isSwiping = false; startX = 0; currentX = 0;
        });
        setTimeout(function() { if (toast.parentNode) toast.remove(); }, 3500);
        localStorage.setItem('themeToastShown', 'true');
    }

    var allPagesData = [
        { category: "Главные страницы", files: ["index.html", "all.html", "about.html", "contacts.html", "privacy.html", "geometry.html", "mathematics.html"] },
        { category: "Финансовые калькуляторы", files: ["allfinance.html", "credit.html", "ndfl.html", "percent.html", "compound-interest.html", "simple-interest.html", "percent-change.html"] },
        { category: "Алгебра – калькуляторы", files: ["algebra.html", "fraction.html", "allquadratic.html", "quadratic.html", "quadratic_nob.html", "quadratic_noc.html", "system_linear.html", "system-2-equations.html", "linear-equation.html", "linear-inequality.html", "quadratic-inequality.html", "absolute-value.html", "proportion.html", "ratio.html", "mixed-numbers.html"] },
        { category: "Алгебра – справочники", files: ["algebra-formulas.html", "algebra-glossary.html", "algebra-history.html", "discriminant-reference.html", "quadratic-formula.html", "inequalities-reference.html", "polynomial-identities.html", "functions-reference.html"] },
        { category: "Прогрессии и ряды", files: ["arithmetic-progression.html", "geometric-progression.html", "arithmetic-mean.html", "progressions-reference.html", "sequences-reference.html"] },
        { category: "Степени и логарифмы", files: ["exponent.html", "nth-root.html", "logarithm.html", "log-rules.html", "power-rules.html"] },
        { category: "Комбинаторика", files: ["combinations.html", "permutations.html", "factorial.html", "binomial-theorem.html", "combinatorics-reference.html"] },
        { category: "Матрицы", files: ["matrix-2x2.html", "matrix-3x3.html", "matrix-theory.html"] },
        { category: "Комплексные числа", files: ["complex-numbers.html", "complex-numbers-theory.html"] },
        { category: "Теория чисел", files: ["gcd-lcm.html", "prime-factorization.html", "number-bases.html", "number-systems.html", "number-theory.html", "divisibility-rules.html", "rounding.html", "scientific-notation.html", "famous-constants.html", "sets-theory.html"] },
        { category: "Геометрия – плоские фигуры", files: ["allgeometry-basic.html", "circle.html", "sector.html", "square.html", "rectangle.html", "rhombus.html", "parallelogram.html", "trapezoid.html", "isosceles-trapezoid.html", "triangle.html", "right-triangle.html", "equilateral-triangle.html", "regular-polygon.html"] },
        { category: "Геометрия – 3D фигуры", files: ["allgeometry-3d.html", "cube.html", "rectangular-prism.html", "sphere.html", "cylinder.html", "cone.html", "frustum.html", "pyramid.html", "prism.html", "tetrahedron.html", "octahedron.html", "dodecahedron.html", "icosahedron.html", "spherical-cap.html", "spherical-sector.html", "torus.html", "ellipsoid.html"] },
        { category: "Аналитическая геометрия", files: ["all-coordinate-calculator.html", "2d-coordinate-calculator.html", "3d-coordinate-calculator.html", "curves-coordinate-calculator.html", "transforms-coordinate-calculator.html"] },
        { category: "Тригонометрия", files: ["alltrigonometry.html", "sin.html", "cos.html", "tan.html", "ctg.html", "sec.html", "cosec.html", "arcsin.html", "arccos.html", "arctan.html"] },
        { category: "Справочники геометрии", files: ["allgeometry-formulas.html", "geometry-guide.html", "circle-guide.html", "ellipse-guide.html", "cube-guide.html", "parallelepiped-guide.html", "prism-guide.html", "pyramid-guide.html", "cone-guide.html", "sphere-guide.html", "cylinder-guide.html", "tetrahedron-guide.html", "octahedron-guide.html", "dodecahedron-guide.html", "icosahedron-guide.html", "torus-guide.html", "sector-guide.html", "equilateral-triangle-guide.html", "right-triangle-guide.html"] },
        { category: "Подстраницы параллелограмма", files: ["parallelogram-area.html", "parallelogram-perimeter.html", "parallelogram-diagonal.html", "parallelogram-height.html", "parallelogram-guide.html"] },
        { category: "Подстраницы эллипса", files: ["ellipse-area.html", "ellipse-perimeter.html", "ellipse-eccentricity.html", "ellipse-foci.html", "ellipse-guide.html"] },
        { category: "Подстраницы окружности", files: ["circle-length.html", "circle-area.html", "circle-arc.html", "circle-chord.html", "circle-segment.html", "circle-tangent.html", "circle-inscribed-angle.html"] },
        { category: "Подстраницы равностороннего треугольника", files: ["equilateral-area.html", "equilateral-height.html", "equilateral-circumradius.html", "equilateral-inradius.html", "equilateral-triangle-guide.html"] },
        { category: "Подстраницы прямоугольного треугольника", files: ["right-triangle-area.html", "right-triangle-circumradius.html", "right-triangle-height.html", "right-triangle-hypotenuse.html", "right-triangle-inradius.html", "right-triangle-projections.html", "right-triangle-guide.html"] },
        { category: "Подстраницы прямоугольника", files: ["rectangle-area.html", "rectangle-perimeter.html", "rectangle-diagonal.html", "rectangle-angle.html", "rectangle-guide.html"] },
        { category: "Подстраницы квадрата", files: ["square-area.html", "square-perimeter.html", "square-diagonal.html", "square-guide.html"] },
        { category: "Подстраницы ромба", files: ["rhombus-area.html", "rhombus-perimeter.html", "rhombus-diagonal.html", "rhombus-height.html", "rhombus-angle.html", "rhombus-radius.html", "rhombus-guide.html"] },
        { category: "Подстраницы трапеции", files: ["trapezoid-area.html", "trapezoid-perimeter.html", "trapezoid-midline.html", "trapezoid-height.html", "trapezoid-diagonal.html", "trapezoid-guide.html"] },
        { category: "Подстраницы треугольника", files: ["triangle-area.html", "triangle-perimeter.html", "triangle-median.html", "triangle-height.html", "triangle-bisector.html", "triangle-circumradius.html", "triangle-inradius.html", "triangle-guide.html"] }
    ];

    function renderModalPages(filterText) {
        var container = document.getElementById('modalPagesList');
        if (!container) return;
        var lowerFilter = filterText ? filterText.toLowerCase() : '';
        var html = '';
        for (var i = 0; i < allPagesData.length; i++) {
            var category = allPagesData[i];
            var filteredFiles = category.files;
            if (lowerFilter) {
                filteredFiles = category.files.filter(function(file) {
                    return file.toLowerCase().indexOf(lowerFilter) !== -1;
                });
            }
            if (filteredFiles.length === 0) continue;
            html += '<div class="modal-category"><div class="modal-category__title"><i class="fas fa-folder-open"></i> ' + category.category + ' (' + filteredFiles.length + ')</div><div class="modal-category__grid">';
            for (var j = 0; j < filteredFiles.length; j++) {
                var file = filteredFiles[j];
                var displayName = file.replace(/\.html$/, '').replace(/[-_]/g, ' ');
                displayName = displayName.split(' ').map(function(word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
                html += '<a href="' + file + '" class="modal-page-link" target="_blank"><i class="fas fa-file-alt"></i> ' + displayName + '</a>';
            }
            html += '</div></div>';
        }
        if (html === '') {
            html = '<div style="text-align:center; padding:40px;">Ничего не найдено</div>';
        }
        container.innerHTML = html;
    }

    var modal = document.getElementById('allPagesModal');
    var statServices = document.getElementById('statServices');
    var statPages = document.getElementById('statPages');
    var closeModalBtn = document.getElementById('closeModalBtn');

    function openModal() {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderModalPages('');
        var searchInput = document.getElementById('modalSearchInput');
        if (searchInput) searchInput.value = '';
    }
    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (statServices) statServices.addEventListener('click', openModal);
    if (statPages) statPages.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    var overlay = document.querySelector('.modal-fullscreen__overlay');
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
    });
    var searchInput = document.getElementById('modalSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) { renderModalPages(e.target.value); });
    }
})();
