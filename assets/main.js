// Sri Laxmi Distributor — small progressive enhancements
(function () {
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Mobile menu
  const toggle = $('.nav-toggle'), links = $('#nav-links');
  if (toggle) toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  } else $$('.reveal').forEach((el) => el.classList.add('in'));

  // Hero card fan
  const fan = $('[data-fan]');
  if (fan) {
    const cards = $$('.fan-card', fan), dots = $$('[data-dot]'), n = cards.length;
    const title = $('[data-fan-title]'), text = $('[data-fan-text]'), cta = $('[data-fan-cta]');
    let active = 0, timer;
    const show = (i) => {
      active = (i + n) % n;
      cards.forEach((c, k) => { let d = (k - active + n) % n; if (d > n / 2) d -= n; c.dataset.pos = d; c.tabIndex = d === 0 ? 0 : -1; });
      const c = cards[active];
      title.textContent = c.dataset.title; text.textContent = c.dataset.text;
      cta.firstChild.textContent = c.dataset.cta + ' '; cta.href = c.href;
      dots.forEach((d, k) => d.classList.toggle('on', k === active));
    };
    const play = () => { stop(); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => show(active + 1), 4500); };
    const stop = () => clearInterval(timer);
    cards.forEach((c, k) => c.addEventListener('click', (e) => { if (k !== active) { e.preventDefault(); show(k); play(); } }));
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); play(); }));
    fan.addEventListener('mouseenter', stop); fan.addEventListener('mouseleave', play);
    let x0 = null;
    fan.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    fan.addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { show(active + (dx < 0 ? 1 : -1)); play(); } x0 = null; });
    show(0); play();
  }

  // Product filter (products.html?q=…)
  const filter = $('#filter');
  if (filter) {
    const items = $$('[data-filter]'), empty = $('#empty');
    const run = () => {
      const words = filter.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      let shown = 0;
      items.forEach((el) => { const ok = words.every((w) => el.dataset.filter.includes(w)); el.hidden = !ok; if (ok) shown++; });
      empty.hidden = shown > 0;
    };
    filter.value = new URLSearchParams(location.search).get('q') || '';
    filter.addEventListener('input', run); run();
  }

  // Catalogue → PDF
  $$('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));

  // Quote form → WhatsApp / email (no data is stored on the site)
  const form = $('#quote');
  if (form) {
    const compose = () => {
      const f = new FormData(form), cats = f.getAll('cat');
      return ['New bulk quote request', `Name: ${f.get('name')}`, f.get('business') && `Business: ${f.get('business')}`, `Phone: ${f.get('phone')}`, `City: ${f.get('city')}`,
        cats.length && `Categories: ${cats.join(', ')}`, f.get('volume') && `Monthly volume: ${f.get('volume')}`, f.get('message') && `Message: ${f.get('message')}`].filter(Boolean).join('\n');
    };
    const valid = () => { const ok = ['name', 'phone', 'city'].every((k) => form.elements[k].value.trim()); $('.form-err', form).hidden = ok; return ok; };
    form.addEventListener('submit', (e) => { e.preventDefault(); if (valid()) window.open(`https://wa.me/${window.SLD.wa}?text=${encodeURIComponent(compose())}`, '_blank', 'noopener'); });
    const mail = $('[data-mailto]', form);
    mail.addEventListener('click', (e) => { if (!valid()) return e.preventDefault(); mail.href = `${mail.href.split('?')[0]}?subject=${encodeURIComponent('Bulk quote request')}&body=${encodeURIComponent(compose())}`; });
  }
})();
