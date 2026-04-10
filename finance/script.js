document.addEventListener('DOMContentLoaded', function() {
    var scrollProgress = document.querySelector('.scroll-progress');
    var backToTop = document.getElementById('back-to-top');
    
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgress.style.width = (height > 0 ? (winScroll / height) * 100 : 0) + '%';
        });
    }
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        });
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        var question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                var isActive = item.classList.contains('active');
                faqItems.forEach(function(otherItem) { otherItem.classList.remove('active'); });
                if (!isActive) item.classList.add('active');
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
});
