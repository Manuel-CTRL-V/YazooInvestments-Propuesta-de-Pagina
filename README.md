# Yazoo Investment Srl — Sitio Web Corporativo

Sitio web institucional de **Yazoo Investment Srl**, empresa especializada en la producción, añejamiento y distribución de rones y bebidas del Caribe. Fundada en San Pedro de Macorís, República Dominicana, con más de 30 años de historia y presencia en 33 países.

---

## Descripción

Este repositorio contiene el código fuente completo del sitio web corporativo de Yazoo Investment Srl. El sitio fue diseñado para reflejar la identidad premium de la marca, con una estética cálida y elegante basada en tonos ámbar, crema y marrón oscuro, fiel al sistema de diseño oficial de la empresa.

El sitio está construido completamente en HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias de construcción. Funciona directamente desde el sistema de archivos o desde cualquier servidor web estático.

---

## Páginas

- **Inicio** — Hero de pantalla completa, introducción a la marca, servicios destacados y estadísticas clave.
- **Quiénes Somos** — Historia de la empresa desde 1993, línea de tiempo interactiva, misión, visión y galería.
- **Servicios** — Los cuatro servicios principales: Añejamiento de Ron, Co-Envasado, Taller de Barricas y Bodega Ron del Caribe.
- **Producción** — Proceso productivo, materia prima, departamento técnico, certificaciones y galería de instalaciones.
- **Impacto Social** — Programas comunitarios y educativos a través de la Fundación AFD-Barceló.
- **Contáctenos** — Formulario con validación en tiempo real, información de contacto y mapa de ubicación.

---

## Características Técnicas

- **Sin frameworks ni dependencias** — HTML5, CSS3 y JavaScript ES6+ nativo. No requiere npm, Node.js ni proceso de build para funcionar.
- **Diseño responsive** — Adaptado para escritorio, tablet y móvil mediante media queries.
- **Sistema de animaciones premium** — Revelado de elementos al hacer scroll (IntersectionObserver), paralaje en secciones hero, animación de contadores numéricos, elevación de tarjetas al pasar el cursor, zoom de imágenes y efecto de encogimiento del navbar al desplazarse.
- **Verificación de edad** — Modal de puerta de edad que aparece al iniciar cada sesión. Valida la fecha de nacimiento ingresada y bloquea el acceso a menores de 18 años. Utiliza `sessionStorage` para no repetir la verificación durante la misma sesión de navegación.
- **Bilingüe EN / ES** — Selector de idioma en la barra de navegación. Detecta automáticamente el idioma del navegador del usuario. La preferencia se guarda en `localStorage` y se aplica en todas las páginas sin recargar.
- **Navegación consistente** — La misma barra de navegación con el logo oficial de la empresa se repite en todas las páginas. El enlace activo se resalta visualmente según la página actual.
- **Tailwind CSS vía CDN** — Los estilos de cada página utilizan la configuración de Tailwind personalizada con los tokens de color y tipografía de la marca (familia Epilogue y Manrope, paleta ámbar y crema).
- **Imágenes optimizadas** — Todas las fotografías están almacenadas localmente en la carpeta `/img/`. El logo oficial de la empresa se muestra en el navbar.

---

## Estructura del Proyecto

```
/
├── index.html              # Página de inicio
├── who-we-are.html         # Quiénes somos
├── services.html           # Servicios
├── production.html         # Producción
├── social-impact.html      # Impacto social
├── contact.html            # Contacto
│
├── css/
│   ├── tokens.css          # Variables de diseño (colores, tipografía, espaciado)
│   ├── age-gate.css        # Estilos del modal de verificación de edad
│   └── animations.css      # Sistema completo de animaciones
│
├── js/
│   ├── age-gate.js         # Lógica de verificación de edad
│   ├── animations.js       # Motor de animaciones (scroll, paralaje, contadores)
│   └── i18n.js             # Sistema de traducción EN / ES
│
└── img/
    ├── Logos_Yazoo_LogoPrincipal_Color.png
    └── *.jpg               # Fotografías del sitio
```

---

## Uso

No requiere instalación. Basta con clonar el repositorio y abrir `index.html` en cualquier navegador moderno, o alojarlo en un servidor web estático (Apache, Nginx, GitHub Pages, Netlify, etc.).

```bash
git clone https://github.com/tu-usuario/yazoo-investment-web.git
```

Abre `index.html` directamente en tu navegador o sirve la carpeta raíz desde cualquier servidor HTTP.

---

## Marca

- **Empresa:** Yazoo Investment Srl
- **Sede:** San Pedro de Macorís, República Dominicana
- **Sector:** Producción y añejamiento de bebidas espirituosas
- **Exportación:** 33 países en 5 continentes
- **Web corporativa (referencia):** bodegarondelcaribe.com

---

## Licencia

Todos los derechos reservados © 2026 Yazoo Investment Srl.  
Este repositorio es de uso interno. No está autorizada su reproducción, distribución ni uso comercial sin autorización expresa de la empresa.
