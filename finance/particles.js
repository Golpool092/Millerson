(function () {
'use strict';

var progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = height > 0 ? (scrollTop / height * 100) + '%' : '0%';
    }, { passive: true });
}

var banner = document.getElementById('cookieBanner');
var acceptBtn = document.getElementById('acceptCookies');
if (banner && acceptBtn) {
    if (!localStorage.getItem('cookieAccepted')) banner.style.display = 'block';
    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookieAccepted', 'true');
        banner.style.display = 'none';
    });
}

document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
        var item = q.parentElement;
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (o) { o.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
    });
});

var canvas = document.createElement('canvas');
canvas.id = 'moneyCanvas';
document.body.insertBefore(canvas, document.body.firstChild);

var ctx = canvas.getContext('2d');
var W, H;
var particles = [];
var symbols = ['₽', '$', '€', '¥', '%', '₿', '£', '◈'];

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize, { passive: true });

function randomColor(dark) {
    var colors = dark
        ? ['rgba(34,197,94,', 'rgba(74,222,128,', 'rgba(249,115,22,', 'rgba(22,163,74,']
        : ['rgba(22,163,74,', 'rgba(34,197,94,', 'rgba(249,115,22,', 'rgba(16,122,50,'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function Particle() {
    this.reset();
}
Particle.prototype.reset = function () {
    this.x = Math.random() * W;
    this.y = H + 20;
    this.size = 10 + Math.random() * 14;
    this.speed = 0.3 + Math.random() * 0.7;
    this.drift = (Math.random() - 0.5) * 0.4;
    this.opacity = 0.08 + Math.random() * 0.18;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
    this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
    this.dark = document.body.classList.contains('dark-theme');
    this.color = randomColor(this.dark);
};
Particle.prototype.update = function () {
    this.y -= this.speed;
    this.x += this.drift;
    this.rotation += this.rotSpeed;
    if (this.y < -30) this.reset();
};
Particle.prototype.draw = function () {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color + '1)';
    ctx.font = 'bold ' + this.size + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.symbol, 0, 0);
    ctx.restore();
};

var MAX = 40;
for (var i = 0; i < MAX; i++) {
    var p = new Particle();
    p.y = Math.random() * H;
    particles.push(p);
}

function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function (p) { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var target = document.getElementById(btn.dataset.copy);
        if (!target) return;
        navigator.clipboard.writeText(target.textContent).then(function () {
            var orig = btn.textContent;
            btn.textContent = 'Скопировано!';
            setTimeout(function () { btn.textContent = orig; }, 1800);
        });
    });
});

window.animateValue = function (el, start, end, duration, fmt) {
    if (!el) return;
    var range = end - start;
    var startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = (fmt || function (v) { return Math.round(v).toLocaleString('ru-RU'); })(start + range * ease);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
};

})();
