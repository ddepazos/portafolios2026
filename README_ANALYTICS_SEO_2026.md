# Informe independiente · Analytics y SEO — Portafolio 2026

**Proyecto:** [Diego Pazos — Portafolio](https://diegopazos.pages.dev/)  
**Repositorio:** `ddepazos/portafolios2026` · rama `main`  
**Período de análisis:** 1–30 de octubre de 2026  
**Fecha del informe:** 31 de octubre de 2026  
**Fuente:** Google Analytics 4, propiedad `558310718`, consultada mediante Windsor.ai; revisión de cambios SEO en GitHub.

> Documento de diagnóstico y seguimiento **independiente del README principal**. No implica modificaciones al sitio, sus UI Kits ni sus aplicaciones. Los resultados son una línea base anterior a las mejoras SEO del 31 de octubre.

## 1. Resumen ejecutivo

El portafolio tiene tráfico medible, exploración de proyectos y señales iniciales de contacto. Las prioridades son **medir conversiones correctamente**, **separar el tráfico por dominio**, **validar la indexación** y **mejorar el rendimiento móvil** sin alterar la identidad visual ni las funciones existentes.

| Indicador | Resultado |
|---|---:|
| Usuarios activos | 84 |
| Sesiones | 162 |
| Visualizaciones de páginas/pantallas | 424 |
| Tasa de interacción | 34,57 % |
| Tiempo medio de interacción por usuario | 113,2 s (1 min 53 s) |
| Eventos clave configurados/registrados en GA4 | 0 |
| Eventos `generate_lead` | 2 |

**Precaución:** las 424 vistas no representan 424 personas. Los dos eventos `generate_lead` no equivalen necesariamente a dos contactos comerciales confirmados.

## 2. Adquisición

| Canal | Sesiones |
|---|---:|
| Directo | 122 |
| Búsqueda orgánica | 27 |
| Asistentes de IA | 11 |
| Referencias | 2 |
| Sin asignar | 1 |

**Calidad de datos:** el desglose suma 163 sesiones, frente a 162 en el total de GA4. Investigar la diferencia de agregación antes de usar porcentajes exactos.

## 3. Distribución por dominio

| Hostname | Sesiones | Vistas |
|---|---:|---:|
| `diegopazos.pages.dev` | 77 | 101 |
| `ddepazos.github.io` | 73 | 309 |
| `diegopazosuxui.mooo.com` | 10 | 12 |
| `127.0.0.1` | 1 | 1 |
| `portafolios2026.vercel.app` | 1 | 1 |

La propiedad GA4 agrupa diferentes versiones y entornos. Para evaluar el portafolio actual, **filtrar por `hostname = diegopazos.pages.dev`**. Revisar si GitHub Pages debe permanecer como sitio secundario o redirigir al principal.

## 4. Páginas y proyectos destacados

| Ruta o proyecto | Vistas |
|---|---:|
| `/portafolios2026/index.html` | 115 |
| `/` | 102 |
| `/portafolios2026/` | 46 |
| Chile bajo la piel (GitHub Pages) | 33 |
| Pagana Circular (GitHub Pages) | 21 |
| Triad (GitHub Pages) | 17 |
| Raki (GitHub Pages) | 16 |
| Corpus Tattoo (GitHub Pages) | 15 |
| Nota Negra (GitHub Pages) | 15 |

**Interpretación:** este ranking mezcla dominios. No se debe presentar como ranking exclusivo del sitio Cloudflare sin segmentar por hostname.

## 5. Eventos y embudo

| Evento | Recuentos |
|---|---:|
| `page_view` | 424 |
| `user_engagement` | 233 |
| `scroll` | 165 |
| `project_open` | 87 |
| `outbound_click` | 40 |
| `click` | 40 |
| `design_view` | 13 |
| `form_start` | 10 |
| `generate_lead` | 2 |

Son **eventos**, no usuarios únicos. Investigar el recorrido entre `form_start` y `generate_lead`. Confirmar en DebugView qué acción dispara cada evento y si existe duplicación.

## 6. Estado del SEO

### Implementado en el repositorio
- Títulos y metadescripciones para posicionamiento profesional (UX/UI, diseño gráfico, diseño web, Santiago de Chile).
- Metadatos Open Graph, URL canónica en casos de estudio y datos estructurados Schema.org (`Person`, `CreativeWork`).
- `sitemap.xml` actualizado con rutas HTML explícitas.
- Ya existían `robots.txt`, integración GA4 y verificación de Search Console.

### Pendiente de verificar en producción
- Despliegue del último commit en Cloudflare.
- HTTP 200, títulos, canonical y datos estructurados en el HTML realmente publicado.
- Aceptación y cobertura del sitemap en Search Console.
- Indexación real de las páginas, enlaces internos y posibles duplicados entre dominios.
- Core Web Vitals y PageSpeed móvil (LCP, INP, CLS).

## 7. Riesgos y oportunidades

| Prioridad | Riesgo | Acción |
|---|---|---|
| Alta | Dominios múltiples mezclados | Crear vistas/informes por hostname y decidir dominio canónico |
| Alta | Cero eventos clave, pese a `generate_lead` | Auditar y configurar conversiones válidas |
| Alta | SEO modificado sin validación posterior | Comprobar despliegue e indexación |
| Media | Predominio de tráfico directo | Mejorar captación orgánica mediante casos de estudio |
| Media | Tráfico de localhost y entornos de prueba | Definir política de exclusión o segmentación |

## 8. Plan de trabajo priorizado

### P0 · Medición de contactos
- [ ] Auditar disparadores de `generate_lead` en el código y GA4.
- [ ] Diferenciar clic de correo, WhatsApp, inicio de formulario y **envío exitoso**.
- [ ] Evitar dobles disparos y registrar parámetros útiles sin información personal.
- [ ] Marcar como evento clave solo una acción que represente un contacto válido.
- [ ] Validar manualmente con GA4 DebugView y registrar evidencia.

**Cierre:** un evento correcto por acción y conversiones interpretables.

### P0 · Dominios y calidad de datos
- [ ] Crear reporte filtrado por `diegopazos.pages.dev`.
- [ ] Comparar Cloudflare y GitHub Pages sin mezclar resultados.
- [ ] Decidir redirección o convivencia de dominios.
- [ ] Revisar si procede medición entre dominios y cómo gestionar tráfico interno.

**Cierre:** línea base exclusiva de Cloudflare y sin duplicidades no deseadas.

### P1 · SEO técnico
- [ ] Verificar estado del despliegue y respuestas HTTP.
- [ ] Validar canonical, robots, sitemap, metadatos y JSON-LD de cada página.
- [ ] Inspeccionar URLs y cobertura en Google Search Console.
- [ ] Corregir enlaces internos y páginas duplicadas según resultados.

**Cierre:** sitemap aceptado y sin errores críticos conocidos de indexación.

### P1 · Rendimiento
- [ ] Medir PageSpeed Insights en móvil y escritorio.
- [ ] Registrar LCP, INP y CLS iniciales.
- [ ] Priorizar imágenes, carga de fuentes y JavaScript según evidencia.
- [ ] Repetir mediciones y pruebas de regresión.

**Cierre:** mejora medible sin romper diseño, animaciones ni interacciones.

### P2 · Contenido y captación
- [ ] Revisar casos Chile bajo la piel, Nota Negra, LAB Studio y LAB GENRE3D.
- [ ] Mejorar estructura editorial, resultados y enlaces internos.
- [ ] Incorporar CTA contextual medible a contacto.
- [ ] Comparar clics y contactos después de los cambios.

### P2 · Informes
- [ ] Crear tablero mensual: usuarios, sesiones, canales, páginas de entrada, proyectos y conversiones.
- [ ] Separar datos por hostname.
- [ ] Añadir Search Console: consultas, clics, impresiones, CTR y posición.
- [ ] Comparar períodos equivalentes y documentar fechas de despliegue.

## 9. Calendario propuesto

| Semana | Trabajo principal | Entregable |
|---|---|---|
| 1 | Despliegue, GA4, eventos y dominios | Auditoría de medición + línea base Cloudflare |
| 2 | Search Console, sitemap y canonical | Informe de indexación y correcciones |
| 3 | PageSpeed, Core Web Vitals y recursos | Comparación de rendimiento |
| 4 | Contenido, CTA y tablero | Informe mensual repetible |

## 10. KPI mensuales

1. Usuarios activos y sesiones de `diegopazos.pages.dev` exclusivamente.
2. Sesiones orgánicas y clics de búsqueda (Search Console).
3. Páginas de entrada y casos de estudio más visitados.
4. Contactos **validados**, usuarios que contactan y tasa de conversión.
5. Tasa y tiempo de interacción; Core Web Vitals móvil.
6. Páginas indexadas, errores de cobertura y estado del sitemap.

## 11. Decisiones abiertas

- ¿GitHub Pages redirige a Cloudflare o queda como versión secundaria?
- ¿Qué acción constituye un lead válido: formulario enviado, correo o WhatsApp?
- ¿Cómo excluir o identificar visitas propias y de desarrollo?
- ¿Cuál será el primer período de comparación posterior al SEO del 31 de octubre?

## 12. Reglas para implementar

- **No modificar los UI Kits existentes.**
- Conservar la estética negro/carbón, tipografía de alto contraste y acento naranja.
- No alterar LAB Studio ni LAB GENRE3D por este plan.
- Trabajar por etapas; registrar antes/después, pruebas y commits.
- No atribuir los resultados de octubre a cambios SEO publicados el 31 de octubre.
- Este archivo es documentación de trabajo y no reemplaza el README general del repositorio.

---
**Documento base:** «Informe Analytics + SEO del Portafolio — octubre 2026» (PDF, 6 páginas).  
**Estado:** diagnóstico con acciones pendientes; no se afirma que las validaciones técnicas o conversiones estén ya resueltas.
