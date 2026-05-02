# Yazoo Investment Srl — Propuesta de Sitio Web

Propuesta de sitio web corporativo desarrollada para **Yazoo Investment Srl**, empresa de producción y distribución de rones del Caribe.

> ⚠️ Este es un proyecto de propuesta. No representa un producto final contratado.

---

## ¿Qué es esto?

Sitio web estático de 6 páginas construido con HTML, CSS y JavaScript vanilla. Sin frameworks ni proceso de build.

**Páginas incluidas:** Inicio · Quiénes Somos · Servicios · Producción · Impacto Social · Contacto

---

## Características Técnicas

- **Sin dependencias** — HTML5, CSS3 y JavaScript ES6+ nativo. No requiere npm, Node.js ni proceso de build para funcionar.
- **Diseño responsive** — Adaptado para escritorio, tablet y móvil mediante media queries.
- **Sistema de animaciones premium** — Revelado de elementos al hacer scroll (IntersectionObserver), paralaje en secciones hero, animación de contadores numéricos, elevación de tarjetas al pasar el cursor, zoom de imágenes y encogimiento del navbar al desplazarse.
- **Verificación de edad** — Modal que aparece al iniciar cada sesión. Valida la fecha de nacimiento y bloquea el acceso a menores de 18 años. Usa `sessionStorage` para no repetir la verificación durante la misma sesión.
- **Bilingüe EN / ES** — Selector de idioma en el navbar. Detecta automáticamente el idioma del navegador. La preferencia se guarda en `localStorage` y se aplica en todas las páginas sin recargar.
- **Navegación consistente** — El mismo header con logo oficial en todas las páginas. El enlace activo se resalta según la página actual.
- **Tailwind CSS vía CDN** — Configuración personalizada con los tokens de color y tipografía de la marca (Epilogue, Manrope, paleta ámbar/crema).

---

## Estructura

```
├── index.html / who-we-are.html / services.html / ...
├── css/   → tokens, animaciones, age-gate
├── js/    → age-gate, animaciones, i18n
└── img/   → logo y fotografías
```

---

## Uso

No requiere instalación. Abrir `index.html` en el navegador o servir con cualquier servidor HTTP estático.
