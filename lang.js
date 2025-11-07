// lang.js
const langSelect = document.querySelector('.lang-select');
const html = document.documentElement;

// Translation data
const translations = {
  en: {
    Home: "Home",
    About: "About Us",
    Services: "Services",
    Location: "Location",
    Contact: "Contact Form",
    heroTitle: "Partners in the past and present",
    heroText: "We build trust through our experience and our clients.",
    joinUs: "Join Us",
    ourServices: "Our Services",
    servicesSubtitle: "Comprehensive real estate solutions tailored to your needs",
    buildingsTitle: "Our Buildings",
    buildingsSubtitle: "We offer all the building types to match your needs",
    whyJoin: "Why Join Us",
    fromFoundation: "From Foundation to Future",
    fromFoundationText:
      "We don't just build structures; we build value. Our integrated approach combines visionary design, quality construction, and strategic management to create properties that stand the test of time and deliver lasting returns.",
    exploreBtn: "Explore Properties",
    qualityTitle: "Uncompromising Quality, Unmatched Craftsmanship",
    qualityText:
      "We believe that true quality is found in the details. From the finest materials to the most precise execution, our commitment to craftsmanship is unwavering.",
    learnMore: "Learn More About Our Process",
    contactTitle: "Get in Touch",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send Message",
    contactInfo: "Contact Information",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    footerText:
      "Your partner in building the future. We provide comprehensive real estate solutions with a focus on quality, innovation, and client satisfaction.",
    connect: "Connect With Us",
    quickLinks: "Quick Links",
    copyRight: "© 2025 ALhelali. All Rights Reserved.",
    servicesTitle: [
      "Real Estate Marketing",
      "Real Estate Brokerage",
      "Property Management",
      "Real Estate Buying and Selling",
      "Real Estate Operation",
      "Real Estate Development",
      "Facilities Management",
      "Real Estate Auctions",
      "Feasibility Study",
      "General Contracting"
    ],
    servicesDesc: [
      "We manage the entire development process—from land acquisition to the final delivery of residential, commercial, and mixed-use projects.",
      "Acting as trusted intermediaries, we connect buyers and sellers, tenants and landlords with expertise and integrity.",
      "Comprehensive oversight of leased properties, including tenant screening, rent collection, legal compliance, and regular financial reporting.",
      "Facilitating smooth and legally sound Real Estate Buying and Selling transactions with professional guidance.",
      "Ensuring the continuous and effective running of occupied assets to maintain high tenant satisfaction and property performance.",
      "We manage the entire development process—from land acquisition, securing financing, architectural design, to final delivery.",
      "Managing the essential services and maintenance of a building to support functionality, safety, and sustainability.",
      "Providing a transparent and efficient mechanism for the swift sale or acquisition of specific properties to achieve optimal market value.",
      "Comprehensive market, financial, and technical analysis to validate the viability and profitability of any proposed development project.",
      "Our dedicated construction division oversees all building activities, ensuring projects are delivered on time and within budget."
    ],
    buildingsDescone: [
      "Residential Apartments for Rent",
      "Residential Apartments for Sale",
      "Furnished Apartments for Investment",
      "Villas for Sale / Rent",
      "Palace / Mansion for Sale",
      "House for Sale / Rent",
      "Townhouse for Sale / Rent",
      "Residential Building for Sale / Rent",
      "Residential Apartments for Rent",
      "Residential Apartments for Sale",
      "Furnished Apartments for Investment",
      "Palace / Mansion for Sale",
      "House for Sale / Rent",
      "Townhouse for Sale / Rent",
      "Residential Building for Sale / Rent"
    ],
    buildingsDesctwo: [
      "Building for Investment",
      "Room for Rent",
      "Studio Apartment for Rent",
      "Compound for Sale",
      "Tower for Investment / Sale",
      "Farm for Investment / Sale",
      "Land for Investment",
      "Raw Land / Undeveloped Land for Sale",
      "Building for Investment",
      "Room for Rent",
      "Studio Apartment for Rent",
      "Compound for Sale",
      "Tower for Investment / Sale",
      "Farm for Investment / Sale",
      "Land for Investment",
      "Raw Land / Undeveloped Land for Sale"
    ],
    joinusTitle:[
      "Landmark Project Portfolio",
      "Visionary Strategic Planning",
      "Elite Collaborative Team",
      "Proven Track Record & Expertise",
      "Commitment to Quality & Safety"
    ],
    joinusDesc:[
      "Build major, high-impact national infrastructure and city projects.",
      "Our clear strategy guarantees market leadership and sustained growth.",
      "Work alongside the industry's most skilled engineers and professionals.",
      "Decades of experience building large-scale, complex, and iconic projects.",
      "We uphold the highest standards for durable construction and security."
    ],
    futureTitle: "The Future of Real Estate",
    futureCards: [
      {
        title: "Innovation",
        desc: "We embrace cutting-edge technology and forward-thinking design to create intelligent, future-proof properties that redefine modern living."
      },
      {
        title: "Sustainability",
        desc: "Our commitment to green building practices ensures that our projects are environmentally responsible, energy-efficient, and built to last for generations."
      },
      {
        title: "Client-Centric Approach",
        desc: "We prioritize our clients’ goals, delivering personalized solutions that align with their vision and exceed expectations."
      }
    ],

    // --- Marketing & Brokerage Section ---
    marketingTitle: "Real Estate Marketing & Brokerage",
    marketingSubtitle: "Connecting buyers and sellers with expertise and integrity.",
    marketingItems: [
      {
        title: "Strategic Marketing",
        desc: "We create targeted marketing campaigns that showcase your property to the right audience, maximizing its visibility and appeal."
      },
      {
        title: "Expert Brokerage",
        desc: "Our experienced brokers guide you through every step of the buying or selling process, ensuring a smooth and successful transaction."
      },
      {
        title: "Investment Advisory",
        desc: "We provide expert advice to help you make informed investment decisions and achieve your financial goals in the real estate market."
      }
    ],

    // --- Stats Section ---
    statsTitle: "Our Impact in Numbers",
    statsItems: [
      { number: "1200+", label: "Successful Deals" },
      { number: "800+", label: "Properties Managed" },
      { number: "95%", label: "Client Retention" }
    ]
  },

  ar: {
    Home: "الرئيسية",
    About: "من نحن",
    Services: "الخدمات",
    Location: "الموقع",
    Contact: "نموذج التواصل",
    heroTitle: "شركاء في الماضي والحاضر",
    heroText: "نحن نبني الثقة من خلال خبرتنا وعملائنا.",
    joinUs: "انضم إلينا",
    ourServices: "خدماتنا",
    servicesSubtitle: "حلول عقارية شاملة مصممة لتلبية احتياجاتك",
    buildingsTitle: "اعمالانا",
    buildingsSubtitle: "نقدم جميع أنواع المباني لتناسب احتياجاتك",
    whyJoin: "لماذا تنضم إلينا",
    fromFoundation: "من الأساس إلى المستقبل",
    fromFoundationText:
      "نحن لا نبني الهياكل فقط، بل نبني القيمة. يجمع نهجنا المتكامل بين التصميم والرؤية والبناء عالي الجودة والإدارة الإستراتيجية لإنشاء عقارات تدوم طويلاً وتحقق عوائد مستدامة.",
    exploreBtn: "اكتشف العقارات",
    qualityTitle: "جودة لا تقبل المساومة وحرفية لا مثيل لها",
    qualityText:
      "نؤمن أن الجودة الحقيقية تكمن في التفاصيل. من أجود المواد إلى أدق التنفيذ، التزامنا بالحرفية لا يتزعزع.",
    learnMore: "تعرف أكثر على عمليتنا",
    contactTitle: "تواصل معنا",
    name: "اسمك",
    email: "بريدك الإلكتروني",
    message: "رسالتك",
    send: "إرسال",
    contactInfo: "معلومات التواصل",
    phone: "الهاتف",
    whatsapp: "واتساب",
    address: "العنوان",
    footerText:
      "شريكك في بناء المستقبل. نقدم حلولاً عقارية شاملة تركز على الجودة والابتكار ورضا العملاء.",
    connect: "تواصل معنا",
    quickLinks: "روابط سريعة",
    copyRight: "© 2025 الحللي. جميع الحقوق محفوظة.",
        servicesTitle: [
      "التسويق العقاري",
      "الوساطة العقارية",
      "إدارة الأملاك",
      "بيع وشراء العقارات",
      "تشغيل العقارات",
      "التطوير العقاري",
      "إدارة المرافق",
      "المزادات العقارية",
      "دراسات الجدوى",
      "المقاولات العامة",
    ],
    servicesDesc: [
      "ندير عملية التطوير بالكامل – من شراء الأراضي حتى التسليم النهائي للمشاريع السكنية والتجارية والمشاريع متعددة الاستخدامات.",
      "نقوم بدور الوسيط الموثوق الذي يربط بين المشترين والبائعين، والمستأجرين والملاك بخبرة ومصداقية عالية.",
      "إشراف شامل على العقارات المؤجرة يشمل اختيار المستأجرين، تحصيل الإيجارات، الالتزام القانوني، والتقارير المالية الدورية.",
      "تيسير عمليات البيع والشراء العقارية بطريقة سلسة وآمنة قانونيًا مع تقديم الإرشاد المهني.",
      "ضمان التشغيل المستمر والفعال للأصول المشغولة للحفاظ على رضا المستأجرين وتحسين أداء العقار.",
      "ندير عملية التطوير بالكامل – من شراء الأراضي، وتأمين التمويل، والتصميم المعماري، حتى التسليم النهائي.",
      "إدارة الخدمات الأساسية وصيانة المباني لدعم الوظائف والسلامة والاستدامة.",
      "توفير آلية شفافة وفعالة للبيع أو الشراء السريع للعقارات لتحقيق أعلى قيمة سوقية ممكنة.",
      "تحليل شامل للسوق والجوانب المالية والفنية للتحقق من جدوى وربحية أي مشروع تطوير عقاري مقترح.",
      "يشرف قسم المقاولات لدينا على جميع أنشطة البناء، لضمان تسليم المشاريع في الوقت المحدد وضمن الميزانية المحددة.",
    ],
    buildingsDescone: [
  "شقق سكنية للإيجار",
  "شقق سكنية للبيع",
  "شقق مفروشة للاستثمار",
  "فلل للبيع / للإيجار",
  "قصور / منازل فخمة للبيع",
  "منزل للبيع / للإيجار",
  "تاون هاوس للبيع / للإيجار",
  "عمارة سكنية للبيع / للإيجار",
  "شقق سكنية للإيجار",
  "شقق سكنية للبيع",
  "شقق مفروشة للاستثمار",
  "قصور / منازل فخمة للبيع",
  "منزل للبيع / للإيجار",
  "تاون هاوس للبيع / للإيجار",
  "عمارة سكنية للبيع / للإيجار"
],

buildingsDesctwo: [
  "عمارة استثمارية",
  "غرفة للإيجار",
  "استوديو للإيجار",
  "مجمع سكني للبيع",
  "برج للاستثمار / للبيع",
  "مزرعة للاستثمار / للبيع",
  "أرض للاستثمار",
  "أرض خام / غير مطورة للبيع",
  "عمارة استثمارية",
  "غرفة للإيجار",
  "استوديو للإيجار",
  "مجمع سكني للبيع",
  "برج للاستثمار / للبيع",
  "مزرعة للاستثمار / للبيع",
  "أرض للاستثمار",
  "أرض خام / غير مطورة للبيع"
],
joinusTitle: [
  "محفظة مشاريع بارزة",
  "تخطيط استراتيجي برؤية مستقبلية",
  "فريق عمل نخبة متعاون",
  "سجل حافل بالخبرة والإنجازات",
  "التزام بالجودة والسلامة"
],

joinusDesc: [
  "نبني مشاريع وطنية كبرى وبنية تحتية مؤثرة على مستوى الدولة.",
  "استراتيجيتنا الواضحة تضمن الريادة في السوق والنمو المستدام.",
  "نعمل جنبًا إلى جنب مع نخبة من المهندسين والمحترفين في القطاع.",
  "عقود من الخبرة في تنفيذ مشاريع ضخمة ومعقدة وأيقونية.",
  "نلتزم بأعلى معايير الجودة والمتانة والسلامة في جميع أعمالنا."
],
futureTitle: "مستقبل العقارات",
    futureCards: [
      {
        title: "الابتكار",
        desc: "نواكب أحدث التقنيات والتصاميم المستقبلية لإنشاء عقارات ذكية تواكب العصر وتعيد تعريف أسلوب المعيشة الحديثة."
      },
      {
        title: "الاستدامة",
        desc: "نلتزم بممارسات البناء الخضراء لضمان مشاريع مسؤولة بيئيًا، وموفرة للطاقة، ومصممة لتدوم لأجيال قادمة."
      },
      {
        title: "نهج يركز على العميل",
        desc: "نضع أهداف عملائنا في المقام الأول، ونوفر حلولًا مخصصة تتماشى مع رؤيتهم وتتجاوز توقعاتهم."
      }
    ],

    // --- Marketing & Brokerage Section ---
    marketingTitle: "التسويق والوساطة العقارية",
    marketingSubtitle: "نربط بين المشترين والبائعين بخبرة ونزاهة.",
    marketingItems: [
      {
        title: "التسويق الاستراتيجي",
        desc: "ننشئ حملات تسويقية موجهة تُبرز عقارك للجمهور المناسب، مما يزيد من جاذبيته وانتشاره."
      },
      {
        title: "الوساطة الاحترافية",
        desc: "يُرشدك وسطاءنا الخبراء في جميع مراحل عملية البيع أو الشراء لضمان تجربة سلسة وناجحة."
      },
      {
        title: "الاستشارات الاستثمارية",
        desc: "نقدم لك نصائح احترافية لمساعدتك على اتخاذ قرارات استثمارية مدروسة وتحقيق أهدافك المالية في سوق العقارات."
      }
    ],

    // --- Stats Section ---
    statsTitle: "أثرنا بالأرقام",
    statsItems: [
      { number: "1200+", label: "صفقة ناجحة" },
      { number: "800+", label: "عقار مُدار" },
      { number: "95%", label: "نسبة احتفاظ العملاء" }
    ]
  },
};

// Helper to update text
function updateLanguage(lang) {
  const t = translations[lang];
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    const translation = key.split('.').reduce((obj, i) => obj && obj[i], t);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Navbar
  document.querySelectorAll('.nav-links a')[0].textContent = t.Home;
  document.querySelectorAll('.nav-links a')[1].textContent = t.About;
  document.querySelectorAll('.nav-links a')[2].textContent = t.Services;
  document.querySelectorAll('.nav-links a')[3].textContent = t.Location;
  document.querySelectorAll('.nav-links a')[4].textContent = t.Contact;

  // Hero
  document.querySelector('.hero-content h2').textContent = t.heroTitle;
  document.querySelector('.hero-content p').textContent = t.heroText;
  document.querySelector('.btn-primary').textContent = t.joinUs;

  // Services
  document.querySelector('.section-title').textContent = t.ourServices;
  document.querySelector('.section-subtitle').textContent = t.servicesSubtitle;

  // Buildings
  document.querySelector('.building-section .section-title').textContent = t.buildingsTitle;
  document.querySelector('.building-section .section-subtitle').textContent = t.buildingsSubtitle;

  // Why Join Us
  document.querySelector('.why-join-us-section h2').textContent = t.whyJoin;

  // Real Estate
  document.querySelector('.real-estate-title').textContent = t.fromFoundation;
  document.querySelector('.real-estate-subtitle').textContent = t.fromFoundationText;
  document.querySelector('.btn-secondary').textContent = t.exploreBtn;

  // Quality Section
  document.querySelector('.quality-title').textContent = t.qualityTitle;
  document.querySelector('.quality-description').textContent = t.qualityText;
  document.querySelector('.btn-tertiary').textContent = t.learnMore;

  // Contact Section
  document.querySelector('.contact-form-container .section-title').textContent = t.contactTitle;
  document.querySelector('input[name="name"]').placeholder = t.name;
  document.querySelector('input[name="email"]').placeholder = t.email;
  document.querySelector('textarea[name="message"]').placeholder = t.message;
  document.querySelector('.contact-form button').textContent = t.send;

  document.querySelector('.contact-info h3').textContent = t.contactInfo;
  const info = document.querySelectorAll('.contact-info p');
  info[0].innerHTML = `<strong>${t.phone}:</strong> 8002444020`;
  info[1].innerHTML = `<strong>${t.whatsapp}:</strong> +966530005630`;
  info[3].innerHTML = `<strong>${t.address}:</strong> 123 Main Street, Riyadh, Saudi Arabia`;

  // Footer
  document.querySelector('.footer-column p').textContent = t.footerText;
  document.querySelectorAll('.footer-column h3')[0].textContent = t.connect;
  document.querySelectorAll('.footer-column h3')[1].textContent = t.quickLinks;
  document.querySelector('.copyright-notice p').textContent = t.copyRight;
}

function updateServices(lang) {
  const cards = document.querySelectorAll(".service-card");
  const titles = translations[lang].servicesTitle;
  const descs = translations[lang].servicesDesc;

  cards.forEach((card, index) => {
    const titleEl = card.querySelector("h3");
    const descEl = card.querySelector("p");

    if (titleEl && titles[index]) titleEl.textContent = titles[index];
    if (descEl && descs[index]) descEl.textContent = descs[index];
  });

  // Optional: Set direction (RTL/LTR)
  // document.body.dir = lang === "ar" ? "rtl" : "ltr";
}
function updateBuildings(lang) {
  const t = translations[lang];
  const partOneCards = document.querySelectorAll(".part-one .buidlings-card h4");
  const partTwoCards = document.querySelectorAll(".part-two .buidlings-card h4");

  const descOne = t.buildingsDescone;
  const descTwo = t.buildingsDesctwo;

  // Update part one
  partOneCards.forEach((el, index) => {
    if (descOne[index]) el.textContent = descOne[index];
  });

  // Update part two
  partTwoCards.forEach((el, index) => {
    if (descTwo[index]) el.textContent = descTwo[index];
  });

  // Optional RTL handling
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}
function updateFutureSection(lang) {
  const t = translations[lang];
  document.querySelector("#future-real-estate .section-title").textContent = t.futureTitle;

  const cards = document.querySelectorAll("#future-real-estate .feature-card-item");
  cards.forEach((card, i) => {
    card.querySelector(".feature-title").textContent = t.futureCards[i].title;
    card.querySelector(".feature-description").textContent = t.futureCards[i].desc;
  });
}

function updateStatsSection(lang) {
  const t = translations[lang];
  document.querySelector("#marketing-brokerage-stats-section .section-title").textContent = t.statsTitle;

  const stats = document.querySelectorAll("#marketing-brokerage-stats-section .stat-item");
  stats.forEach((stat, i) => {
    stat.querySelector("p").textContent = t.statsItems[i].label;
  });
}


const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Event listener for language change
langSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  updateLanguage(lang);
  updateServices(lang);
  updateBuildings(lang);
  updateFutureSection(lang);
  updateStatsSection(lang);
  localStorage.setItem('siteLang', lang);
});

// On load, restore saved language
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLang') || 'en';
  langSelect.value = savedLang;
  updateLanguage(savedLang);
  updateServices(savedLang);
  updateBuildings(savedLang);
  updateFutureSection(savedLang);
  updateStatsSection(savedLang)
});
