// js/i18n.js — Yazoo Investment Language Switcher (EN / ES)
(function () {
  'use strict';

  // ── Full Translation Dictionary ───────────────────────────────────────────
  const translations = {
    es: {
      // ── Navigation ──────────────────────────────────────────────────────
      "Home": "Inicio",
      "Who We Are": "Quiénes Somos",
      "Services": "Servicios",
      "Production": "Producción",
      "Social Impact": "Impacto Social",
      "Contact Us": "Contáctenos",
      "EN | ES": "EN | ES",

      // ── Common CTA / Shared ─────────────────────────────────────────────
      "See Our Services": "Ver Nuestros Servicios",
      "See Our Services →": "Ver Nuestros Servicios →",
      "Discover Our Production": "Descubrir Nuestra Producción",
      "Discover Our Production →": "Descubrir Nuestra Producción →",
      "Discover Our Production ": "Descubrir Nuestra Producción ",
      "Learn More": "Saber Más",
      "Contact Us →": "Contáctenos →",
      "Enter Site": "Ingresar al Sitio",
      "Read More": "Leer Más",
      "View All": "Ver Todo",
      "arrow_forward": "arrow_forward",
      "arrow_back": "arrow_back",

      // ── Homepage Hero ───────────────────────────────────────────────────
      "Yazoo Investment Srl": "Yazoo Investment Srl",
      "Rones y Bebidas del Caribe": "Rones y Bebidas del Caribe",
      "Specialists in the Production and Aging of Rum": "Especialistas en la Producción y Añejamiento del Ron",

      // ── Homepage Intro ──────────────────────────────────────────────────
      "A Legacy of Excellence in Rum": "Un Legado de Excelencia en Ron",
      "Founded in 2006 in San Pedro de Macorís, Dominican Republic, Yazoo Investment has established itself as a guardian of Caribbean tradition and rum excellence. With over 90,000 barrels aging in our state-of-the-art facilities, we craft spirits that carry the soul of the Caribbean to 33 countries worldwide.":
        "Fundada en 2006 en San Pedro de Macorís, República Dominicana, Yazoo Investment se ha consolidado como guardián de la tradición caribeña y la excelencia en rones. Con más de 90,000 barricas añejando en nuestras instalaciones de vanguardia, creamos espíritus que llevan el alma del Caribe a 33 países del mundo.",

      // ── Services ───────────────────────────────────────────────────────
      "Rum Aging": "Añejamiento de Ron",
      "Co-Packing": "Co-Envasado",
      "Barrel Workshop": "Taller de Barricas",
      "Bodega Ron del Caribe": "Bodega Ron del Caribe",
      "Our state-of-the-art aging facilities house over 90,000 barrels, creating the ideal conditions for premium spirit development.":
        "Nuestras instalaciones de añejamiento albergan más de 90,000 barricas, creando las condiciones ideales para el desarrollo de espíritus premium.",
      "Complete packaging solutions for private label and third-party rum brands, from bottling to labeling and distribution.":
        "Soluciones completas de empaque para marcas de ron de etiqueta privada y terceros, desde el embotellado hasta el etiquetado y la distribución.",
      "Specialized barrel maintenance, reconditioning, and craftsmanship for optimal spirit aging and flavor development.":
        "Mantenimiento especializado, reacondicionamiento y artesanía de barricas para un óptimo añejamiento y desarrollo del sabor.",
      "Our premium retail experience showcasing the finest Caribbean spirits, open to connoisseurs and enthusiasts alike.":
        "Nuestra experiencia de venta al público premium que exhibe los mejores espíritus caribeños, abierta a conocedores y entusiastas.",

      // ── Who We Are ─────────────────────────────────────────────────────
      "A Legacy of Excellence": "Un Legado de Excelencia",
      "Founded in 2006 in San Pedro de Macorís, Dominican Republic, Yazoo Investment has established itself as a guardian of Caribbean tradition. Operating from three state-of-the-art aging warehouses with over 90,000 barrels, we currently export our refined heritage to 33 countries across the globe.":
        "Fundada en 2006 en San Pedro de Macorís, República Dominicana, Yazoo Investment se ha consolidado como guardián de la tradición caribeña. Operando desde tres almacenes de añejamiento de vanguardia con más de 90,000 barricas, actualmente exportamos nuestro refinado patrimonio a 33 países del mundo.",
      "90K Barrels": "90K Barricas",
      "375 Products": "375 Productos",
      "Mission": "Misión",
      "Vision": "Visión",
      "To offer innovative alternatives in rums that meet quality standards, ensuring every bottle carries the soul of the Caribbean and the excellence of our craft.":
        "Ofrecer alternativas innovadoras en rones que cumplan los estándares de calidad, garantizando que cada botella lleve el alma del Caribe y la excelencia de nuestra artesanía.",
      "To consolidate as top-quality alcoholic beverage producer nationally and internationally, becoming the global benchmark for Dominican spirits.":
        "Consolidarse como productor de bebidas alcohólicas de primera calidad a nivel nacional e internacional, convirtiéndose en el referente mundial de los espíritus dominicanos.",
      "This story began in Venezuela…": "Esta historia comenzó en Venezuela…",
      "…continuing in the Dominican Republic": "…continuando en la República Dominicana",
      "1993: Origin": "1993: Origen",
      "The foundations of our distilling expertise are established with the first experimental blends.":
        "Se establecen las bases de nuestra experiencia en destilación con las primeras mezclas experimentales.",
      "1997: Sales Growth": "1997: Crecimiento en Ventas",
      "Rapid expansion across regional markets leads to the brand's first major commercial success.":
        "La rápida expansión en los mercados regionales conduce al primer gran éxito comercial de la marca.",
      "2001: Acquisition": "2001: Adquisición",
      "Strategic acquisition of premium aging facilities to secure future inventory quality.":
        "Adquisición estratégica de instalaciones de añejamiento premium para asegurar la calidad futura del inventario.",
      "2006: Constitution in DR": "2006: Constitución en RD",
      "Official founding of Yazoo Investment Srl in San Pedro de Macorís, Dominican Republic.":
        "Fundación oficial de Yazoo Investment Srl en San Pedro de Macorís, República Dominicana.",
      "2008: Expansion": "2008: Expansión",
      "Inauguration of the second major aging warehouse to double production capacity.":
        "Inauguración del segundo gran almacén de añejamiento para duplicar la capacidad de producción.",
      "2018: Organic Growth": "2018: Crecimiento Orgánico",
      "Achieving a milestone of 375+ unique formulas and presence in over 30 countries.":
        "Alcanzando un hito de 375+ fórmulas únicas y presencia en más de 30 países.",

      // ── Stats Sections ─────────────────────────────────────────────────
      "Barrels / 33 Countries": "Barricas / 33 Países",
      "Proprietary Formulas": "Fórmulas Propietarias",
      "International Awards": "Premios Internacionales",
      "90K": "90K",
      "375+": "375+",
      "60+": "60+",
      "Beyond distilling, we are committed to our community through the AFD-Barceló Foundation, supporting education and local development in the region.":
        "Más allá de la destilación, estamos comprometidos con nuestra comunidad a través de la Fundación AFD-Barceló, apoyando la educación y el desarrollo local en la región.",
      "Social Impact ": "Impacto Social ",

      // ── Production ─────────────────────────────────────────────────────
      "Raw Material": "Materia Prima",
      "Technical Department": "Departamento Técnico",
      "Certifications": "Certificaciones",
      "Facilities": "Instalaciones",
      "Our production process guarantees the 100% Dominican origin of our rums.":
        "Nuestro proceso de producción garantiza el origen 100% dominicano de nuestros rones.",
      "Our production process guarantees the 100% Dominican origin of our rums. ":
        "Nuestro proceso de producción garantiza el origen 100% dominicano de nuestros rones. ",
      "100%": "100%",
      "Dominican Origin": "Origen Dominicano",
      "345": "345",
      "Tanks": "Tanques",
      "Certified Products": "Productos Certificados",

      // ── Social Impact ──────────────────────────────────────────────────
      "Social Impact": "Impacto Social",
      "300+": "300+",
      "Families Supported": "Familias Apoyadas",
      "500+": "500+",
      "Students Educated": "Estudiantes Educados",
      "The AFD-Barceló Foundation": "La Fundación AFD-Barceló",
      "Helping Others": "Ayudando a Otros",
      "Community Programs": "Programas Comunitarios",
      "Education": "Educación",
      "Future Commitment": "Compromiso con el Futuro",

      // ── Contact ────────────────────────────────────────────────────────
      "Contact Us": "Contáctenos",
      "Get in Touch": "Póngase en Contacto",
      "Send a Message": "Enviar un Mensaje",
      "Full Name": "Nombre Completo",
      "Email Address": "Correo Electrónico",
      "Subject": "Asunto",
      "Message": "Mensaje",
      "Send Message": "Enviar Mensaje",
      "Dominican Republic HQ": "Sede en República Dominicana",
      "San Pedro de Macorís, Dominican Republic": "San Pedro de Macorís, República Dominicana",
      "Inquiries": "Consultas",
      "info@yazooinvestment.com": "info@yazooinvestment.com",

      // ── Footer ─────────────────────────────────────────────────────────
      "Privacy Policy": "Política de Privacidad",
      "Terms of Service": "Términos de Servicio",
      "© 2024 Yazoo Investment Srl. Distilling Excellence Since 1982. Enjoy Responsibly.":
        "© 2024 Yazoo Investment Srl. Destilando Excelencia Desde 1982. Disfruta con Responsabilidad.",

      // ── Age Gate ───────────────────────────────────────────────────────
      "Ron y Bebidas del Caribe": "Ron y Bebidas del Caribe",
      "Are you of legal age in your country of residence?": "¿Eres mayor de edad en tu país de residencia?",
      "You must be of legal drinking age to enter this site. By entering, you agree to our Terms of Service and Privacy Policy.":
        "Debes ser mayor de edad para consumir alcohol en tu país de residencia para acceder a este sitio. Al entrar, aceptas nuestros Términos de Servicio y Política de Privacidad.",
      "Month": "Mes",
      "Day": "Día",
      "Year": "Año",
      "Jan": "Ene", "Feb": "Feb", "Mar": "Mar", "Apr": "Abr",
      "May": "May", "Jun": "Jun", "Jul": "Jul", "Aug": "Ago",
      "Sep": "Sep", "Oct": "Oct", "Nov": "Nov", "Dec": "Dic",
      "Please select your full date of birth.": "Por favor selecciona tu fecha de nacimiento completa.",
      "You must be 18 or older to enter this site.": "Debes tener 18 años o más para entrar a este sitio.",
      "We're sorry, but this website contains content intended for adults of legal drinking age only. Please come back when you meet the age requirement in your country of residence.":
        "Lo sentimos, pero este sitio web contiene contenido destinado únicamente a adultos en edad legal para consumir alcohol. Por favor vuelve cuando cumplas con el requisito de edad en tu país de residencia.",
      "© Yazoo Investment Srl — Enjoy Responsibly": "© Yazoo Investment Srl — Disfruta con Responsabilidad",

      // ── Rones y Bebidas tagline ────────────────────────────────────────
      "Rones y Bebidas del Caribe Yazoo": "Rones y Bebidas del Caribe Yazoo",
    }
  };

  // ── Language Detection ─────────────────────────────────────────────────────
  const STORAGE_KEY = 'yazoo_lang';
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browser.startsWith('es') ? 'es' : 'en';
  }

  let currentLang = detectLang();

  // ── Text Node Walker ───────────────────────────────────────────────────────
  function walkTextNodes(root, callback) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (parent.id === 'age-gate-overlay') return NodeFilter.FILTER_SKIP;
        if (node.nodeValue.trim().length < 2) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) callback(node);
  }

  // Store original EN text on first run
  let originalTexts = new Map();

  function cacheOriginals(root) {
    walkTextNodes(root, node => {
      if (!originalTexts.has(node)) {
        originalTexts.set(node, node.nodeValue);
      }
    });
  }

  function applyLanguage(lang) {
    const dict = lang === 'es' ? translations.es : null;
    walkTextNodes(document.body, node => {
      const original = originalTexts.get(node) ?? node.nodeValue;
      if (!originalTexts.has(node)) originalTexts.set(node, original);

      if (dict) {
        const trimmed = original.trim();
        if (dict[trimmed] !== undefined) {
          node.nodeValue = original.replace(trimmed, dict[trimmed]);
        }
      } else {
        // Restore English
        node.nodeValue = original;
      }
    });

    // Also handle placeholder attributes on inputs
    document.querySelectorAll('[placeholder]').forEach(el => {
      const orig = el.dataset.origPlaceholder ?? el.getAttribute('placeholder');
      el.dataset.origPlaceholder = orig;
      el.setAttribute('placeholder', dict?.[orig] ?? orig);
    });

    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateSwitcherUI();
  }

  // ── Switcher UI ────────────────────────────────────────────────────────────
  function buildSwitcher() {
    const existing = document.querySelector('header span, header div');
    // Find the EN | ES span
    let switcher = null;
    document.querySelectorAll('header span, header div').forEach(el => {
      if (el.textContent.includes('EN') && el.textContent.includes('ES')) switcher = el;
    });
    if (!switcher) return;

    switcher.innerHTML = `
      <button id="lang-en" style="
        background:none;border:none;cursor:pointer;font-weight:700;
        font-size:13px;letter-spacing:.05em;padding:2px 4px;
        transition:opacity .2s;font-family:inherit;color:inherit;
      ">EN</button>
      <span style="opacity:.4;font-size:11px;margin:0 2px;">|</span>
      <button id="lang-es" style="
        background:none;border:none;cursor:pointer;font-weight:400;
        font-size:13px;letter-spacing:.05em;padding:2px 4px;
        transition:opacity .2s;font-family:inherit;color:inherit;opacity:.5;
      ">ES</button>
    `;

    document.getElementById('lang-en').addEventListener('click', () => applyLanguage('en'));
    document.getElementById('lang-es').addEventListener('click', () => applyLanguage('es'));
  }

  function updateSwitcherUI() {
    const enBtn = document.getElementById('lang-en');
    const esBtn = document.getElementById('lang-es');
    if (!enBtn || !esBtn) return;
    if (currentLang === 'es') {
      enBtn.style.fontWeight = '400';
      enBtn.style.opacity = '.5';
      esBtn.style.fontWeight = '700';
      esBtn.style.opacity = '1';
    } else {
      enBtn.style.fontWeight = '700';
      enBtn.style.opacity = '1';
      esBtn.style.fontWeight = '400';
      esBtn.style.opacity = '.5';
    }
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    cacheOriginals(document.body);
    buildSwitcher();
    if (currentLang === 'es') applyLanguage('es');
    else updateSwitcherUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100); // wait for animations.js to settle
  }
})();
