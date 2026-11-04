# Diego Pazos | Portafolio 2026

**Portafolio principal:** https://diegopazos.pages.dev/

Diseñador UX/UI y gráfico en Santiago de Chile. Casos de estudio, identidad visual, diseño web y aplicaciones creativas.

Portafolio personal de Diego Pazos, centrado en diseño gráfico, branding, UX/UI y experiencias digitales con una estética brutalista, clara y distintiva.

## Objetivo

Presentar la identidad profesional de manera directa, con una estructura de información sólida, narrativa visual fuerte y una experiencia que funcione bien en desktop y mobile.

## Estado actual

- Portada principal con hero visual y cubo Rubik animado
- Arquitectura de información coherente y legible
- Sección de servicios, proceso, stack y proyectos
- Formulario de contacto integrado con EmailJS
- Corrección del flujo de envío para evitar pantallas de error molestas
- Mejora de textos y contenidos para coherencia del portafolio
- Ajuste de referencias de proyectos y enlaces públicos
- Layout responsive con media queries
- Sitio principal publicado en Cloudflare Pages; GitHub aloja el código fuente

## Trabajo realizado durante estas horas

- Recuperación y restauración del portfolio brutalista
- Ajuste visual del hero y refinamiento de la identidad general
- Integración del cubo Rubik como elemento central del encabezado
- Revisión de la estructura de navegación y contenido
- Corrección del formulario de contacto y manejo visual del envío
- Reparación de inconsistencias entre contenido local y publicación web
- Actualización de los proyectos con enlaces coherentes y descripciones más sólidas
- Validación del flujo de trabajo y subida final al repositorio

## Estructura

- index.html: página principal del portfolio
- css/: estilos visuales, variables y responsive design
- js/: interacciones del formulario, toggles y render de proyectos
- data/: contenido de proyectos en formato estructurado
- proyectos/: páginas de detalle por proyecto
- assets/: recursos visuales, branding e iconografía
- README.md: documentación del proyecto
- diagrama-flujo-portafolio.drawio: diagrama del flujo de diseño y publicación

## Stack y tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- EmailJS para envío de formularios
- Google Analytics 4 (GA4) preparado para medir páginas, proyectos, piezas de diseño, clics externos y formularios
- GitHub Pages para despliegue

## Flujo de trabajo

1. Definir objetivos, referencias y tono visual
2. Estructurar la arquitectura de la información
3. Diseñar la experiencia y la identidad visual
4. Construir la interactividad y el responsive
5. Integrar el formulario de contacto con EmailJS
6. Revisar enlaces, contenido y coherencia general
7. Publicar en GitHub Pages

## Publicación

El sitio se despliega en GitHub Pages y se mantiene actualizado desde la rama principal del repositorio.

## Nota

La versión actual prioriza una identidad personal fuerte, un enfoque visual reconocible y una experiencia web funcional, clara y lista para presentar proyectos y captar contactos.


## Google Analytics 4

La integración está preparada en `js/analytics-config.js` y `js/analytics.js`. Para activarla se debe ingresar el ID público de medición con formato `G-XXXXXXXXXX` en `js/analytics-config.js`. Mientras el valor esté vacío, el sitio no envía datos a Google Analytics.


## Sistema de diseño 2026

La estética aprobada del portafolio se mantiene en **carbón cálido, marfil y ocre**. Los tokens de portada están centralizados en `css/design-tokens-2026.css` (sin alterar los estilos propios de Raki, las páginas de caso ni los proyectos LAB).

- Guía de componentes, contratos de CSS y pruebas: [SISTEMA_DISENO_PORTAFOLIO_2026.md](docs/SISTEMA_DISENO_PORTAFOLIO_2026.md).
- Revisión estática sin dependencias: `node scripts/check-design-system.mjs`.
- GitHub Actions: `.github/workflows/design-system-check.yml` verifica cambios del sitio.
- Responsive revisado en navegador real a **320, 390, 768 y 1366 px** sin desbordamiento horizontal.

