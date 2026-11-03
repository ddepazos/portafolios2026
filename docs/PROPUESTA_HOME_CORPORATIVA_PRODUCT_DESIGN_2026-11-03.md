# Propuesta de Home corporativa — Portafolio Diego Pazos (2026)

**Fecha:** 2026-11-03 · **Retomar revisión:** 2026-11-04  
**Estado:** propuesta estratégica documentada, **no implementada en el sitio**.  
**Sitio:** https://diegopazos.pages.dev/  
**Repositorio:** https://github.com/ddepazos/portafolios2026  
**Fuente proporcionada:** `Estrategia_Portafolio_DiegoPazos.pdf` (2 páginas, noviembre 2026), más el wireframe y requerimientos compartidos en la conversación.

## 1. Dictamen de diseño de producto

**Recomiendo el cambio de arquitectura, pero NO borrar la identidad visual ni migrar a React por inercia.** Un portafolio corporativo convence por la claridad del problema, el rol, el proceso y la evidencia, no por eliminar la personalidad. La propuesta del PDF de reducir el foco a tres casos es acertada; las cartas de tarot son una metáfora interna de priorización y no deben figurar en la navegación o la presentación pública.

**Evitar afirmaciones no verificadas:** «más de 8 años de experiencia en UX Research avanzado», mejoras cuantificadas de onboarding o conversión, trabajo en «células ágiles», liderazgo de ingeniería y resultados comerciales solo si existen pruebas verificables. No confundir propuesta de mejora con efecto medido. El título «Product Designer» se puede usar como posicionamiento profesional si se respalda con casos; «Senior» requiere trayectoria demostrable.

La propuesta **no debe sacrificar el diseño gráfico, producción impresa, branding y editorial**: esos trabajos quedan visibles en segundo nivel, relevantes para roles corporativos mixtos y vacantes de diseño gráfico.

## 2. Diagnóstico contrastado con `index.html` de `main`

- El sitio actual es **HTML semántico + CSS + JavaScript vanilla**, no una app React.
- Navegación actual: Proyectos, Artefactos 2026, Diseño, UI Kit Raki, Servicios, Proceso y Contacto. Hay exceso de entradas para la primera decisión del reclutador.
- Hero actual: `Diseño UX/UI y gráfico con carácter.` con descripción multidisciplinar.
- LAB Studio, LAB GENRE3D, LAB Suite y LAB 3D Bridge aparecen en artefactos, además de repetirse en proyectos. Agruparlos como **un caso técnico insignia** reducirá duplicación sin perder enlaces profundos.
- Hay páginas de casos con evidencia: `proyectos/proletarian-coin.html`, `proyectos/pagana-circular.html`, `proyectos/recorrido.html`; usar esas URLs, conservar el contenido y reforzar la síntesis visible en Home.
- El código revisado de `index.html` no muestra enlaces confirmados de CV PDF o LinkedIn. **No crear enlaces ficticios:** obtener URLs públicas exactas y comprobar el archivo PDF antes de habilitar CTAs.
- El diseño actual utiliza tipografía DM Sans y Sora, elementos gráficos, paleta carbón/ocre y recursos interactivos; mejorar jerarquía y rendimiento antes que cambiar toda la marca.

## 3. Objetivo de conversión y audiencias

Audiencias prioritarias: responsables de producto, líderes de diseño/ingeniería, reclutadores UX/UI y reclutadores de diseño gráfico corporativo. Acción principal: abrir un caso de estudio relevante; secundaria: CV, LinkedIn y contacto directo.

La Home debe responder, idealmente sin demasiado desplazamiento: **qué haces**, **qué problemas has trabajado**, **qué parte resolviste tú**, **cómo lo demuestras** y **cómo contactarte**.

## 4. Arquitectura recomendada

1. **Header estable:** [marca DP] «Casos de estudio» «Habilidades» «Contacto» | «CV PDF» «LinkedIn». En móvil, menú compacto accesible sin ocultar el CV.
2. **Hero:** una promesa clara; descripción corta que conserve lo gráfico y añada producto/UX/desarrollo; acciones «Ver casos de estudio» y «Contacto directo».
3. **Tres casos insignia:** full-width o grilla limpia; categoría/rol, problema, enfoque/entregable, evidencia y enlace. Orden recomendado: Proletarian Coin, LAB Generative Design Studio, Pagana Circular.
4. **Investigación complementaria:** Recorrido.cl como vínculo accesible dentro del caso Pagana o del archivo secundario; se puede intercambiar por Pagana en una variante del portafolio enfocada a UX Research.
5. **Proyectos creativos y colaboraciones:** Raki, Camii, Mercado Quilín, Chile bajo la piel, Nota Negra, etc.; no convertirlos todos en casos largos en la Home. Galería de GIFs y exploraciones como «Archivo visual», colapsada o en página específica, cuidando rendimiento.
6. **Habilidades / stack:** investigación y UX, sistemas visuales, implementación digital, colaboración/entrega; sin porcentajes de dominio imaginarios.
7. **Contacto:** enlace visible, formulario existente si funciona, CV y LinkedIn repetidos al final.

**No introducir «casos de éxito» ni métricas comerciales inventadas**; usar «Casos de estudio» y «Resultados del diseño / entregables verificables» hasta contar con métricas.

## 5. Copy principal propuesto

**Eyebrow**  
`DISEÑO DE PRODUCTO · UX/UI · FRONT-END`

**H1**  
> Diseño experiencias digitales que conectan personas, tecnología y objetivos de negocio.

**Párrafo**  
> Soy diseñador gráfico y UX/UI, con experiencia en identidad visual, arquitectura de información, interfaces digitales y desarrollo web. Combino pensamiento visual, investigación y tecnología para transformar problemas complejos en soluciones claras, funcionales y coherentes.

**CTAs**  
`Explorar casos de estudio` · `Contacto directo` · botón persistente `Descargar CV` · `LinkedIn`.

**Variante A — más ejecutiva**  
> Diseño productos digitales claros, coherentes y preparados para desarrollarse.

**Variante B — más creativa/técnica**  
> Del concepto al prototipo funcional: diseño, UX y tecnología en una misma experiencia.

**Condición sobre antigüedad**  
La frase `más de 8 años de experiencia` se añadirá solo al corroborar la cronología en el CV. No afirmar «8 años de UX Research avanzado» por defecto.

## 6. Copy de los tres casos

### 01 / Proletarian Coin · Product Design / Fintech

**Desafío:** Traducir información financiera compleja en una experiencia legible para consultar balances, movimientos, operaciones y estados de transacción.  
**Enfoque y evidencia:** investigación de referencias, arquitectura de información, user flows, wireframes, UI Kit y adaptación desktop/mobile.  
**Resultado verificable de diseño:** propuesta de sistema de interfaces y flujos; **no afirmar** que se redujo cuantitativamente el abandono de onboarding sin medirlo.  
**URL existente:** `/proyectos/proletarian-coin.html`.

### 02 / LAB — Generative Design Studio · Creative Technologist / UX Engineering

**Desafío:** Crear una experiencia de edición y animación 2D/3D modular desde el navegador, con herramientas complejas y flujo comprensible.  
**Enfoque y evidencia:** React, TypeScript, Three.js, interacción visual, módulos y editor de escena; documentar el papel específico de diseño/implementación y estado real de cada funcionalidad.  
**Resultado verificable:** prototipos interactivos y arquitectura de experiencia implementada; no presentar funcionalidades aún pendientes como terminadas.  
**Destinos existentes:** `https://lab-studio-asl.pages.dev/`, `https://lab-genre3d.pages.dev/`; ofrecer enlaces profundos bajo **un único caso principal**, no tarjetas separadas equivalentes.  
**Nota:** mantener LAB Studio y LAB-GENRE3D como repos independientes, aunque se presenten como un ecosistema.

### 03 / Pagana Circular · UX Research / E-commerce

**Desafío:** Mejorar la orientación, navegación y estructura de un comercio de moda circular sin perder la identidad de marca.  
**Enfoque y evidencia:** inventario de contenidos, análisis heurístico, card sorting, wireframes y prototipo Figma responsive.  
**Resultado verificable de diseño:** propuesta de reorganización del flujo y jerarquía; **sin atribuir aumento de conversión** no medido.  
**URL existente:** `/proyectos/pagana-circular.html`.

**Caso complementario:** `/proyectos/recorrido.html` — investigación observacional de búsqueda/compra de pasajes, prueba de cinco segundos, detección de 404, lentitud y problemas de recuperación. Más apropiado como caso número tres en una variante «UX Research pura» del sitio.

## 7. Copy de sección secundaria

**Título:** Proyectos creativos y colaboraciones  
**Introducción:** Identidades visuales, diseño editorial, comunicación gráfica y exploraciones que complementan mi trabajo en productos digitales.  
**Presentación:** máximo 6 tarjetas iniciales con botón «Explorar archivo»; cada tarjeta enlaza a la página o evidencia correspondiente; imágenes optimizadas y lazy loading. Los GIFs no deben reproducirse todos al cargar.

## 8. Habilidades / Tech stack

Cuatro grupos sencillos:

- **UX & Producto:** arquitectura de información, flujos, prototipos, evaluación heurística, tests de usabilidad **donde estén documentados**.
- **Diseño visual:** branding, sistemas visuales, diseño editorial, composición digital e impresa, Illustrator, Photoshop, InDesign.
- **Desarrollo de interfaces:** HTML/CSS/JavaScript, React, TypeScript, Three.js en proyectos desarrollados; código y repos como evidencia.
- **Colaboración y entregables:** Figma, componentes, especificaciones, documentación de decisiones, hand-off a desarrollo. No prometer experiencia Scrum/Agile sin ejemplos reales.

## 9. Wireframe resumido

```text
[DP]  Casos de estudio  Habilidades  Contacto        [CV PDF] [LinkedIn]
────────────────────────────────────────────────────────────────────────────
 DISEÑO DE PRODUCTO · UX/UI · FRONT-END
 Diseño experiencias digitales que conectan personas, tecnología y negocio.
 Presentación de 2-3 líneas                         [Ver casos] [Contacto]
────────────────────────────────────────────────────────────────────────────
 CASOS DE ESTUDIO
 01  Proletarian Coin  | Product Design / Fintech
     Desafío + enfoque + resultado respaldado             [Ver caso]
 02  LAB — Generative Design Studio | Creative Technologist
     Desafío + stack + demo operativa                    [Ver caso]
 03  Pagana Circular | UX Research / E-commerce
     Desafío + métodos + prototipo                      [Ver caso]
────────────────────────────────────────────────────────────────────────────
 PROYECTOS CREATIVOS Y COLABORACIONES
   Raki | Camii | Mercado Quilín | Chile bajo la piel | Otros
                                                    [Explorar archivo]
────────────────────────────────────────────────────────────────────────────
 HABILIDADES       UX/Producto | Visual | Front-end | Documentación
────────────────────────────────────────────────────────────────────────────
 CONTACTO                                         [Email] [CV] [LinkedIn]
```

## 10. Componentes React propuestos (arquitectura futura, NO migración necesaria)

```tsx
type CaseStudy = {
  id: string;
  category: string;
  title: string;
  challenge: string;
  evidence: string;
  href: string;
};

const cases: CaseStudy[] = [
  {
    id: "fintech",
    category: "PRODUCT DESIGN / FINTECH",
    title: "Proletarian Coin",
    challenge: "Convertir información financiera compleja en flujos claros de cuenta y transacciones.",
    evidence: "Arquitectura de información · User flows · UI Kit · Responsive",
    href: "/proyectos/proletarian-coin.html",
  },
  {
    id: "lab",
    category: "CREATIVE TECHNOLOGIST / UX ENGINEERING",
    title: "LAB — Generative Design Studio",
    challenge: "Diseñar una interfaz modular para creación, edición y animación 2D/3D en el navegador.",
    evidence: "React · TypeScript · Three.js · Prototipos funcionales",
    href: "https://lab-studio-asl.pages.dev/",
  },
  {
    id: "pagana",
    category: "UX RESEARCH / E-COMMERCE",
    title: "Pagana Circular",
    challenge: "Simplificar la navegación de una tienda de moda circular sin perder su identidad.",
    evidence: "Análisis heurístico · Card sorting · Wireframes · Figma",
    href: "/proyectos/pagana-circular.html",
  },
];

function CaseStudyCard({item}: {item: CaseStudy}) {
  return (
    <article className="case-card" aria-labelledby={item.id}>
      <p className="case-category">{item.category}</p>
      <h3 id={item.id}>{item.title}</h3>
      <p><strong>Desafío:</strong> {item.challenge}</p>
      <p><strong>Proceso / entregables:</strong> {item.evidence}</p>
      <a href={item.href}>Ver caso de estudio<span aria-hidden="true"> ↗</span></a>
    </article>
  );
}

type HomeProps = {cvUrl?: string; linkedinUrl?: string};

export function PortfolioHome({cvUrl,linkedinUrl}:HomeProps) {
  return (
    <>
      <header className="site-header">
        <a href="#inicio" aria-label="Ir al inicio">DP</a>
        <nav aria-label="Navegación principal">
          <a href="#casos">Casos de estudio</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="header-actions">
          {cvUrl && <a href={cvUrl} download>CV PDF</a>}
          {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
      </header>
      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">DISEÑO DE PRODUCTO · UX/UI · FRONT-END</p>
          <h1 id="hero-title">Diseño experiencias digitales que conectan personas, tecnología y objetivos de negocio.</h1>
          <p>Soy diseñador gráfico y UX/UI, con experiencia en identidad visual, arquitectura de información, interfaces digitales y desarrollo web. Combino pensamiento visual, investigación y tecnología para transformar problemas complejos en soluciones claras, funcionales y coherentes.</p>
          <div className="hero-actions">
            <a href="#casos">Explorar casos de estudio</a>
            <a href="#contacto">Contacto directo</a>
          </div>
        </section>
        <section id="casos" aria-labelledby="cases-title">
          <h2 id="cases-title">Casos de estudio</h2>
          <div className="cases-grid">{cases.map(item=><CaseStudyCard key={item.id} item={item}/>)}</div>
        </section>
        <section id="creativos" aria-labelledby="creative-title">
          <h2 id="creative-title">Proyectos creativos y colaboraciones</h2>
          <p>Identidades, diseño editorial y comunicación visual.</p>
          <a href="/#archivo">Explorar archivo</a>
        </section>
        <section id="habilidades" aria-labelledby="skills-title">
          <h2 id="skills-title">Habilidades</h2>
          <ul>
            <li>UX e investigación: arquitectura, prototipos y evaluación.</li>
            <li>Diseño visual: identidad, editorial, Illustrator, Photoshop, InDesign.</li>
            <li>Interfaces: HTML, CSS, JavaScript, React, TypeScript y Three.js.</li>
            <li>Entrega: Figma, sistemas de componentes y documentación.</li>
          </ul>
        </section>
        <section id="contacto" aria-labelledby="contact-title">
          <h2 id="contact-title">Conversemos sobre tu próximo proyecto</h2>
          {/* Reutilizar el contacto funcional del sitio actual. */}
          <a href="#inicio">Volver al inicio</a>
        </section>
      </main>
    </>
  );
}
```

**Nota de implementación:** `cvUrl` y `linkedinUrl` son entradas opcionales porque las URLs reales **no fueron verificadas**. No deben publicarse enlaces `#` como botones de CV o LinkedIn. El ejemplo anterior es una **propuesta de componentes**, no código que se haya integrado o probado en producción.

## 11. En el sitio actual: implementación sin migrar a React

Se recomienda primero **reordenar `index.html`**, conservar estilos y JavaScript ya funcionales y adaptar `css/`:

- Simplificar `header nav.main-nav` a tres anclas y dos acciones persistentes **solo al contar con URLs verificadas**.
- Cambiar la etiqueta de especialidad, H1 y `.lead`; mantener el logo y el contraste visual de marca.
- Unificar secciones de artefactos y casos de estudio en una colección principal de tres casos; dejar rutas secundarias accesibles y conservar URLs de proyectos para SEO.
- Mover galería de identidad visual, editorial y animaciones a sección secundaria con lazy load y sin GIFs automáticos masivos.
- Crear un solo índice de contenidos para tarjetas y página de casos, evitando duplicación manual.
- Optimizar responsive, orden del teclado, accesibilidad, contraste, tamaño de objetivos táctiles y Core Web Vitals.
- Preservar favicon, canonical, OG tags, schema.org, Google Analytics y formulario EmailJS; actualizar título/description para nuevo enfoque sin sobreoptimización.
- Medir clics en **Ver caso**, **CV**, **LinkedIn** y **Contacto** con GA4 una vez que las URLs reales estén disponibles.

La migración a React solo se evaluará cuando haya necesidad de estados complejos compartidos, CMS, muchos componentes dinámicos o mantenimiento que lo justifique. El rediseño visual/IA por sí solo no es motivo.

## 12. Criterios de aceptación para la revisión de mañana

- [ ] Acordar el copy principal y confirmar si conviene «Diseñador de Producto / UX/UI» o énfasis mixto «UX/UI + Diseño Gráfico» según la vacante objetivo.
- [ ] Confirmar trayectoria profesional exacta antes de añadir «8+ años».
- [ ] Seleccionar Pagana como caso principal o Recorrido si se crea una versión de Home más orientada a investigación.
- [ ] Localizar URL auténtica de LinkedIn y CV PDF ATS actualizado, verificar accesibilidad y enlaces.
- [ ] Confirmar imágenes destacadas y pruebas de resultados de cada caso; identificar resultados de diseño vs impacto medido.
- [ ] Diseñar Home responsive con jerarquía clara y evitar convertir los proyectos LAB en múltiples tarjetas repetidas.
- [ ] No borrar proyectos ni reescribir contenido existente sin respaldo; publicar en rama de trabajo y probar móvil/escritorio antes de producción.

---

**Decisión guardada:** hacer una Home orientada a producto y soluciones, conservando el valor del diseño gráfico, mostrando tres casos sólidos y facilitando CV/contacto; **no se modificará el sitio ni se migrará a React todavía**.
