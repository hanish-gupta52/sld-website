// Static site generator for Sri Laxmi Distributor.
// Usage: node build.js   → writes the finished site to ./public
const fs = require('fs');
const path = require('path');
const D = require('./data/site.js');
const posts = require('./data/blog.js');
const { company: C, categories: CATS } = D;

const OUT = path.join(__dirname, 'public');
const SRC_ASSETS = path.join(__dirname, 'assets');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const wa = (text) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`;
const WA_DEFAULT = wa('Hello Sri Laxmi Distributor, I would like a bulk quote.');
const allProducts = CATS.flatMap((c) => c.products.map((p) => ({ ...p, cat: c })));
const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

// ── Icons ────────────────────────────────────────────────────
const I = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="M9 6l6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  wa: '<path d="M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.9-1L4 20z"/><path d="M9 9.5c0 3 2.5 5.5 5.500 5.500l1-1.500-2-1-0.800 0.800c-1-0.500-1.800-1.300-2.300-2.300l0.800-0.800-1-2L9 9.500z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12.500l4.500 4.500L19 7.500"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"/>',
  shield: '<path d="M12 3l8 3v6c0 4.500-3.200 8-8 9-4.800-1-8-4.500-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.500" r="1.800"/><circle cx="17.500" cy="17.500" r="1.800"/>',
  menu: '<path d="M6 3v8a2 2 0 004 0V3M8 11v10M17 3c-2 2-3 4.500-3 7.500h3V21"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
  repeat: '<path d="M4 11V9a3 3 0 013-3h11l-3-3M20 13v2a3 3 0 01-3 3H6l3 3"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="8" cy="8" r="1.500"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="M8.500 14L7 21l5-2.500L17 21l-1.500-7"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
  chat: '<path d="M4 5h16v11H9l-5 4V5z"/>',
  star: '<path d="M12 3l2.700 5.700 6.300 0.800-4.600 4.300 1.200 6.200L12 17l-5.600 3 1.200-6.200L3 9.500l6.300-0.800L12 3z"/>',
  store: '<path d="M4 9l1.500-5h13L20 9M4 9v11h16V9M4 9a2.700 2.700 0 005.300 0 2.700 2.700 0 005.400 0A2.700 2.700 0 0020 9M10 20v-6h4v6"/>',
  bed: '<path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5M7 11.500a1.500 1.500 0 100-3 1.500 1.500 0 000 3z"/>',
  users: '<circle cx="9" cy="8" r="3.500"/><path d="M2.500 20c0-3.600 2.900-6 6.500-6s6.500 2.400 6.500 6M16 4.500a3.500 3.500 0 010 7M18 14c2.200 0.700 3.500 2.700 3.500 6"/>',
};
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n].replace(/(\d)\.(\d)00/g, '$1.$2')}</svg>`;
const starRow = `<span class="stars" aria-label="5 out of 5 stars">${'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.7 5.7 6.3.8-4.600 4.300 1.200 6.200L12 17l-5.600 3 1.200-6.200L3 9.500l6.300-.8L12 3z"/></svg>'.repeat(5)}</span>`;

// ── Product illustrations (swap for photos: drop assets/img/<slug>.jpg) ──
const ARTS = {
  plate: `<ellipse cx="100" cy="176" rx="62" ry="8" fill="#000" opacity=".08"/><circle cx="100" cy="100" r="72" fill="#f6efe0"/><circle cx="100" cy="100" r="72" fill="none" stroke="#e3d6bb" stroke-width="3"/><circle cx="100" cy="100" r="52" fill="#efe5cf"/><path d="M100 48v104M100 100h52" stroke="#e0d2b4" stroke-width="5" stroke-linecap="round"/><path d="M62 92c0-16 9-25 27-25 0 18-9 27-25 27" fill="#5fae6b"/><path d="M62 94c6-9 12-15 20-19" stroke="#2f7d43" stroke-width="2.500" fill="none" stroke-linecap="round"/>`,
  cup: `<ellipse cx="100" cy="178" rx="46" ry="7" fill="#000" opacity=".08"/><path d="M60 62h80l-10 112H70L60 62z" fill="#fff"/><path d="M63 92h74l-4.500 46H67.500L63 92z" fill="#c9a06a"/><path d="M75 92l3 46M90 92l1.500 46M110 92l-1.500 46M125 92l-3 46" stroke="#b08850" stroke-width="2"/><rect x="54" y="50" width="92" height="14" rx="7" fill="#2b2f36"/><path d="M68 50c2-9 8-13 32-13s30 4 32 13" fill="#3a3f48"/><rect x="92" y="40" width="20" height="5" rx="2.500" fill="#1c1f24"/><path d="M92 20c-6 5 6 8 0 14M108 16c-6 5 6 8 0 14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>`,
  box: `<ellipse cx="100" cy="178" rx="66" ry="7" fill="#000" opacity=".08"/><path d="M30 88h84v86H30z" fill="#c89b62"/><path d="M30 88l12-26h60l12 26z" fill="#dbb27c"/><path d="M42 62l8-12h44l8 12z" fill="#b98a52"/><path d="M30 88h84" stroke="#a97c46" stroke-width="2"/><circle cx="72" cy="130" r="16" fill="none" stroke="#a97c46" stroke-width="3"/><path d="M65 130l5 5 9-10" stroke="#a97c46" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M124 78h46v96h-46z" fill="#d9b481"/><path d="M124 78l8-10h30l8 10z" fill="#c59a62"/><path d="M136 68c0-22 22-22 22 0" stroke="#8a6436" stroke-width="3" fill="none"/><path d="M134 108h26M134 120h18" stroke="#b98a52" stroke-width="3" stroke-linecap="round"/>`,
  container: `<ellipse cx="100" cy="176" rx="64" ry="7" fill="#000" opacity=".08"/><path d="M38 86h124l-10 82a8 8 0 01-8 6H56a8 8 0 01-8-6L38 86z" fill="#fff" opacity=".75"/><path d="M38 86h124l-10 82a8 8 0 01-8 6H56a8 8 0 01-8-6L38 86z" fill="none" stroke="#9ec3e6" stroke-width="3"/><path d="M47 120h106l-5 46a6 6 0 01-6 5H58a6 6 0 01-6-5l-5-46z" fill="#f4b860"/><circle cx="78" cy="140" r="7" fill="#e58f3a"/><circle cx="112" cy="150" r="8" fill="#e58f3a"/><circle cx="130" cy="134" r="5" fill="#7fbf6a"/><rect x="28" y="70" width="144" height="18" rx="9" fill="#e9f3fc" stroke="#9ec3e6" stroke-width="3"/><rect x="76" y="58" width="48" height="12" rx="6" fill="#cfe4f7"/>`,
  tissue: `<ellipse cx="100" cy="178" rx="68" ry="7" fill="#000" opacity=".08"/><rect x="24" y="104" width="96" height="68" rx="10" fill="#f7b7c3"/><rect x="24" y="104" width="96" height="20" rx="10" fill="#f39aab"/><ellipse cx="72" cy="112" rx="24" ry="5" fill="#b85f73"/><path d="M52 110c2-30 10-44 20-52 8 12 18 22 20 52z" fill="#fff"/><path d="M62 104c1-18 5-28 10-36" stroke="#eadfe2" stroke-width="2" fill="none"/><ellipse cx="150" cy="96" rx="24" ry="10" fill="#fff"/><path d="M126 96v64c0 6 11 10 24 10s24-4 24-10V96" fill="#fff"/><path d="M126 96v64c0 6 11 10 24 10s24-4 24-10V96" fill="none" stroke="#e6dfe1" stroke-width="2"/><ellipse cx="150" cy="96" rx="24" ry="10" fill="none" stroke="#e6dfe1" stroke-width="2"/><ellipse cx="150" cy="96" rx="8" ry="3.500" fill="#cdbfa9"/>`,
  foil: `<defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4f6f8"/><stop offset=".5" stop-color="#c3cad3"/><stop offset="1" stop-color="#eef1f4"/></linearGradient></defs><ellipse cx="100" cy="178" rx="72" ry="7" fill="#000" opacity=".08"/><path d="M22 96h156l-16 70a8 8 0 01-8 6H46a8 8 0 01-8-6L22 96z" fill="url(#fg)"/><path d="M40 100l10 68M58 100l7 68M78 100l4 68M100 100v68M122 100l-4 68M142 100l-7 68M160 100l-10 68" stroke="#aab2bd" stroke-width="2"/><rect x="14" y="84" width="172" height="16" rx="8" fill="#e3e7ec" stroke="#aab2bd" stroke-width="2"/><path d="M34 84c8-22 28-34 66-34s58 12 66 34z" fill="#f2c15d"/><circle cx="76" cy="70" r="5" fill="#d98a2b"/><circle cx="104" cy="62" r="6" fill="#d98a2b"/><circle cx="128" cy="72" r="5" fill="#8fbf5f"/><path d="M88 34c-5 5 5 8 0 13M112 30c-5 5 5 8 0 13" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9"/>`,
  spray: `<ellipse cx="100" cy="178" rx="66" ry="7" fill="#000" opacity=".08"/><path d="M52 92c0-10 6-16 14-18V58h24v16c8 2 14 8 14 18v72a8 8 0 01-8 8H60a8 8 0 01-8-8V92z" fill="#4fb38a"/><rect x="60" y="108" width="36" height="34" rx="6" fill="#fff" opacity=".9"/><path d="M70 126l6 6 12-13" stroke="#2f8f68" stroke-width="3.500" fill="none" stroke-linecap="round"/><path d="M60 40h40l10 10v8H60z" fill="#22303a"/><path d="M60 46H44v10" stroke="#22303a" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="126" cy="38" r="3" fill="#8fd3f4"/><circle cx="138" cy="48" r="3" fill="#8fd3f4"/><circle cx="136" cy="30" r="2.500" fill="#8fd3f4"/><path d="M120 120h56l-6 48a6 6 0 01-6 5h-32a6 6 0 01-6-5l-6-48z" fill="#f2c94c"/><path d="M124 120c0-22 48-22 48 0" stroke="#22303a" stroke-width="4" fill="none"/><path d="M122 134h52" stroke="#d9ae2f" stroke-width="3"/>`,
};
let artId = 0;
const artSvg = (kind, alt) => {
  const uid = 'fg' + (++artId); // keep gradient ids unique per page
  return `<svg class="art" viewBox="0 0 200 200" role="img" aria-label="${esc(alt)}">${ARTS[kind].replace(/(\d)\.(\d)00/g, '$1.$2').replace(/fg\b/g, uid)}</svg>`;
};
// If a photo exists at assets/img/<slug>.(jpg|png|webp) it replaces the illustration.
const visual = (p, slug, kind, alt) => {
  for (const ext of ['jpg', 'png', 'webp']) {
    if (fs.existsSync(path.join(SRC_ASSETS, 'img', `${slug}.${ext}`))) return `<img class="photo" src="${p}assets/img/${slug}.${ext}" alt="${esc(alt)}" loading="lazy">`;
  }
  return artSvg(kind, alt);
};

// ── Layout ───────────────────────────────────────────────────
const logo = (p) => `<a class="logo" href="${p}index.html" aria-label="${C.name} – home"><span class="logo-mark">SLD</span><span class="logo-text">Sri Laxmi <b>Distributor</b></span></a>`;

const NAV = [['products.html', 'Products'], ['catalogue.html', 'Catalogue'], ['about.html', 'About us'], ['blog.html', 'Blog'], ['contact.html', 'Contact']];

const header = (p, active) => `
<header class="nav-wrap">
  <nav class="nav" aria-label="Main">
    ${logo(p)}
    <ul class="nav-links" id="nav-links">
      ${NAV.map(([h, t]) => `<li><a href="${p}${h}"${active === h ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}
      <li class="nav-only-mobile"><a href="${WA_DEFAULT}" target="_blank" rel="noopener">WhatsApp us</a></li>
    </ul>
    <div class="nav-actions">
      <a class="btn btn-dark btn-sm" href="${p}contact.html#quote">Get a quote</a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>
    </div>
  </nav>
</header>`;

const searchLink = (p, s) => {
  const k = s.toLowerCase();
  const map = [['bagasse|sugarcane|compostable|plates|clamshell|meal tray', 'bagasse-tableware'], ['cup', 'paper-cups'], ['kraft|burger|wooden|cloud kitchen', 'kraft-packaging'], ['foil|freshwrapp|biryani|catering', 'aluminium-foil'], ['tissue|napkin', 'tissue-napkins'], ['housekeeping|garbage', 'housekeeping-material'], ['pp |container|microwave', 'pp-plastic-containers']];
  const hit = map.find(([re]) => new RegExp(re).test(k));
  return `${p}${hit ? `products/${hit[1]}.html` : 'products.html'}`;
};

const footer = (p) => `
<section class="cta-band">
  <div class="wrap">
    <div class="cta-card">
      <p class="eyebrow">Bulk orders · Retail packs</p>
      <h2>Ready for your<br>next order?</h2>
      <p class="lead">Send us your list today. You will have item-wise pricing within 24 hours and delivery at your doorstep.</p>
      <div class="btn-row">
        <a class="btn btn-dark" href="${p}contact.html#quote">Get a bulk quote ${icon('arrow')}</a>
        <a class="btn btn-wa" href="${WA_DEFAULT}" target="_blank" rel="noopener">${icon('wa')} WhatsApp us</a>
        <a class="btn btn-ghost" href="${p}catalogue.html">${icon('download')} Download catalogue</a>
      </div>
      <ul class="trust-row">
        <li>${icon('box')}<span><b>2,000+ products</b>In stock</span></li>
        <li>${icon('truck')}<span><b>Doorstep delivery</b>Telangana &amp; AP</span></li>
        <li>${icon('doc')}<span><b>One GST invoice</b>Any mix of items</span></li>
        <li>${icon('badge')}<span><b>Authorised</b>Freshwrapp distributor</span></li>
      </ul>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        ${logo(p)}
        <p>Wholesale and retail distributor of eco-friendly food packaging and housekeeping material. Serving restaurants, cloud kitchens, caterers, hotels, sweet shops, bakeries, offices and retailers from Hyderabad since ${C.founded}.</p>
        <a class="btn btn-light" href="${p}contact.html#quote">Get a quote ${icon('arrow')}</a>
      </div>
      <div class="bracket"><p>One supplier for <em>every pack</em><br>your kitchen needs.</p></div>
    </div>
    <div class="footer-cols">
      <div><h3>Products</h3><ul>${CATS.map((c) => `<li><a href="${p}products/${c.slug}.html">${c.nav}</a></li>`).join('')}</ul></div>
      <div><h3>Company</h3><ul>
        <li><a href="${p}about.html">About us</a></li><li><a href="${p}products.html">All products</a></li>
        <li><a href="${p}catalogue.html">Catalogue</a></li><li><a href="${p}blog.html">Blog</a></li>
        <li><a href="${p}index.html#faq">FAQs</a></li><li><a href="${p}contact.html">Contact</a></li></ul></div>
      <div><h3>Contact</h3><ul class="contact-list">
        <li>${icon('phone')}<a href="tel:${C.phoneDial}">${C.phoneDisplay}</a></li>
        <li>${icon('wa')}<a href="${WA_DEFAULT}" target="_blank" rel="noopener">WhatsApp</a></li>
        ${C.email ? `<li>${icon('mail')}<a href="mailto:${C.email}">${C.email}</a></li>` : ''}
        <li>${icon('pin')}<span>${C.addressLines.slice(1).join(', ')}</span></li>
        <li>${icon('clock')}<span>${C.hours}</span></li></ul></div>
      <div><h3>Areas served</h3>
        ${Object.entries(D.areas).map(([st, cities]) => `<p class="areas"><b>${st}:</b> ${cities.join(', ')}</p>`).join('')}</div>
    </div>
    <div class="searches">
      <h3>Popular searches</h3>
      <p>${D.popularSearches.map((s) => `<a href="${searchLink(p, s)}">${s}</a>`).join('')}</p>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${C.name.toUpperCase()}</span><span>Managing Director: ${C.md}</span><span>Hyderabad, Telangana</span>
    </div>
  </div>
  <div class="wordmark" aria-hidden="true">Sri Laxmi</div>
</footer>
<a class="wa-float" href="${WA_DEFAULT}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('wa')}</a>`;

const page = ({ file, title, desc, body, active, ld = [], cls = '' }) => {
  const depth = file.split('/').length - 1;
  const p = '../'.repeat(depth);
  const url = `${C.siteUrl}/${file === 'index.html' ? '' : file}`;
  const org = { '@context': 'https://schema.org', '@type': 'Organization', name: C.name, url: C.siteUrl, areaServed: ['Telangana', 'Andhra Pradesh'], founder: C.md };
  const html = `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${C.name}">
<meta name="theme-color" content="#0c1d16">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%230c1d16'/%3E%3Cpath d='M18 44c0-16 9-25 28-25 0 18-9 28-25 28' fill='%23c9f26b'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Figtree:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p}assets/style.css">
${[org, ...ld].map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}
</head>
<body class="${cls}">
<a class="skip" href="#main">Skip to content</a>
${header(p, active)}
<main id="main">
${body(p)}
</main>
${footer(p)}
<script>window.SLD={wa:"${C.whatsapp}"};</script>
<script src="${p}assets/main.js" defer></script>
</body>
</html>`;
  const dest = path.join(OUT, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
  return file;
};

// ── Shared blocks ────────────────────────────────────────────
const crumbs = (p, trail) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${p}index.html">Home</a>${trail.map(([h, t]) => (h ? `<span>/</span><a href="${p}${h}">${t}</a>` : `<span>/</span><span aria-current="page">${t}</span>`)).join('')}</nav>`;

const pageHero = (p, { eyebrow, h1, lead, trail, extra = '' }) => `
<section class="page-hero">
  <div class="wrap">
    ${crumbs(p, trail)}
    <span class="chip"><i></i>${eyebrow}</span>
    <h1>${h1}</h1>
    <p class="lead">${lead}</p>
    ${extra}
  </div>
</section>`;

const catCard = (p, c) => `
<a class="dest tone-${c.tone}" href="${p}products/${c.slug}.html">
  ${visual(p, c.slug, c.art, `${c.name} – wholesale and retail supplier in Hyderabad`)}
  <span class="dest-label"><b>${c.name}</b><small>${c.products.length}+ popular items</small></span>
  <span class="dest-go">${icon('arrow')}</span>
</a>`;

const prodCard = (p, pr) => `
<a class="pcard" href="${p}products/${pr.slug}.html">
  <span class="pcard-art tone-${pr.cat.tone}">${visual(p, pr.slug, pr.cat.art, `${pr.name} – ${pr.cat.name} wholesale Hyderabad`)}</span>
  <span class="pcard-body"><small>${pr.cat.name}</small><b>${pr.name}</b><span>${pr.desc}</span><em>View details ${icon('arrow')}</em></span>
</a>`;

const faqBlock = (faqs) => `<div class="faq">${faqs.map((f, i) => `
  <details${i === 0 ? ' open' : ''}><summary><span class="num">${String(i + 1).padStart(2, '0')}</span><span class="q">${f.q}</span>${icon('chev', 'chev')}</summary><div class="a"><p>${f.a}</p></div></details>`).join('')}</div>`;

const stepsBlock = () => `
<section class="steps">
  <div class="wrap">
    <p class="eyebrow light">How ordering works</p>
    <h2>From list to delivery<br><span>in 4 simple steps</span></h2>
    <p class="lead">No account to create, no app to install. A message is enough.</p>
    <p class="scribble">One supplier,<br>one invoice</p>
    <ol class="step-grid">
      ${D.steps.map((s, i) => `<li class="glass reveal"><span class="step-n">${i + 1}</span><h3>${s.t}</h3><p>${s.d}</p></li>`).join('')}
    </ol>
    <div class="steps-bar">
      <span class="bar-ic">${icon('doc')}</span>
      <div><b>No second supplier. No surprise charges.</b><span>Item-wise pricing on a single GST invoice, for any mix of categories.</span></div>
      <a class="btn btn-light btn-sm" href="${WA_DEFAULT}" target="_blank" rel="noopener">${icon('wa')} Start on WhatsApp</a>
    </div>
  </div>
</section>`;

const marquee = (a, b, c) => `<div class="marquee" aria-hidden="true"><div>${`<span>${a}</span><span class="out">${b}</span><span>${c}</span><span class="out">${b}</span>`.repeat(4)}</div></div>`;

// ── Pages ────────────────────────────────────────────────────
const built = [];

// HOME
built.push(page({
  file: 'index.html', active: '', cls: 'home',
  title: 'Wholesale Food Packaging Hyderabad | Sri Laxmi Distributor (SLD)',
  desc: 'Sri Laxmi Distributor – wholesale and retail food packaging in Hyderabad. Bagasse plates, paper cups, kraft boxes, Freshwrapp foil, PP containers, tissue and housekeeping. Doorstep delivery across Telangana & AP.',
  ld: [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: D.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }],
  body: (p) => `
<section class="hero">
  <div class="wrap hero-inner">
    <span class="chip"><i></i>Wholesale &amp; retail · Hyderabad · Since ${C.founded}</span>
    <h1>Bulk food packaging.<br>One supplier.<br>Doorstep delivery.</h1>
    <p class="lead">Eco-friendly packaging and housekeeping material for restaurants, caterers, hotels and retailers across Telangana and Andhra Pradesh.</p>
    <ul class="hero-points">
      <li>${icon('bolt')}Quote within 24 hours</li><li>${icon('box')}2,000+ products</li><li>${icon('shield')}Authorised Freshwrapp distributor</li>
    </ul>
    <form class="search" action="${p}products.html" method="get" role="search">
      <label>${icon('search')}<input type="search" name="q" placeholder="What do you need? e.g. biryani container" aria-label="Search products"></label>
      <button class="btn btn-dark" type="submit">Search ${icon('arrow')}</button>
    </form>
    <div class="quick">
      ${CATS.slice(0, 4).map((c) => `<a href="${p}products/${c.slug}.html"><span class="dot tone-${c.tone}"></span>${c.name.replace(' (Freshwrapp)', '')}</a>`).join('')}
      <a href="${p}products.html">${icon('box')}View all</a>
    </div>
  </div>
  <div class="fan" data-fan aria-roledescription="carousel" aria-label="What we offer">
    ${D.heroSlides.map((s, i) => { const c = CATS.find((x) => x.slug === s.cat); const pos = [0, 1, 2, -2, -1][i]; return `
    <a class="fan-card tone-${c.tone}" href="${p}${s.href}" data-i="${i}" data-pos="${pos}" data-title="${esc(s.title)}" data-text="${esc(s.text)}" data-cta="${esc(s.cta)}">
      ${artSvg(c.art, `${s.tag} – ${c.name}`)}
      <span class="fan-label"><b>${s.tag}</b><small>${c.name.replace(' (Freshwrapp)', '')}</small></span>
    </a>`; }).join('')}
  </div>
  <div class="fan-caption wrap" aria-live="polite">
    <h2 data-fan-title>${D.heroSlides[0].title}</h2>
    <p data-fan-text>${D.heroSlides[0].text}</p>
    <a class="link-arrow" data-fan-cta href="${p}${D.heroSlides[0].href}">${D.heroSlides[0].cta} ${icon('arrow')}</a>
    <div class="fan-dots">${D.heroSlides.map((s, i) => `<button data-dot="${i}" aria-label="${esc(s.tag)}"${i === 0 ? ' class="on"' : ''}></button>`).join('')}</div>
  </div>
</section>

<section class="about-band">
  <div class="wrap center">
    <p class="eyebrow">About Sri Laxmi Distributor</p>
    <h2 class="display">Your packaging partner<br>starts here</h2>
    <p class="lead narrow">For over 24 years, Sri Laxmi Distributor has supplied Hyderabad's kitchens with the packaging they rely on every day. Led by Managing Director ${C.md}, we stock more than 2,000 products across seven categories and deliver them to over 5,000 customers in two states — at wholesale and retail prices, on one invoice.</p>
    <div class="btn-row center">
      <a class="btn btn-white" href="${p}catalogue.html">${icon('download')} Download catalogue</a>
      <a class="btn btn-white" href="${p}about.html">About us ${icon('arrow')}</a>
    </div>
    <div class="stats">${D.stats.map((s) => `<div class="stat reveal"><b>${s.n}</b><span>${s.l}</span></div>`).join('')}</div>
    <div class="who-grid">
      <a class="who" href="${p}products/kraft-packaging.html"><span class="who-ic">${icon('store')}</span><span><b>Restaurants &amp; cloud kitchens</b><small>Delivery-ready bowls, boxes and bags.</small></span>${icon('chev')}</a>
      <a class="who" href="${p}products/aluminium-foil.html"><span class="who-ic">${icon('users')}</span><span><b>Caterers &amp; events</b><small>Foil trays, plates and cups in volume.</small></span>${icon('chev')}</a>
      <a class="who" href="${p}products/housekeeping-material.html"><span class="who-ic">${icon('bed')}</span><span><b>Hotels &amp; offices</b><small>Tissue, housekeeping and pantry supplies.</small></span>${icon('chev')}</a>
      <a class="who" href="${p}products/pp-plastic-containers.html"><span class="who-ic">${icon('tag')}</span><span><b>Retailers, bakeries &amp; sweet shops</b><small>Retail packs at wholesale rates.</small></span>${icon('chev')}</a>
    </div>
    <ul class="pill-row"><li>${icon('check')}Wholesale &amp; retail</li><li>${icon('check')}GST invoice</li><li>${icon('check')}Samples available</li><li>${icon('check')}5★ rated by customers</li></ul>
  </div>
</section>

<section class="cats" id="categories">
  <div class="wrap">
    <div class="sec-head"><div><p class="eyebrow">Product categories</p><h2>Choose your category</h2><p class="lead">Seven ranges, one delivery. Tap a category to see sizes, materials and uses.</p></div>
      <a class="btn btn-outline" href="${p}products.html">View all products ${icon('arrow')}</a></div>
  </div>
  <div class="dest-row">${CATS.map((c) => catCard(p, c)).join('')}</div>
</section>

${marquee('Wholesale · Retail · Delivered', '2,000+ products', 'Telangana · Andhra Pradesh')}
${stepsBlock()}

<section class="approach">
  <div class="wrap">
    <div class="split">
      <div><p class="eyebrow">Our approach</p><h2>Advice first.<br>Cartons second.</h2>
        <p class="lead">Good packaging is chosen for the dish, not the other way round. This is how we work with every customer.</p>
        <a class="btn btn-dark" href="${WA_DEFAULT}" target="_blank" rel="noopener">${icon('wa')} Ask for a recommendation</a></div>
      <div class="stack-type" aria-hidden="true"><span>More</span><span class="serif">choice</span><span>&amp; better</span><span class="hand">advice</span></div>
    </div>
    <div class="feat-grid three">${D.approach.map((a) => `<article class="feat reveal"><span class="feat-ic">${icon(a.icon)}</span><h3>${a.t}</h3><p>${a.d}</p></article>`).join('')}</div>
  </div>
</section>

<section class="voices">
  <div class="wrap">
    <div class="center"><p class="eyebrow">Client testimonials</p><h2>Trusted by kitchens,<br>caterers and counters</h2>
      <p class="lead narrow">5,000+ customers across Telangana and Andhra Pradesh buy from SLD.</p></div>
    <div class="voice-grid">${D.testimonials.map((t) => `<figure class="voice reveal">${starRow}<blockquote>“${t.q}”</blockquote><figcaption><b>${t.who}</b><span>${t.where}</span></figcaption></figure>`).join('')}</div>
    <div class="btn-row center"><a class="btn btn-dark" href="${p}contact.html#quote">Join them – get a quote ${icon('arrow')}</a></div>
  </div>
</section>

<section class="faq-sec" id="faq">
  <div class="wrap narrow-wrap">
    <div class="center"><p class="eyebrow">Support</p><h2>Frequently asked<br>questions</h2>
      <p class="lead narrow">Quick answers on minimum orders, delivery, samples and billing. Still unsure? Call or WhatsApp us ${C.hours}.</p></div>
    ${faqBlock(D.faqs)}
    <div class="btn-row"><a class="btn btn-outline" href="${p}contact.html">Ask us anything ${icon('arrow')}</a></div>
  </div>
</section>`,
}));

// ABOUT
built.push(page({
  file: 'about.html', active: 'about.html',
  title: 'About Sri Laxmi Distributor | 24+ Years of Packaging Supply in Hyderabad',
  desc: 'Meet Sri Laxmi Distributor (SLD), Hyderabad – a wholesale and retail packaging distributor led by G. Mahendra, serving 5,000+ customers across Telangana and Andhra Pradesh for 24+ years.',
  body: (p) => `
${pageHero(p, { eyebrow: 'About us', h1: 'Hyderabad\'s packaging partner<br>for 24+ years', lead: 'A family-run distributor that grew with the city\'s food businesses — one carton, one customer and one honest recommendation at a time.', trail: [[null, 'About us']] })}
<section class="sec">
  <div class="wrap split">
    <div class="prose">
      <p class="eyebrow">Our story</p><h2>Built on repeat orders</h2>
      <p>Sri Laxmi Distributor began in Hyderabad as a small supplier of disposable packaging to nearby eateries, sweet shops and stores. The idea was simple: keep the right stock, charge a fair price and deliver when promised.</p>
      <p>That idea has not changed. What has changed is the scale. Today we stock more than 2,000 products across seven categories — from bagasse plates and paper cups to Freshwrapp aluminium foil and housekeeping material — and serve over 5,000 customers across Telangana and Andhra Pradesh.</p>
      <p>Most of our business comes from customers who order again. We take that as the clearest measure of whether we are doing the job properly.</p>
      <div class="btn-row"><a class="btn btn-dark" href="${p}products.html">See what we stock ${icon('arrow')}</a></div>
    </div>
    <div class="stats col">${D.stats.map((s) => `<div class="stat"><b>${s.n}</b><span>${s.l}</span></div>`).join('')}</div>
  </div>
</section>
<section class="sec tint">
  <div class="wrap">
    <div class="center"><p class="eyebrow">Our history</p><h2>How we got here</h2></div>
    <ol class="timeline">${D.timeline.map((t) => `<li class="reveal"><span class="t-y">${t.y}</span><h3>${t.t}</h3><p>${t.d}</p></li>`).join('')}</ol>
    <div class="btn-row center"><a class="btn btn-outline" href="${p}catalogue.html">${icon('download')} Download catalogue</a></div>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="md-card">
      <div class="md-photo" aria-hidden="true"><span>GM</span></div>
      <div>
        <p class="eyebrow">Managing Director</p><h2>${C.md}</h2>
        <p>${C.md} has led Sri Laxmi Distributor through more than two decades of change in the packaging trade — from the early days of basic disposables to today's eco-first ranges. He remains closely involved in purchasing and customer relationships, and many long-standing customers still deal with him directly.</p>
        <blockquote>“Our customers do not need a salesman. They need someone who knows which container will hold their gravy and will have it in stock next month as well. If we get that right, everything else follows.”</blockquote>
        <p class="sign">${C.md}<small>Managing Director, ${C.name}</small></p>
        <a class="btn btn-wa" href="${WA_DEFAULT}" target="_blank" rel="noopener">${icon('wa')} Talk to our team</a>
      </div>
    </div>
  </div>
</section>
<section class="sec tint">
  <div class="wrap">
    <div class="vm">
      <article class="feat"><span class="feat-ic">${icon('leaf')}</span><h3>Our vision</h3><p>To be the most trusted packaging distributor in Telangana and Andhra Pradesh, and to make responsible, eco-friendly packaging the practical choice for every food business — large or small.</p></article>
      <article class="feat"><span class="feat-ic">${icon('check')}</span><h3>Our mission</h3><p>To supply the right product at a fair price, every time: a wide range kept in stock, honest advice on what suits each menu, clear billing and dependable doorstep delivery.</p></article>
    </div>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="center"><p class="eyebrow">Why choose us</p><h2>Six reasons customers stay</h2></div>
    <div class="feat-grid">${D.why.map((a) => `<article class="feat reveal"><span class="feat-ic">${icon(a.icon)}</span><h3>${a.t}</h3><p>${a.d}</p></article>`).join('')}</div>
    <div class="btn-row center"><a class="btn btn-dark" href="${p}contact.html#quote">Get a bulk quote ${icon('arrow')}</a></div>
  </div>
</section>`,
}));

// PRODUCTS
built.push(page({
  file: 'products.html', active: 'products.html',
  title: 'Food Packaging Products Wholesale & Retail | SLD Hyderabad',
  desc: 'Browse 7 categories of food packaging and housekeeping material: bagasse tableware, paper cups, kraft packaging, PP containers, tissue, Freshwrapp aluminium foil and cleaning supplies.',
  body: (p) => `
${pageHero(p, { eyebrow: 'Products', h1: 'Everything your kitchen<br>packs, serves and cleans with', lead: 'Seven categories and 2,000+ products, available in retail packs and wholesale cartons. Search below or pick a category.', trail: [[null, 'Products']],
    extra: `<form class="search" role="search" onsubmit="return false"><label>${icon('search')}<input type="search" id="filter" placeholder="Search products, e.g. 750 ml, ripple cup, napkin" aria-label="Filter products"></label></form>` })}
<section class="sec">
  <div class="wrap">
    <h2 class="h-sm">Categories</h2>
    <div class="cat-grid">${CATS.map((c) => `
      <a class="catbox" href="${p}products/${c.slug}.html" data-filter="${esc((c.name + ' ' + c.tagline + ' ' + c.sub.map((s) => s[0]).join(' ')).toLowerCase())}">
        <span class="catbox-art tone-${c.tone}">${visual(p, c.slug, c.art, `${c.name} wholesale in Hyderabad`)}</span>
        <span class="catbox-body"><b>${c.name}</b><span>${c.tagline}</span><small>${c.sub.map((s) => s[0]).join(' · ')}</small><em>Explore range ${icon('arrow')}</em></span>
      </a>`).join('')}</div>
    <h2 class="h-sm">Popular products</h2>
    <div class="pgrid">${allProducts.map((pr) => prodCard(p, pr).replace('<a class="pcard"', `<a class="pcard" data-filter="${esc((pr.name + ' ' + pr.cat.name + ' ' + pr.desc).toLowerCase())}"`)).join('')}</div>
    <p class="empty" id="empty" hidden>No match on this page — we very likely still stock it. <a href="${WA_DEFAULT}" target="_blank" rel="noopener">Ask us on WhatsApp</a>.</p>
    <div class="note">${icon('chat')}<p><b>Cannot see your item?</b> This site shows our most-requested products. Send us your list and we will quote for everything on it.</p><a class="btn btn-dark btn-sm" href="${p}contact.html#quote">Send your list</a></div>
  </div>
</section>`,
}));

// CATEGORY PAGES
CATS.forEach((c) => built.push(page({
  file: `products/${c.slug}.html`, active: 'products.html', title: c.metaTitle, desc: c.metaDesc,
  body: (p) => `
<section class="page-hero cat-hero">
  <div class="wrap split">
    <div>${crumbs(p, [['products.html', 'Products'], [null, c.name]])}
      <span class="chip"><i></i>${c.products.length}+ popular items · wholesale &amp; retail</span>
      <h1>${c.name}</h1><p class="lead">${c.intro}</p>
      <div class="btn-row"><a class="btn btn-dark" href="${wa(`Hello, I would like a quote for ${c.name}.`)}" target="_blank" rel="noopener">${icon('wa')} Get a quote</a><a class="btn btn-outline" href="${p}catalogue.html">${icon('download')} Catalogue</a></div></div>
    <div class="hero-art tone-${c.tone}">${visual(p, c.slug, c.art, `${c.name} – wholesale supplier in Hyderabad, Telangana`)}</div>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <p class="eyebrow">What's in the range</p><h2>Sub-ranges</h2>
    <div class="sub-grid">${c.sub.map(([t, d], i) => `<article class="sub reveal"><span class="num">${String(i + 1).padStart(2, '0')}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div>
  </div>
</section>
<section class="sec tint">
  <div class="wrap">
    <div class="sec-head"><div><p class="eyebrow">Popular products</p><h2>${c.name} in stock</h2></div></div>
    <div class="pgrid">${c.products.map((pr) => prodCard(p, { ...pr, cat: c })).join('')}</div>
  </div>
</section>
<section class="sec">
  <div class="wrap two">
    <div class="panel"><p class="eyebrow">Use cases</p><h2 class="h-sm">Who buys this range</h2><ul class="ticks">${c.uses.map((u) => `<li>${icon('check')}${u}</li>`).join('')}</ul></div>
    <div class="panel dark"><p class="eyebrow light">Buying guidance</p><h2 class="h-sm">How to choose</h2><ul class="ticks">${c.guide.map((u) => `<li>${icon('check')}${u}</li>`).join('')}</ul>
      <a class="btn btn-light btn-sm" href="${wa(`Hello, please help me choose the right ${c.name}.`)}" target="_blank" rel="noopener">${icon('wa')} Ask for advice</a></div>
  </div>
  <div class="wrap"><p class="seo-line">${c.seo}</p></div>
</section>`,
})));

// PRODUCT PAGES
allProducts.forEach((pr) => {
  const c = pr.cat;
  const related = [...c.products.filter((x) => x.slug !== pr.slug).map((x) => ({ ...x, cat: c })), ...allProducts.filter((x) => x.cat.slug !== c.slug)].slice(0, 3);
  built.push(page({
    file: `products/${pr.slug}.html`, active: 'products.html',
    title: `${pr.name} | Wholesale & Retail in Hyderabad – SLD`,
    desc: `${pr.desc} Available at wholesale and retail prices from Sri Laxmi Distributor, Hyderabad. Delivery across Telangana and Andhra Pradesh.`.slice(0, 300),
    ld: [{ '@context': 'https://schema.org', '@type': 'Product', name: pr.name, description: pr.desc, category: c.name, brand: { '@type': 'Brand', name: c.slug === 'aluminium-foil' ? 'Freshwrapp' : C.name } }],
    body: (p) => `
<section class="page-hero prod-hero">
  <div class="wrap">
    ${crumbs(p, [['products.html', 'Products'], [`products/${c.slug}.html`, c.name], [null, pr.name]])}
    <div class="split prod">
      <div class="hero-art tone-${c.tone}">${visual(p, pr.slug, c.art, `${pr.name} – ${c.name} wholesale and retail, Hyderabad`)}</div>
      <div>
        <span class="chip"><i></i>${c.name}</span>
        <h1>${pr.name}</h1>
        <p class="lead">${pr.desc}</p>
        <h2 class="h-xs">Key features</h2>
        <ul class="ticks">${pr.features.map((f) => `<li>${icon('check')}${f}</li>`).join('')}</ul>
        <div class="btn-row"><a class="btn btn-wa" href="${wa(`Hello, I would like a quote for: ${pr.name}. Quantity: `)}" target="_blank" rel="noopener">${icon('wa')} Enquire on WhatsApp</a><a class="btn btn-outline" href="${p}contact.html#quote">Get a bulk quote ${icon('arrow')}</a></div>
      </div>
    </div>
  </div>
</section>
<section class="sec">
  <div class="wrap two">
    <div class="panel"><h2 class="h-sm">Specifications</h2>
      <table class="specs"><tbody>${pr.specs.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table>
      <p class="fine">Pack quantities and dimensions can vary by batch and brand. We confirm exact details with your quote.</p></div>
    <div class="panel"><h2 class="h-sm">Ideal uses</h2><ul class="ticks">${pr.uses.map((u) => `<li>${icon('check')}${u}</li>`).join('')}</ul>
      <h2 class="h-sm mt">Ordering</h2><p>Available in retail packs and wholesale cartons, with samples on request. Delivered across Hyderabad, Telangana and Andhra Pradesh on a GST invoice.</p>
      <a class="link-arrow" href="tel:${C.phoneDial}">${icon('phone')} Call ${C.phoneDisplay}</a></div>
  </div>
</section>
<section class="sec tint">
  <div class="wrap"><div class="sec-head"><div><p class="eyebrow">Related products</p><h2>You may also need</h2></div><a class="btn btn-outline" href="${p}products/${c.slug}.html">All ${c.name} ${icon('arrow')}</a></div>
    <div class="pgrid">${related.map((r) => prodCard(p, r)).join('')}</div></div>
</section>`,
  }));
});

// CATALOGUE
built.push(page({
  file: 'catalogue.html', active: 'catalogue.html', cls: 'catalogue',
  title: 'Product Catalogue (PDF) | Sri Laxmi Distributor, Hyderabad',
  desc: 'Download the Sri Laxmi Distributor catalogue: a summary of all seven categories – bagasse tableware, paper cups, kraft packaging, PP containers, tissue, Freshwrapp foil and housekeeping.',
  body: (p) => `
${pageHero(p, { eyebrow: 'Catalogue', h1: 'The SLD product catalogue', lead: 'A one-document summary of everything we stock. Save it as a PDF to share with your purchase team, or print it for the store room.', trail: [[null, 'Catalogue']],
    extra: `<div class="btn-row no-print"><button class="btn btn-dark" type="button" data-print>${icon('download')} Download as PDF</button><a class="btn btn-wa" href="${wa('Hello, please send me your latest catalogue and price list.')}" target="_blank" rel="noopener">${icon('wa')} Get price list on WhatsApp</a></div><p class="fine no-print">Tip: in the print window, choose “Save as PDF”.</p>` })}
<section class="sec">
  <div class="wrap">
    <div class="print-head"><b>${C.name}</b> · Wholesale &amp; retail food packaging and housekeeping material · Hyderabad · ${C.phoneDisplay}${C.email ? ' · ' + C.email : ''}</div>
    ${CATS.map((c, i) => `
    <article class="cat-sheet">
      <div class="cat-sheet-art tone-${c.tone}">${visual(p, c.slug, c.art, `${c.name} catalogue – SLD Hyderabad`)}</div>
      <div>
        <p class="eyebrow">Category ${String(i + 1).padStart(2, '0')}</p>
        <h2>${c.name}</h2><p>${c.tagline} ${c.seo}</p>
        <h3>What's inside</h3>
        <ul class="inside">${c.sub.map(([t, d]) => `<li><b>${t}</b> — ${d}</li>`).join('')}</ul>
        <p class="fine"><b>Popular items:</b> ${c.products.map((x) => x.name).join(' · ')}</p>
        <a class="link-arrow no-print" href="${p}products/${c.slug}.html">View ${c.name} ${icon('arrow')}</a>
      </div>
    </article>`).join('')}
    <div class="note">${icon('doc')}<p><b>Need current prices?</b> Rates change with volume and market. Send your list and we will reply with item-wise pricing within 24 hours.</p><a class="btn btn-dark btn-sm no-print" href="${p}contact.html#quote">Get a quote</a></div>
  </div>
</section>`,
}));

// BLOG INDEX + POSTS
const postCard = (p, b) => `
<a class="post-card" href="${p}blog/${b.slug}.html">
  <span class="post-art tone-${b.tone}">${artSvg(b.art, b.title)}</span>
  <span class="post-body"><small>${b.tag} · ${b.read} min read</small><b>${b.title}</b><span>${b.excerpt}</span><em>Read article ${icon('arrow')}</em></span>
</a>`;
built.push(page({
  file: 'blog.html', active: 'blog.html',
  title: 'Packaging Blog – Guides for Restaurants, Caterers & Retailers | SLD',
  desc: 'Practical packaging guides from Sri Laxmi Distributor: eco-friendly options, bagasse vs plastic, paper cup sizes, foil containers for biryani, kraft for cloud kitchens and more.',
  body: (p) => `
${pageHero(p, { eyebrow: 'Blog', h1: 'Small guides<br>for better buying', lead: 'Plain advice on choosing, sizing and buying food packaging — written from 24+ years behind the counter.', trail: [[null, 'Blog']] })}
<section class="sec"><div class="wrap"><div class="post-grid">${posts.map((b) => postCard(p, b)).join('')}</div>
  <div class="btn-row center"><a class="btn btn-dark" href="${p}contact.html#quote">Have a question? Ask us ${icon('arrow')}</a></div></div></section>`,
}));
posts.forEach((b, i) => {
  const more = [posts[(i + 1) % posts.length], posts[(i + 2) % posts.length], posts[(i + 3) % posts.length]];
  built.push(page({
    file: `blog/${b.slug}.html`, active: 'blog.html', title: b.metaTitle, desc: b.metaDesc,
    ld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: b.title, description: b.metaDesc, datePublished: b.date, author: { '@type': 'Organization', name: C.name }, publisher: { '@type': 'Organization', name: C.name } }],
    body: (p) => `
<section class="page-hero">
  <div class="wrap narrow-wrap">${crumbs(p, [['blog.html', 'Blog'], [null, b.tag]])}
    <span class="chip"><i></i>${b.tag}</span><h1>${b.title}</h1>
    <p class="meta">${fmtDate(b.date)} · ${b.read} min read · By the SLD team</p></div>
</section>
<section class="sec"><div class="wrap narrow-wrap">
  <div class="post-cover tone-${b.tone}">${artSvg(b.art, b.title)}</div>
  <article class="prose post">${b.body}</article>
  <div class="note">${icon('wa')}<p><b>Need help choosing?</b> Tell us what you serve and we will suggest the right pack and price.</p><a class="btn btn-dark btn-sm" href="${WA_DEFAULT}" target="_blank" rel="noopener">WhatsApp us</a></div>
</div></section>
<section class="sec tint"><div class="wrap"><div class="sec-head"><div><p class="eyebrow">Keep reading</p><h2>More guides</h2></div><a class="btn btn-outline" href="${p}blog.html">All articles ${icon('arrow')}</a></div>
  <div class="post-grid">${more.map((m) => postCard(p, m)).join('')}</div></div></section>`,
  }));
});

// CONTACT
built.push(page({
  file: 'contact.html', active: 'contact.html',
  title: 'Contact Sri Laxmi Distributor | Bulk Quote for Food Packaging, Hyderabad',
  desc: 'Call or WhatsApp Sri Laxmi Distributor, Hyderabad for a bulk quote on food packaging and housekeeping material. Open Mon–Sat, 9am–8pm. Reply within 24 hours.',
  body: (p) => `
${pageHero(p, { eyebrow: 'Contact', h1: 'Tell us what you need.<br>We will quote within 24 hours.', lead: 'Call, message or fill in the form — whichever is easiest. A real person from our team will reply.', trail: [[null, 'Contact']] })}
<section class="sec">
  <div class="wrap contact">
    <div class="contact-cards">
      <a class="who" href="tel:${C.phoneDial}"><span class="who-ic">${icon('phone')}</span><span><b>Call us</b><small>${C.phoneDisplay}</small></span>${icon('chev')}</a>
      <a class="who" href="${WA_DEFAULT}" target="_blank" rel="noopener"><span class="who-ic wa">${icon('wa')}</span><span><b>WhatsApp</b><small>Fastest way to send a list</small></span>${icon('chev')}</a>
      ${C.email ? `<a class="who" href="mailto:${C.email}"><span class="who-ic">${icon('mail')}</span><span><b>Email</b><small>${C.email}</small></span>${icon('chev')}</a>` : ''}
      <div class="who"><span class="who-ic">${icon('pin')}</span><span><b>Visit us</b><small>${C.addressLines.join(', ')}</small></span></div>
      <div class="who"><span class="who-ic">${icon('clock')}</span><span><b>Business hours</b><small>${C.hours} · Sunday closed</small></span></div>
      <div class="panel areas-panel"><h2 class="h-xs">Areas served</h2>${Object.entries(D.areas).map(([st, cities]) => `<p><b>${st}</b><br>${cities.join(', ')}</p>`).join('')}</div>
    </div>
    <form class="quote" id="quote" novalidate>
      <p class="eyebrow">Bulk quote form</p><h2>Request a quote</h2>
      <p class="fine">Fields marked * are required. Submitting opens WhatsApp with your details filled in — nothing is stored on this website.</p>
      <div class="row"><label>Name *<input name="name" required autocomplete="name"></label><label>Business name<input name="business" autocomplete="organization"></label></div>
      <div class="row"><label>Phone *<input name="phone" type="tel" required autocomplete="tel" inputmode="tel"></label><label>City *<input name="city" required list="cities" autocomplete="address-level2"><datalist id="cities">${Object.values(D.areas).flat().map((x) => `<option value="${x}">`).join('')}</datalist></label></div>
      <fieldset><legend>Categories</legend><div class="checks">${CATS.map((c) => `<label><input type="checkbox" name="cat" value="${esc(c.name)}"><span>${c.name}</span></label>`).join('')}</div></fieldset>
      <label>Monthly volume<select name="volume"><option value="">Select an estimate</option><option>Below ₹10,000</option><option>₹10,000 – ₹50,000</option><option>₹50,000 – ₹2,00,000</option><option>Above ₹2,00,000</option><option>One-time / event order</option></select></label>
      <label>Message<textarea name="message" rows="4" placeholder="Items, sizes and quantities you need"></textarea></label>
      <p class="form-err" role="alert" hidden>Please fill in your name, phone and city.</p>
      <div class="btn-row"><button class="btn btn-wa" type="submit">${icon('wa')} Send on WhatsApp</button>${C.email ? `<a class="btn btn-outline" data-mailto href="mailto:${C.email}">${icon('mail')} Send by email instead</a>` : ''}</div>
    </form>
  </div>
</section>`,
}));

// ── Assets, sitemap, robots ──────────────────────────────────
const copyDir = (from, to) => { fs.mkdirSync(to, { recursive: true }); for (const e of fs.readdirSync(from, { withFileTypes: true })) { const a = path.join(from, e.name), b = path.join(to, e.name); e.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b); } };
copyDir(SRC_ASSETS, path.join(OUT, 'assets'));
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${built.map((f) => `  <url><loc>${C.siteUrl}/${f === 'index.html' ? '' : f}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${C.siteUrl}/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log(`Built ${built.length} pages → ${OUT}`);
