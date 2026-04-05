(function() {
      var BASE_URL = 'https://millerson.shop';

      function createMenu() {
          const headerContainer = document.querySelector('.header__container');
          if (!headerContainer) return;

          headerContainer.innerHTML = '';

          const logo = document.createElement('span');
          logo.className = 'header__logo';
          logo.textContent = 'Millerson Company';
          headerContainer.appendChild(logo);

          const burger = document.createElement('button');
          burger.className = 'burger';
          burger.id = 'burgerBtn';
          burger.setAttribute('aria-label', 'Открыть меню');
          for (let i = 0; i < 3; i++) {
              const line = document.createElement('span');
              line.className = 'burger__line';
              burger.appendChild(line);
          }
          headerContainer.appendChild(burger);

          const desktopNav = document.createElement('nav');
          desktopNav.className = 'nav nav--desktop';
          desktopNav.setAttribute('aria-label', 'Основная навигация');
          const desktopUl = document.createElement('ul');
          desktopUl.className = 'nav__list';

          const pages = [
              { href: BASE_URL + '/', text: 'Главная' },
              { href: BASE_URL + '/all.html', text: 'Все проекты' },
              { href: BASE_URL + '/about.html', text: 'О компании' },
              { href: BASE_URL + '/contacts.html', text: 'Контакты' }
          ];
          pages.forEach(p => {
              const li = document.createElement('li');
              const a = document.createElement('a');
              a.href = p.href;
              a.className = 'nav__link';
              a.textContent = p.text;
              li.appendChild(a);
              desktopUl.appendChild(li);
          });

          const themeLi = document.createElement('li');
          const themeDiv = document.createElement('div');
          themeDiv.className = 'theme-switch';
          themeDiv.innerHTML = `
              <span class="theme-switch__label">Тёмная тема</span>
              <label class="switch">
                  <input type="checkbox" id="themeToggleDesktop">
                  <span class="slider"></span>
              </label>
          `;
          themeLi.appendChild(themeDiv);
          desktopUl.appendChild(themeLi);

          const simpleLi = document.createElement('li');
          const simpleDiv = document.createElement('div');
          simpleDiv.className = 'theme-switch';
          simpleDiv.innerHTML = `
              <span class="theme-switch__label">Супер-простой режим</span>
              <label class="switch">
                  <input type="checkbox" id="simpleModeToggleDesktop">
                  <span class="slider"></span>
              </label>
          `;
          simpleLi.appendChild(simpleDiv);
          desktopUl.appendChild(simpleLi);

          const precisionLi = document.createElement('li');
          precisionLi.className = 'precision-selector';
          precisionLi.innerHTML = `
              <span>Точность:</span>
              <select id="precisionSelectDesktop">
                  <option value="2" selected>2 знака</option>
                  <option value="4">4 знака</option>
                  <option value="6">6 знаков</option>
              </select>
          `;
          desktopUl.appendChild(precisionLi);

          const kworkLi = document.createElement('li');
          const kworkA = document.createElement('a');
          kworkA.href = 'https://kwork.ru/user/Millerson_Shop';
          kworkA.target = '_blank';
          kworkA.rel = 'noopener';
          kworkA.className = 'btn btn--primary';
          kworkA.textContent = 'Millerson SHOP на Kwork';
          kworkLi.appendChild(kworkA);
          desktopUl.appendChild(kworkLi);

          desktopNav.appendChild(desktopUl);
          headerContainer.appendChild(desktopNav);

          const mobileNav = document.createElement('nav');
          mobileNav.className = 'nav nav--mobile';
          mobileNav.id = 'navMobile';
          const mobileUl = document.createElement('ul');
          mobileUl.className = 'nav__list';

          pages.forEach(p => {
              const li = document.createElement('li');
              const a = document.createElement('a');
              a.href = p.href;
              a.className = 'nav__link';
              a.textContent = p.text;
              li.appendChild(a);
              mobileUl.appendChild(li);
          });

          const mobileThemeLi = document.createElement('li');
          const mobileThemeDiv = document.createElement('div');
          mobileThemeDiv.className = 'theme-switch';
          mobileThemeDiv.innerHTML = `
              <span class="theme-switch__label">Тёмная тема</span>
              <label class="switch">
                  <input type="checkbox" id="themeToggleMobile">
                  <span class="slider"></span>
              </label>
          `;
          mobileThemeLi.appendChild(mobileThemeDiv);
          mobileUl.appendChild(mobileThemeLi);

          const mobileSimpleLi = document.createElement('li');
          const mobileSimpleDiv = document.createElement('div');
          mobileSimpleDiv.className = 'theme-switch';
          mobileSimpleDiv.innerHTML = `
              <span class="theme-switch__label">Супер-простой режим</span>
              <label class="switch">
                  <input type="checkbox" id="simpleModeToggleMobile">
                  <span class="slider"></span>
              </label>
          `;
          mobileSimpleLi.appendChild(mobileSimpleDiv);
          mobileUl.appendChild(mobileSimpleLi);

          const mobilePrecisionLi = document.createElement('li');
          mobilePrecisionLi.className = 'precision-selector';
          mobilePrecisionLi.innerHTML = `
              <span>Точность:</span>
              <select id="precisionSelectMobile">
                  <option value="2" selected>2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
              </select>
          `;
          mobileUl.appendChild(mobilePrecisionLi);

          const mobileKworkLi = document.createElement('li');
          const mobileKworkA = document.createElement('a');
          mobileKworkA.href = 'https://kwork.ru/user/Millerson_Shop';
          mobileKworkA.target = '_blank';
          mobileKworkA.rel = 'noopener';
          mobileKworkA.className = 'btn btn--primary';
          mobileKworkA.textContent = 'Millerson SHOP на Kwork';
          mobileKworkLi.appendChild(mobileKworkA);
          mobileUl.appendChild(mobileKworkLi);

          mobileNav.appendChild(mobileUl);
          headerContainer.appendChild(mobileNav);
      }

      createMenu();

      const themeToggleDesktop = document.getElementById('themeToggleDesktop');
      const themeToggleMobile = document.getElementById('themeToggleMobile');
      const savedTheme = localStorage.getItem('theme');

      function setTheme(checked) {
          if (checked) {
              document.body.classList.add('dark-theme');
          } else {
              document.body.classList.remove('dark-theme');
          }
          localStorage.setItem('theme', checked ? 'dark' : 'light');
          if (themeToggleDesktop) themeToggleDesktop.checked = checked;
          if (themeToggleMobile) themeToggleMobile.checked = checked;
      }

      if (savedTheme !== 'light') {
          setTheme(true);
      } else {
          setTheme(false);
      }

      if (themeToggleDesktop) {
          themeToggleDesktop.addEventListener('change', e => setTheme(e.target.checked));
      }
      if (themeToggleMobile) {
          themeToggleMobile.addEventListener('change', e => setTheme(e.target.checked));
      }

      const burgerBtn = document.getElementById('burgerBtn');
      const navMobile = document.getElementById('navMobile');

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

          navMobile.querySelectorAll('.nav__link, .btn').forEach(link => {
              link.addEventListener('click', closeMobileMenu);
          });

          document.addEventListener('click', function(event) {
              if (!navMobile.contains(event.target) && !burgerBtn.contains(event.target)) {
                  closeMobileMenu();
              }
          });
      }

      const simpleToggleDesktop = document.getElementById('simpleModeToggleDesktop');
      const simpleToggleMobile = document.getElementById('simpleModeToggleMobile');

      function showGameToast(text) {
          const existingToast = document.querySelector('.game-toast');
          if (existingToast) existingToast.remove();

          const toast = document.createElement('div');
          toast.className = 'game-toast';
          toast.innerHTML = `
              <img src="https://millerson.shop/logo.png" alt="Millerson Company" style="height: 24px; width: auto; margin-right: 8px;">
              <span style="flex: 1; margin-right: 8px;">${text}</span>
              <span style="font-size: 1.2rem; cursor: pointer;" onclick="this.parentElement.remove()">✕</span>
          `;
          document.body.appendChild(toast);

          let startX = 0, currentX = 0, isSwiping = false;
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
      }

      function setSimpleMode(checked) {
          if (checked) {
              document.body.classList.add('simple-mode');
              showGameToast('Супер-простой режим включён');
          } else {
              document.body.classList.remove('simple-mode');
              showGameToast('Супер-простой режим выключен');
          }
          if (simpleToggleDesktop) simpleToggleDesktop.checked = checked;
          if (simpleToggleMobile) simpleToggleMobile.checked = checked;
      }

      if (simpleToggleDesktop) {
          simpleToggleDesktop.addEventListener('change', e => setSimpleMode(e.target.checked));
      }
      if (simpleToggleMobile) {
          simpleToggleMobile.addEventListener('change', e => setSimpleMode(e.target.checked));
      }

      const precisionDesktop = document.getElementById('precisionSelectDesktop');
      const precisionMobile = document.getElementById('precisionSelectMobile');

      function setPrecision(val) {
          const precision = parseInt(val, 10);
          if (precisionDesktop) precisionDesktop.value = val;
          if (precisionMobile) precisionMobile.value = val;
          window.precision = precision;
          window.dispatchEvent(new CustomEvent('precisionChange', { detail: precision }));
      }

      if (precisionDesktop) {
          precisionDesktop.addEventListener('change', e => setPrecision(e.target.value));
      }
      if (precisionMobile) {
          precisionMobile.addEventListener('change', e => setPrecision(e.target.value));
      }

      if (precisionDesktop || precisionMobile) {
          const initialVal = precisionDesktop ? precisionDesktop.value : (precisionMobile ? precisionMobile.value : '2');
          window.precision = parseInt(initialVal, 10);
      } else {
          window.precision = 2;
      }
  })();
  