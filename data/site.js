// ─────────────────────────────────────────────────────────────
// Sri Laxmi Distributor — site content
// EDIT THE CONTACT BLOCK BELOW with real details, then run:  node build.js
// ─────────────────────────────────────────────────────────────

const company = {
  name: 'Sri Laxmi Distributor',
  short: 'SLD',
  md: 'G. Mahendra',
  // TODO: replace every placeholder below with the real details
  phoneDisplay: '+91 95509 00042',      // shown on the site
  phoneDial: '+919550900042',           // used in tel: links
  whatsapp: '919550900042',             // country code + number, digits only (wa.me)
  email: '',                            // add the real email here; it stays hidden while empty
  addressLines: ['Sri Laxmi Distributor', 'GR Palace, Gandhi Nagar', 'Hyderabad, Telangana 500080'],
  mapsUrl: '',                          // Google Maps link (optional)
  hours: 'Mon–Sat, 9am–8pm',
  siteUrl: 'https://hanish-gupta52.github.io/sld-website', // live address, no trailing slash (change when you get a domain)
  founded: '2002',                      // derived from "24+ years"; correct if needed
};

const stats = [
  { n: '24+', l: 'Years in business' },
  { n: '5,000+', l: 'Customers served' },
  { n: '2,000+', l: 'Products in stock' },
  { n: '7', l: 'Product categories' },
  { n: '5★', l: 'Customer rating' },
];

const areas = {
  Telangana: ['Hyderabad', 'Secunderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Siddipet', 'Adilabad'],
  'Andhra Pradesh': ['Vijayawada', 'Visakhapatnam', 'Guntur', 'Nellore', 'Tirupati', 'Kakinada', 'Rajahmundry', 'Kurnool', 'Anantapur', 'Eluru'],
};

const popularSearches = [
  'Wholesale food packaging Hyderabad', 'Bagasse plates supplier Telangana', 'Paper cups wholesale Hyderabad',
  'Kraft boxes Andhra Pradesh', 'Aluminium foil containers wholesale', 'Freshwrapp distributor Hyderabad',
  'Eco-friendly packaging Vijayawada', 'Disposable containers retail and wholesale', 'Sugarcane plates wholesale Secunderabad',
  'Biryani foil containers Hyderabad', 'Paper cups retail Warangal', 'Kraft paper bags wholesale Hyderabad',
  'PP food containers wholesale Visakhapatnam', 'Tissue napkins wholesale Hyderabad', 'Housekeeping material supplier Hyderabad',
  'Compostable plates Guntur', 'Ripple cups wholesale Vijayawada', 'Meal trays wholesale Karimnagar',
  'Burger boxes wholesale Hyderabad', 'Wooden spoons wholesale Telangana', 'Aluminium foil roll retail Hyderabad',
  'Garbage bags wholesale Secunderabad', 'Cloud kitchen packaging Hyderabad', 'Catering disposables Tirupati',
  'Foil containers wholesale Nellore', 'Paper cups wholesale Khammam', 'Bagasse clamshell wholesale Hyderabad',
  'Kraft salad bowls Visakhapatnam', 'Microwave safe containers retail Hyderabad', 'Sweet shop packaging Rajahmundry',
  'Hotel housekeeping supplies Vijayawada', 'Tea cups wholesale Nizamabad',
];

const heroSlides = [
  { key: 'bulk', cat: 'pp-plastic-containers', tag: 'Bulk supply', title: 'Bulk packaging, always in stock', text: 'Over 2,000 products ready to dispatch for restaurants, caterers and retailers.', cta: 'See all products', href: 'products.html' },
  { key: 'eco', cat: 'bagasse-tableware', tag: 'Eco range', title: 'Eco-friendly, without the guesswork', text: 'Bagasse and kraft options matched to what you actually serve.', cta: 'Explore bagasse', href: 'products/bagasse-tableware.html' },
  { key: 'foil', cat: 'aluminium-foil', tag: 'Freshwrapp foil', title: 'Authorised Freshwrapp distributor', text: 'Genuine Hindalco foil rolls and containers, from 250 ml to 9000 ml trays.', cta: 'View foil range', href: 'products/aluminium-foil.html' },
  { key: 'cups', cat: 'paper-cups', tag: 'Paper cups', title: 'Cups for every counter', text: 'Single wall, double wall and ripple cups with lids and sleeves to match.', cta: 'Browse cups', href: 'products/paper-cups.html' },
  { key: 'quote', cat: 'kraft-packaging', tag: 'Quick quotes', title: 'A clear quote within 24 hours', text: 'Send your list on WhatsApp and get item-wise wholesale pricing.', cta: 'Get a bulk quote', href: 'contact.html#quote' },
];

const approach = [
  { icon: 'menu', t: 'Menu-first recommendations', d: 'Tell us what you serve. We suggest the container, size and lid that suits a gravy, a dry starter or a 1 kg biryani — not just what is on the shelf.' },
  { icon: 'leaf', t: 'Eco options where they work', d: 'Bagasse and kraft are excellent for many dishes and not ideal for a few. We tell you honestly which is which, so your packaging performs.' },
  { icon: 'repeat', t: 'Reliable repeat supply', d: 'Once your items are fixed, we keep them in stock. Repeat orders are a single WhatsApp message with the same sizes every time.' },
];

const steps = [
  { t: 'Share your requirement', d: 'Send your item list, quantities and city by WhatsApp, phone or the quote form.' },
  { t: 'Quote within 24 hours', d: 'We reply with item-wise wholesale pricing and suggest alternatives where useful.' },
  { t: 'Confirm, one invoice', d: 'Approve the quote. Any mix of categories goes on a single GST invoice.' },
  { t: 'Doorstep delivery', d: 'We deliver to your kitchen, shop or store across Telangana and Andhra Pradesh.' },
];

const why = [
  { icon: 'box', t: '2,000+ products in stock', d: 'Seven categories under one roof, so you rarely need a second supplier.' },
  { icon: 'tag', t: 'Wholesale & retail pricing', d: 'Buy a carton or a truckload. Better rates as your volume grows.' },
  { icon: 'badge', t: 'Authorised brands', d: 'Authorised Freshwrapp (Hindalco) distributor — genuine stock only.' },
  { icon: 'truck', t: 'Doorstep delivery', d: 'Delivered across Hyderabad and to 20 cities in Telangana and AP.' },
  { icon: 'doc', t: 'One invoice for any mix', d: 'Plates, cups, foil and housekeeping on one GST bill.' },
  { icon: 'chat', t: 'Expert advice', d: '24+ years of knowing which pack suits which dish.' },
];

// NOTE: sample testimonials written as placeholders — replace with real customer quotes before going live.
const testimonials = [
  { q: 'We moved our parcel packing to SLD three years ago. The sizes are consistent, the lids fit, and repeat orders arrive when they say they will.', who: 'Restaurant owner', where: 'Hyderabad' },
  { q: 'For large functions we need trays, plates and tissue together at short notice. One call and one invoice covers the whole event.', who: 'Catering contractor', where: 'Secunderabad' },
  { q: 'Housekeeping material and guest-room tissue from the same supplier has simplified our purchase process a great deal.', who: 'Hotel purchase manager', where: 'Vijayawada' },
  { q: 'They supply us in retail-friendly packs at a fair wholesale rate, and the Freshwrapp stock is always genuine.', who: 'Retail store owner', where: 'Warangal' },
];

const faqs = [
  { q: 'Is there a minimum order quantity?', a: 'No fixed minimum for retail purchases — you can buy a single pack. Wholesale rates generally apply from carton quantities. Share your list and we will tell you the best price break for each item.' },
  { q: 'Which areas do you deliver to?', a: 'We deliver across Hyderabad and Secunderabad, and to major cities in Telangana and Andhra Pradesh including Warangal, Karimnagar, Nizamabad, Khammam, Vijayawada, Visakhapatnam, Guntur, Nellore and Tirupati. Delivery terms depend on order size and location.' },
  { q: 'Can I get samples before ordering in bulk?', a: 'Yes. For most products we can share samples so you can test them with your own food before committing. Tell us the items you are considering and we will arrange it.' },
  { q: 'Do you provide a GST invoice?', a: 'Yes. Every order is billed with a proper GST invoice, and any mix of categories can go on a single invoice for easier accounting.' },
  { q: 'How does bulk pricing work?', a: 'Pricing is slab-based: the larger the quantity per item, the lower the rate. Regular monthly buyers can discuss a fixed rate list so prices stay predictable.' },
  { q: 'Do you offer custom sizes or special requirements?', a: 'We stock a wide range of standard sizes and can source specific sizes on request. Availability and lead time vary by product — ask us and we will confirm before you order.' },
];

const timeline = [
  { y: 'The beginning', t: 'Founded in Hyderabad', d: 'Sri Laxmi Distributor opens as a small packaging supplier serving local eateries, sweet shops and kirana stores.' },
  { y: 'Growing up', t: 'Wholesale expansion', d: 'Demand from restaurants and caterers leads to a larger stock range and carton-level wholesale supply.' },
  { y: 'Going further', t: 'Two-state delivery', d: 'Doorstep delivery extends beyond Hyderabad to cities across Telangana and Andhra Pradesh.' },
  { y: 'A new focus', t: 'Eco-first range', d: 'Bagasse tableware and brown kraft packaging become a core part of the catalogue as customers move away from single-use plastic.' },
  { y: 'Today', t: '2,000+ products, 5,000+ customers', d: 'Seven categories, authorised Freshwrapp distribution and a team that still answers every enquiry personally.' },
];

// ── Categories and products ──────────────────────────────────
// spec order: Material, Size / capacity, Pack quantity, Microwave, Oven, Freezer, Disposal
const S = (material, size, pack, mw, oven, fr, disposal) => [
  ['Material', material], ['Capacity / size', size], ['Pack quantity', pack],
  ['Microwave safe', mw], ['Oven safe', oven], ['Freezer safe', fr], ['Disposal', disposal],
];

const categories = [
  {
    slug: 'bagasse-tableware', name: 'Bagasse Tableware', nav: 'Bagasse / sugarcane tableware', art: 'plate', tone: 'leaf',
    tagline: 'Sturdy, compostable plates, bowls and boxes made from sugarcane fibre.',
    metaTitle: 'Bagasse Plates Supplier Telangana | Sugarcane Tableware Wholesale – SLD',
    metaDesc: 'Bagasse plates, compartment plates, bowls, clamshells, meal trays and cups at wholesale and retail prices. Delivered across Hyderabad, Telangana and Andhra Pradesh.',
    intro: 'Bagasse is the fibre left after sugarcane is crushed for juice. Pressed into tableware, it makes plates and boxes that hold hot, oily and wet food without going soft — and that compost after use. As a bagasse plates supplier in Telangana, we stock the full range for dine-in, takeaway and events.',
    seo: 'Wholesale bagasse and sugarcane tableware in Hyderabad — plates, bowls, clamshells and meal trays that are microwave-safe, oil-resistant and compostable.',
    sub: [
      ['Round plates', 'Plain plates in 6, 7, 9, 10 and 12 inch sizes for snacks, tiffins and full meals.'],
      ['Compartment plates', '3, 4 and 5 compartment plates that keep curries, rice and sweets separate.'],
      ['Bowls', 'Bowls from 120 ml to 500 ml for curries, desserts, soups and chaat.'],
      ['Clamshells', 'Hinged boxes for burgers, dosas, starters and combo meals.'],
      ['Meal trays', '4 and 5 compartment trays with lids for thali and corporate meals.'],
      ['Cups', 'Bagasse cups for water, buttermilk and portioned sides.'],
    ],
    uses: ['Restaurant and cloud-kitchen takeaway', 'Wedding and function catering', 'Temple and community meals', 'Corporate lunch boxes', 'Sweet shops and chaat counters'],
    guide: ['Choose plate size by menu: 6–7 inch for snacks, 10–12 inch for meals.', 'Use compartment plates or trays when gravies and dry items travel together.', 'For delivery, pick trays or clamshells with a matching lid rather than loose plates.', 'Very thin gravies held for long hours do better in a bowl with a lid.'],
    products: [
      { slug: 'bagasse-round-plate-10-inch', name: 'Bagasse Round Plate – 10 inch', desc: 'A rigid, full-meal plate made from sugarcane fibre that stays firm under hot rice and curry.',
        features: ['Holds hot and oily food without leaking', 'Rigid enough to carry with one hand', 'No plastic or wax coating', 'Microwave and freezer safe', 'Composts after use'],
        specs: S('Sugarcane bagasse fibre', '10 inch (25 cm) diameter', '25 per pack, 500 per carton (typical)', 'Yes', 'Reheating only, up to about 120°C', 'Yes', 'Compostable'),
        uses: ['Buffet and function meals', 'Dine-in at QSRs', 'Community lunches'] },
      { slug: 'bagasse-4-compartment-plate', name: 'Bagasse 4-Compartment Plate', desc: 'A divided plate that keeps rice, curry, fry and sweet neatly apart for thali-style service.',
        features: ['Four deep sections stop gravies mixing', 'Strong rim for easy handling', 'Oil and water resistant', 'Microwave safe for reheating', 'Made from a renewable by-product'],
        specs: S('Sugarcane bagasse fibre', '11 inch square, 4 compartments', '25 per pack, 500 per carton (typical)', 'Yes', 'Reheating only, up to about 120°C', 'Yes', 'Compostable'),
        uses: ['Mini meals and thalis', 'Catering lunches', 'Office canteens'] },
      { slug: 'bagasse-clamshell-box', name: 'Bagasse Clamshell Box – 9 × 6 inch', desc: 'A hinged takeaway box that closes securely around dosas, starters, burgers and combo meals.',
        features: ['One-piece hinged design, no separate lid', 'Locking tab keeps the box shut in transit', 'Absorbs steam so fried food stays crisp longer', 'Stackable for delivery bags', 'Compostable alternative to foam boxes'],
        specs: S('Sugarcane bagasse fibre', '9 × 6 × 3 inch (approx.)', '50 per pack, 500 per carton (typical)', 'Yes', 'Reheating only, up to about 120°C', 'Yes', 'Compostable'),
        uses: ['Cloud-kitchen deliveries', 'Tiffin centres', 'Bakery and snack counters'] },
      { slug: 'bagasse-5-compartment-meal-tray', name: 'Bagasse 5-Compartment Meal Tray with Lid', desc: 'A full meal tray with a fitted lid, built for delivered thalis and corporate lunch orders.',
        features: ['Five compartments for a complete meal', 'Fitted lid prevents spills in transit', 'Stays rigid with hot gravy', 'Presents food neatly on opening', 'Plastic-ban compliant'],
        specs: S('Sugarcane bagasse fibre; lid as per stock', '5 compartments, approx. 10.5 × 8.5 inch', '50 sets per pack, 250–500 per carton (typical)', 'Yes (tray)', 'Reheating only, up to about 120°C', 'Yes', 'Tray compostable'),
        uses: ['Corporate meal delivery', 'Event catering', 'Meal-subscription kitchens'] },
    ],
  },
  {
    slug: 'paper-cups', name: 'Paper Cups', nav: 'Paper cups', art: 'cup', tone: 'sky',
    tagline: 'Hot and cold cups in every common size, with lids and sleeves.',
    metaTitle: 'Paper Cups Wholesale Hyderabad | Tea, Coffee & Ripple Cups – SLD',
    metaDesc: 'Paper cups wholesale in Hyderabad: single wall, double wall and ripple cups, tea and coffee cups, lids and sleeves. Retail and bulk supply across Telangana and AP.',
    intro: 'From a 65 ml cutting chai to a 350 ml cold coffee, the right cup size protects both your margin and your customer\'s experience. We supply paper cups wholesale in Hyderabad to tea stalls, cafés, offices, canteens and events, with matching lids and sleeves.',
    seo: 'Paper cups wholesale Hyderabad — single wall, double wall and ripple cups from 65 ml to 350 ml, plus lids and sleeves, delivered across Telangana and Andhra Pradesh.',
    sub: [
      ['Single wall cups', 'Economical everyday cups for tea, coffee, water and juice.'],
      ['Double wall cups', 'Two layers of paper keep drinks hot and hands comfortable without a sleeve.'],
      ['Ripple cups', 'Textured outer wall for a premium café feel and a secure grip.'],
      ['Tea & coffee cups', 'Small sizes from 65 ml to 150 ml for stalls, offices and canteens.'],
      ['Lids', 'Sip lids and flat lids matched to each cup diameter.'],
      ['Sleeves', 'Kraft sleeves that add insulation to single wall cups.'],
    ],
    uses: ['Tea stalls and Irani cafés', 'Coffee shops and bakeries', 'Office pantries', 'Juice and milkshake counters', 'Weddings and events'],
    guide: ['Match size to serving: 65–100 ml tea, 150 ml coffee, 250 ml+ for takeaway drinks.', 'Choose double wall or ripple for very hot drinks carried by hand.', 'Order lids with the cups — diameters differ between makes.', 'For cold drinks, ask for cups suited to condensation.'],
    products: [
      { slug: 'single-wall-paper-cup-150ml', name: 'Single Wall Paper Cup – 150 ml', desc: 'The standard coffee cup for offices, canteens and counters, with a rolled rim for comfortable sipping.',
        features: ['Food-grade paperboard with leak-proof lining', 'Smooth rolled rim', 'Sealed base that does not seep', 'Stacks compactly to save storage', 'Economical for high daily volumes'],
        specs: S('Food-grade paperboard, PE lined', '150 ml', '50–100 per sleeve, 2,000 per carton (typical)', 'No', 'No', 'No', 'Recyclable where facilities exist'),
        uses: ['Office coffee machines', 'Canteens', 'Functions'] },
      { slug: 'tea-paper-cup-90ml', name: 'Tea Paper Cup – 90 ml', desc: 'A compact cup sized for a proper serving of chai — the everyday choice for stalls and offices.',
        features: ['Right-sized portion controls cost per cup', 'Holds boiling tea without softening', 'Light and easy to stack', 'Plain or printed stock as available', 'Sold in retail sleeves and wholesale cartons'],
        specs: S('Food-grade paperboard, PE lined', '90 ml', '100 per sleeve, 3,000–5,000 per carton (typical)', 'No', 'No', 'No', 'Recyclable where facilities exist'),
        uses: ['Tea stalls', 'Office tea service', 'Sampling counters'] },
      { slug: 'double-wall-paper-cup-250ml', name: 'Double Wall Paper Cup – 250 ml', desc: 'Two layers of paperboard insulate hot drinks so customers can hold the cup comfortably without a sleeve.',
        features: ['Built-in insulation, no sleeve needed', 'Stays rigid when full', 'Premium feel for café takeaway', 'Compatible sip lids available', 'Keeps drinks warm for longer'],
        specs: S('Double-layer food-grade paperboard', '250 ml (8 oz)', '25 per sleeve, 500 per carton (typical)', 'No', 'No', 'No', 'Recyclable where facilities exist'),
        uses: ['Café takeaway', 'Bakeries', 'Hotel breakfast counters'] },
      { slug: 'ripple-paper-cup-350ml', name: 'Ripple Paper Cup – 350 ml', desc: 'A large takeaway cup with a corrugated outer wall that grips well and stays cool to the touch.',
        features: ['Rippled wall gives a secure grip', 'Excellent heat insulation', 'Distinct premium look', 'Fits standard 90 mm sip lids', 'Suited to lattes and large coffees'],
        specs: S('Paperboard with corrugated outer wall', '350 ml (12 oz)', '25 per sleeve, 500 per carton (typical)', 'No', 'No', 'No', 'Recyclable where facilities exist'),
        uses: ['Speciality coffee shops', 'Hot chocolate and soups', 'Delivery beverages'] },
    ],
  },
  {
    slug: 'kraft-packaging', name: 'Kraft Packaging', nav: 'Kraft packaging', art: 'box', tone: 'kraft',
    tagline: 'Brown kraft bowls, boxes and bags with wooden cutlery to match.',
    metaTitle: 'Kraft Boxes Andhra Pradesh & Telangana | Brown Kraft Packaging – SLD',
    metaDesc: 'Brown kraft bowls with lids, salad bowls, noodle boxes, burger boxes, paper bags and wooden cutlery. Wholesale kraft packaging for Hyderabad, Telangana and AP.',
    intro: 'Brown kraft packaging gives delivered food a clean, natural look that customers associate with care. We stock brown kraft only — bowls, boxes and bags — along with wooden spoons, forks and stirrers, and supply kraft boxes across Andhra Pradesh and Telangana.',
    seo: 'Wholesale brown kraft packaging — kraft bowls with lids, salad bowls, noodle boxes, burger boxes and paper bags for cloud kitchens and cafés in Hyderabad and beyond.',
    sub: [
      ['Kraft bowls with lids', 'Round bowls from 250 ml to 1000 ml for rice bowls, curries and biryani portions.'],
      ['Salad bowls', 'Wide, shallow bowls with clear lids that show off fresh food.'],
      ['Noodle / food boxes', 'Fold-top boxes for noodles, fried rice and starters.'],
      ['Burger boxes', 'Vented boxes that keep buns from turning soggy.'],
      ['Paper bags', 'Flat and twisted-handle bags in delivery-friendly sizes.'],
      ['Wooden cutlery', 'Spoons, forks and stirrers in smooth birchwood.'],
    ],
    uses: ['Cloud kitchens and delivery brands', 'Cafés and salad bars', 'Burger and sandwich outlets', 'Bakeries and sweet shops', 'Retail carry bags'],
    guide: ['Pick bowl capacity by portion weight: 500 ml suits most single rice bowls.', 'Use clear lids when presentation sells the dish; paper lids for hot food.', 'Choose bag size by your largest regular order.', 'Add wooden cutlery to stay consistent with plastic-ban rules.'],
    products: [
      { slug: 'kraft-bowl-with-lid-500ml', name: 'Kraft Bowl with Lid – 500 ml', desc: 'A leak-resistant brown kraft bowl with a snug lid, ideal for single-portion rice bowls and curries.',
        features: ['Lined interior resists oil and gravy', 'Tight-fitting lid for delivery', 'Sturdy wall that does not collapse when held', 'Natural brown kraft finish', 'Stacks neatly in delivery bags'],
        specs: S('Brown kraft paperboard, food-grade lining', '500 ml', '50 sets per pack, 300–500 per carton (typical)', 'Short reheating only', 'No', 'Short-term', 'Recyclable where facilities exist'),
        uses: ['Rice and curry bowls', 'Biryani single portions', 'Pasta and noodles'] },
      { slug: 'kraft-salad-bowl-750ml', name: 'Kraft Salad Bowl – 750 ml', desc: 'A wide kraft bowl with a clear lid so fresh salads, poke bowls and fruit look as good as they taste.',
        features: ['Wide opening for easy eating', 'Clear lid displays the food', 'Moisture-resistant lining', 'Room to toss dressing', 'Premium look for healthy menus'],
        specs: S('Brown kraft paperboard; clear lid', '750 ml', '50 sets per pack, 300 per carton (typical)', 'No (remove lid; cold use preferred)', 'No', 'Short-term', 'Bowl recyclable where facilities exist'),
        uses: ['Salad bars', 'Fruit bowls', 'Healthy meal subscriptions'] },
      { slug: 'kraft-noodle-box', name: 'Kraft Noodle Box – 750 ml', desc: 'A fold-top brown kraft box that keeps noodles, fried rice and starters warm and contained.',
        features: ['Fold-and-lock top, no separate lid', 'Grease-resistant inside', 'Easy to eat from directly', 'Flat-packed to save storage space', 'Works for hot and dry dishes'],
        specs: S('Brown kraft paperboard, food-grade lining', '750 ml (26 oz)', '50 per pack, 500 per carton (typical)', 'Short reheating only', 'No', 'No', 'Recyclable where facilities exist'),
        uses: ['Indo-Chinese takeaways', 'Food trucks', 'Starters and fries'] },
      { slug: 'kraft-burger-box', name: 'Kraft Burger Box', desc: 'A vented clamshell-style kraft box that protects the burger and lets steam escape.',
        features: ['Vents reduce sogginess', 'Locks shut with a simple tab', 'Grease-resistant board', 'Stackable for multi-burger orders', 'Clean natural kraft appearance'],
        specs: S('Brown kraft paperboard', 'Approx. 4.5 × 4.5 × 3 inch', '100 per pack, 500 per carton (typical)', 'No', 'No', 'No', 'Recyclable where facilities exist'),
        uses: ['Burger outlets', 'Sandwich counters', 'Bakery snacks'] },
      { slug: 'kraft-paper-bag-twisted-handle', name: 'Kraft Paper Bag with Twisted Handle', desc: 'A strong brown kraft carry bag with twisted paper handles for takeaway and retail.',
        features: ['Flat base sits upright while packing', 'Reinforced twisted handles', 'Carries multiple containers safely', 'Plain surface suits stamps or stickers', 'Plastic-free carry option'],
        specs: S('Brown kraft paper', 'Multiple sizes; common: 10 × 5 × 13 inch', '50–100 per pack (typical)', 'Not applicable', 'Not applicable', 'Not applicable', 'Recyclable'),
        uses: ['Restaurant takeaway', 'Bakery and sweet shops', 'Retail stores'] },
    ],
  },
  {
    slug: 'pp-plastic-containers', name: 'PP / Plastic Containers', nav: 'PP / plastic containers', art: 'container', tone: 'ice',
    tagline: 'Microwave-safe, reusable round and rectangular containers with lids.',
    metaTitle: 'PP Food Containers Wholesale Hyderabad | Microwave-Safe Containers – SLD',
    metaDesc: 'Round and rectangular PP food containers with lids — microwave-safe, leak-resistant and reusable. Disposable containers retail and wholesale across Telangana and AP.',
    intro: 'For gravies, dals and anything that must not leak, polypropylene (PP) containers remain the dependable choice. They are microwave-safe, reusable at home and close with a firm click. We supply disposable containers retail and wholesale in every common capacity.',
    seo: 'Disposable containers retail and wholesale in Hyderabad — microwave-safe PP round and rectangular containers with leak-resistant lids, from 50 ml to 1500 ml.',
    sub: [
      ['Round containers', 'Capacities from 50 ml chutney cups to 1000 ml curry containers.'],
      ['Rectangular containers', '500 ml to 1500 ml for rice, biryani and meal portions.'],
      ['Lids', 'Matched, click-fit lids supplied with each container.'],
      ['Microwave-safe range', 'Food-grade PP that handles reheating.'],
      ['Reusable containers', 'Thicker-gauge options customers keep and reuse.'],
    ],
    uses: ['Curry and gravy deliveries', 'Sweet shops and namkeen packing', 'Chutney, raita and sauce portions', 'Meal prep and tiffin services', 'Retail household use'],
    guide: ['Round containers suit liquids; rectangular ones pack more efficiently for rice.', 'Check gauge (thickness) if the container will be reheated or reused.', 'Buy container and lid from the same make to guarantee fit.', 'Small 50–100 ml cups save cost on chutneys and dips.'],
    products: [
      { slug: 'pp-round-container-500ml', name: 'PP Round Container with Lid – 500 ml', desc: 'A clear, leak-resistant round container for curries, dals and sweets, with a click-fit lid.',
        features: ['Click-fit lid resists leaks', 'Microwave-safe food-grade PP', 'Clear body shows the contents', 'Reusable and washable', 'Stacks securely'],
        specs: S('Food-grade polypropylene (PP)', '500 ml', '50 sets per pack, 500 per carton (typical)', 'Yes', 'No', 'Yes', 'Reusable; recyclable (PP #5)'),
        uses: ['Curries and gravies', 'Sweets and halwa', 'Soups and sambar'] },
      { slug: 'pp-rectangular-container-750ml', name: 'PP Rectangular Container with Lid – 750 ml', desc: 'A space-efficient rectangular container sized for rice, biryani and full meal portions.',
        features: ['Packs tightly in delivery bags', 'Secure lid with firm seal', 'Microwave and freezer safe', 'Sturdy enough to reuse', 'Available in clear, white or black as per stock'],
        specs: S('Food-grade polypropylene (PP)', '750 ml', '50 sets per pack, 500 per carton (typical)', 'Yes', 'No', 'Yes', 'Reusable; recyclable (PP #5)'),
        uses: ['Biryani and fried rice', 'Meal prep', 'Tiffin services'] },
      { slug: 'pp-chutney-cup-100ml', name: 'PP Round Container – 100 ml', desc: 'A small portion container for chutneys, raita, pickles and sauces that travels without leaking.',
        features: ['Right-sized for sides and dips', 'Tight lid prevents spills', 'Low cost per portion', 'Clear for quick identification', 'Reusable'],
        specs: S('Food-grade polypropylene (PP)', '100 ml', '100 sets per pack, 1,000–2,000 per carton (typical)', 'Yes', 'No', 'Yes', 'Reusable; recyclable (PP #5)'),
        uses: ['Chutneys and raita', 'Sauces and dips', 'Sweet samples'] },
    ],
  },
  {
    slug: 'tissue-napkins', name: 'Tissue & Napkins', nav: 'Tissue & napkins', art: 'tissue', tone: 'blush',
    tagline: 'Table napkins, kitchen towels, toilet rolls and facial tissue.',
    metaTitle: 'Tissue Napkins Wholesale Hyderabad | Kitchen Towels & Toilet Rolls – SLD',
    metaDesc: 'Table napkins, kitchen towels, toilet rolls and facial tissue at wholesale and retail prices for restaurants, hotels, offices and shops in Hyderabad, Telangana and AP.',
    intro: 'Tissue is a small cost that customers notice straight away. We supply soft, absorbent tissue products for dining tables, kitchens, washrooms and guest rooms — in retail packs for shops and bulk cartons for hotels and restaurants.',
    seo: 'Tissue and napkins wholesale in Hyderabad — table napkins, kitchen towels, toilet rolls and facial tissue for restaurants, hotels, offices and retailers.',
    sub: [
      ['Table napkins', '1-ply and 2-ply napkins in common fold sizes for dining and takeaway.'],
      ['Kitchen towels', 'Absorbent rolls for wiping, draining and cleaning.'],
      ['Toilet rolls', 'Soft 2-ply and 3-ply rolls for washrooms and guest rooms.'],
      ['Facial tissue', 'Boxed tissue for reception desks, rooms and retail shelves.'],
    ],
    uses: ['Restaurant tables and parcels', 'Hotel rooms and washrooms', 'Office pantries', 'Clinics and salons', 'Retail shelves'],
    guide: ['2-ply napkins feel better at dine-in; 1-ply is economical for parcels.', 'Compare price per sheet or per metre, not per pack.', 'Match toilet-roll size to your dispensers.', 'Keep a month of buffer stock — tissue is bulky but never optional.'],
    products: [
      { slug: 'table-napkin-2-ply', name: 'Table Napkin – 2 Ply', desc: 'A soft, absorbent 2-ply paper napkin for restaurant tables, counters and takeaway packs.',
        features: ['Soft on skin, strong when wet', 'Neat quarter fold', 'Lint-free feel', 'Hygienically packed', 'Available in retail and bulk packs'],
        specs: S('Virgin tissue paper, 2 ply', 'Approx. 30 × 30 cm open', '100 per pack; bulk cartons available', 'Not applicable', 'Not applicable', 'Not applicable', 'Biodegradable'),
        uses: ['Dine-in tables', 'Takeaway parcels', 'Events'] },
      { slug: 'kitchen-towel-roll', name: 'Kitchen Towel Roll – 2 Ply', desc: 'A highly absorbent kitchen roll for soaking excess oil, wiping counters and drying hands.',
        features: ['High absorbency for oil and water', 'Perforated sheets tear cleanly', 'Strong enough for wiping', 'Food-contact suitable', 'Sold singly, in twin packs and by the carton'],
        specs: S('Virgin tissue paper, 2 ply', 'Approx. 60 pulls per roll (varies by brand)', '2–4 rolls per pack (typical)', 'Not applicable', 'Not applicable', 'Not applicable', 'Biodegradable'),
        uses: ['Commercial kitchens', 'Bakeries', 'Household retail'] },
      { slug: 'toilet-roll-2-ply', name: 'Toilet Roll – 2 Ply', desc: 'A soft, strong 2-ply toilet roll suited to hotel rooms, offices and retail packs.',
        features: ['Soft 2-ply comfort', 'Dissolves easily, septic-friendly', 'Individually wrapped options for hotels', 'Consistent sheet count', 'Bulk cartons for housekeeping stores'],
        specs: S('Virgin tissue paper, 2 ply', 'Sheet count varies by brand', '4, 6 or 10 rolls per pack (typical)', 'Not applicable', 'Not applicable', 'Not applicable', 'Biodegradable'),
        uses: ['Hotels and lodges', 'Offices', 'Retail'] },
    ],
  },
  {
    slug: 'aluminium-foil', name: 'Aluminium Foil (Freshwrapp)', nav: 'Aluminium foil (Freshwrapp)', art: 'foil', tone: 'steel',
    tagline: 'Genuine Freshwrapp foil rolls, sheets and containers from Hindalco.',
    metaTitle: 'Freshwrapp Distributor Hyderabad | Aluminium Foil Containers Wholesale – SLD',
    metaDesc: 'Authorised Freshwrapp (Hindalco) distributor in Hyderabad. Foil rolls 9m–72m, sheets and aluminium foil containers wholesale: 250, 450, 660, 750 ml, 3300 ml and 9000 ml trays.',
    intro: 'Sri Laxmi Distributor is an authorised Freshwrapp distributor in Hyderabad, supplying Hindalco\'s food-grade aluminium foil to kitchens, caterers and retailers. Foil keeps food hot, locks in aroma and goes straight from oven to table — which is why it remains the first choice for biryani.',
    seo: 'Aluminium foil containers wholesale and Freshwrapp foil rolls in Hyderabad — 9 m to 72 m rolls, sheets, and containers from 250 ml to 9000 ml full-deep trays with lids.',
    sub: [
      ['Foil rolls', 'Freshwrapp rolls in 9 m, 18 m, 36 m and 72 m lengths for homes and kitchens.'],
      ['Foil sheets', 'Pre-cut sheets for fast wrapping of rotis, rolls and sandwiches.'],
      ['Containers 250–750 ml', '250, 450, 660 and 750 ml containers with lids for single portions.'],
      ['Half-deep tray 3300 ml', 'Party and family-pack tray with lid.'],
      ['Full-deep tray 9000 ml', 'Large catering tray with lid for bulk biryani and curries.'],
      ['Lids', 'Matching lids for every container and tray size, supplied with the pack or separately.'],
    ],
    uses: ['Biryani and curry delivery', 'Catering and bulk food transport', 'Baking and grilling', 'Roti, roll and sandwich wrapping', 'Retail household packs'],
    guide: ['250 ml for sides and sweets; 450 ml for single curry; 660–750 ml for single biryani.', '3300 ml half-deep trays suit family packs of 4–6 portions.', '9000 ml full-deep trays are for catering quantities.', 'Longer rolls (36 m, 72 m) cost less per metre for commercial kitchens.'],
    products: [
      { slug: 'freshwrapp-aluminium-foil-roll', name: 'Freshwrapp Aluminium Foil Roll', desc: 'Genuine Hindalco Freshwrapp foil in 9 m, 18 m, 36 m and 72 m rolls for wrapping, baking and storage.',
        features: ['Food-grade aluminium from Hindalco', 'Keeps rotis and rolls warm and soft', 'Oven and grill safe', 'Four roll lengths for home and commercial use', 'Supplied by an authorised distributor'],
        specs: S('Food-grade aluminium foil', '9 m, 18 m, 36 m and 72 m rolls', 'Single rolls; carton quantities for wholesale', 'No', 'Yes', 'Yes', 'Recyclable'),
        uses: ['Roti and paratha wrapping', 'Baking and grilling', 'Retail shelves'] },
      { slug: 'aluminium-foil-container-450ml', name: 'Aluminium Foil Container with Lid – 450 ml', desc: 'A rigid foil container with a board lid, the standard pack for single curry and rice portions.',
        features: ['Retains heat well in transit', 'Lid crimps on for a secure close', 'Oven safe for reheating', 'Does not absorb oil or odour', 'Fully recyclable'],
        specs: S('Food-grade aluminium; paperboard lid', '450 ml', '50 sets per pack, 500–1,000 per carton (typical)', 'No', 'Yes', 'Yes', 'Recyclable'),
        uses: ['Curries and gravies', 'Single rice portions', 'Sweets'] },
      { slug: 'aluminium-foil-container-750ml', name: 'Aluminium Foil Container with Lid – 750 ml', desc: 'The popular single-biryani container: deep enough for a generous portion and rigid enough to stack.',
        features: ['Sized for one full biryani', 'Keeps aroma and heat locked in', 'Stackable with lids on', 'Oven and freezer safe', 'Also stocked in 250 ml and 660 ml'],
        specs: S('Food-grade aluminium; paperboard lid', '750 ml', '50 sets per pack, 500 per carton (typical)', 'No', 'Yes', 'Yes', 'Recyclable'),
        uses: ['Single biryani', 'Pulao and fried rice', 'Baked dishes'] },
      { slug: 'aluminium-foil-tray-half-deep-3300ml', name: 'Half-Deep Aluminium Tray with Lid – 3300 ml', desc: 'A family-pack foil tray with lid for bucket biryani, party orders and shared starters.',
        features: ['Holds roughly 4–6 portions', 'Rigid ribbed walls', 'Lid protects food in transit', 'Goes from oven to table', 'Recyclable after use'],
        specs: S('Food-grade aluminium; lid included', '3300 ml (half-deep)', '25–50 sets per carton (typical)', 'No', 'Yes', 'Yes', 'Recyclable'),
        uses: ['Family-pack biryani', 'Party orders', 'Baked pasta and lasagne'] },
      { slug: 'aluminium-foil-tray-full-deep-9000ml', name: 'Full-Deep Aluminium Tray with Lid – 9000 ml', desc: 'A large-capacity catering tray for transporting and serving bulk biryani, curries and desserts.',
        features: ['9-litre capacity for catering volumes', 'Strong rim for safe lifting', 'Lid keeps food hot and covered', 'Fits standard chafing setups', 'Saves washing after events'],
        specs: S('Food-grade aluminium; lid included', '9000 ml (full-deep)', '10–25 sets per carton (typical)', 'No', 'Yes', 'Yes', 'Recyclable'),
        uses: ['Wedding and function catering', 'Bulk food delivery', 'Buffet service'] },
    ],
  },
  {
    slug: 'housekeeping-material', name: 'Housekeeping Material', nav: 'Housekeeping material', art: 'spray', tone: 'mint',
    tagline: 'Cleaning supplies, garbage bags, gloves and dispensers.',
    metaTitle: 'Housekeeping Material Supplier Hyderabad | Cleaning Supplies Wholesale – SLD',
    metaDesc: 'Housekeeping material for hotels, restaurants and offices — cleaning supplies, garbage bags, gloves and dispensers. Wholesale and retail across Telangana and Andhra Pradesh.',
    intro: 'A clean kitchen and a fresh washroom are part of the product you sell. We supply the housekeeping material that hotels, restaurants, offices and institutions use every day, so it can arrive on the same delivery — and the same invoice — as your packaging.',
    seo: 'Housekeeping material supplier in Hyderabad — cleaning supplies, garbage bags, gloves and dispensers for hotels, restaurants, offices and institutions.',
    sub: [
      ['Cleaning supplies', 'Floor, surface and washroom cleaners, scrubbers, mops and wipes.'],
      ['Garbage bags', 'Small, medium, large and jumbo bags for bins of every size.'],
      ['Gloves', 'Disposable and reusable gloves for food handling and cleaning.'],
      ['Dispensers', 'Soap, sanitiser and tissue dispensers for washrooms and kitchens.'],
    ],
    uses: ['Hotel housekeeping stores', 'Restaurant kitchens and washrooms', 'Offices and co-working spaces', 'Hospitals and clinics', 'Schools and institutions'],
    guide: ['Size garbage bags to your bins — oversized bags waste money.', 'Keep separate gloves for food handling and cleaning.', 'Standardise dispensers so refills are interchangeable.', 'Plan a monthly list; housekeeping items are steady and predictable.'],
    products: [
      { slug: 'garbage-bags-large', name: 'Garbage Bags – Large', desc: 'Strong, leak-resistant bin liners for kitchen, restaurant and office waste.',
        features: ['Tear-resistant film', 'Leak-resistant base seal', 'Fits standard large bins', 'Roll or flat pack as per stock', 'Small, medium and jumbo sizes also available'],
        specs: S('Polyethylene film (compostable options on request)', 'Approx. 24 × 32 inch', '15–30 bags per roll/pack (typical)', 'Not applicable', 'Not applicable', 'Not applicable', 'As per material'),
        uses: ['Commercial kitchens', 'Hotels', 'Offices'] },
      { slug: 'disposable-gloves', name: 'Disposable Gloves', desc: 'Single-use gloves for hygienic food handling, serving and light cleaning tasks.',
        features: ['Supports food-safety practice', 'Quick to put on and remove', 'Ambidextrous fit', 'Available in more than one material', 'Economical box and carton packs'],
        specs: S('PE / vinyl / nitrile as per requirement', 'Free size or S / M / L', '100 per box (typical)', 'Not applicable', 'Not applicable', 'Not applicable', 'Single use'),
        uses: ['Food preparation', 'Serving counters', 'Housekeeping'] },
      { slug: 'soap-and-tissue-dispensers', name: 'Soap & Tissue Dispensers', desc: 'Wall-mounted dispensers that keep washrooms tidy and reduce wastage of soap and tissue.',
        features: ['Controls usage and cost', 'Simple refill mechanism', 'Wall-mount fittings', 'Easy to wipe clean', 'Matching refills supplied'],
        specs: S('Durable ABS plastic body (typical)', 'Varies by model', 'Sold individually', 'Not applicable', 'Not applicable', 'Not applicable', 'Long-life product'),
        uses: ['Restaurant washrooms', 'Hotels', 'Offices and clinics'] },
    ],
  },
];

// ── Main menu ────────────────────────────────────────────────
// Products mega menu: [label shown in menu, index of the sub-range in that category's "sub" list]
const productMenu = {
  'bagasse-tableware': { name: 'Bagasse Tableware', items: [['Plates', 0], ['Compartment Plates', 1], ['Bowls', 2], ['Clamshells', 3], ['Meal Trays', 4], ['Cups', 5]] },
  'paper-cups': { name: 'Paper Cups', items: [['Single Wall', 0], ['Double Wall', 1], ['Ripple', 2], ['Tea/Coffee Cups', 3], ['Lids & Sleeves', 4]] },
  'kraft-packaging': { name: 'Kraft Packaging', items: [['Kraft Bowls', 0], ['Salad Bowls', 1], ['Food/Noodle Boxes', 2], ['Burger Boxes', 3], ['Paper Bags', 4], ['Wooden Cutlery', 5]] },
  'pp-plastic-containers': { name: 'PP Containers', items: [['Round', 0], ['Rectangular', 1], ['Microwave-safe', 3], ['Lids', 2]] },
  'tissue-napkins': { name: 'Tissue & Napkins', items: [['Table Napkins', 0], ['Kitchen Towels', 1], ['Toilet Rolls', 2], ['Facial Tissue', 3]] },
  'aluminium-foil': { name: 'Aluminium Foil (Freshwrapp)', items: [['Foil Rolls', 0], ['Sheets', 1], ['Containers 250–750 ml', 2], ['Half Deep 3300 ml', 3], ['Full Deep 9000 ml', 4], ['Lids', 5]] },
  'housekeeping-material': { name: 'Housekeeping Material', items: [['Cleaning Supplies', 0], ['Garbage Bags', 1], ['Gloves', 2], ['Dispensers', 3]] },
};
const aboutMenu = [['history', 'Our History'], ['managing-director', 'Managing Director – G. Mahendra'], ['vision-mission', 'Vision & Mission'], ['why-choose-us', 'Why Choose Us']];
const blogMenu = ['Packaging Guides', 'Eco Packaging', 'Buying Guides', 'Industry Tips'];
const contactMenu = [['quote', 'Bulk Quote'], ['areas', 'Locations Served'], ['hours', 'Business Hours']];

module.exports = { productMenu, aboutMenu, blogMenu, contactMenu, company, stats, areas, popularSearches, heroSlides, approach, steps, why, testimonials, faqs, timeline, categories };
