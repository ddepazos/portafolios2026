# Sistema de diseño · Portafolio 2026

**Estado:** consolidación técnica, sin rediseño visual.  
**Referencia aprobada:** interfaz carbón cálido, marfil y ocre de `diegopazos.pages.dev`.  
**Alcance:** portada, navegación, hero, casos, artefactos, galerías, servicios, proceso, contacto y footer. Los diseños de las marcas, obras, UI Kit Raki y aplicaciones LAB mantienen su identidad propia.

## Fuente de verdad y orden de carga

La portada `index.html` carga en este orden:

1. `css/variables.css`: base heredada para compatibilidad con páginas anteriores.
2. **`css/design-tokens-2026.css`**: tokens finales exclusivos de la portada.
3. `css/main.css`: estilos estructurales heredados (no se elimina sin regresión visual).
4. `css/design.css` y `css/artefactos-2026.css`: galerías y artefactos.
5. `css/refresh-2026.css`: componentes y ajustes responsivos 2026; ya no define `:root`.

Las páginas internas `proyectos/*.html` cargan `css/case-study-2026.css` después de sus estilos históricos. No cargar los tokens de portada sobre los prototipos ni sustituir los colores originales de las piezas.

## Tokens aprobados

| Función | Valor |
|---|---|
| Fondo carbón | `#242321` |
| Superficie | `#292826` |
| Tarjeta/panel | `#302E2B` |
| Superficie elevada | `#383530` |
| Texto principal | `#EEE9E1` |
| Texto secundario | `#C3BDB4` |
| Acento ocre | `#C8B16B` |
| Hover ocre | `#D8C68D` |
| Borde reforzado | `#817A6D` |

**Tipografía:** Sora para titulares, DM Sans para cuerpo y controles.  
**Bordes:** generalmente 1 px en contenedores y controles; evitar las sombras gruesas de la versión original.  
**Contraste:** texto marfil sobre carbón, texto secundario legible, CTA ocre con texto carbón y estados de foco visibles.  
**Espaciado:** base de 4/8/12/16/24/32 px. Respetar área táctil de aproximadamente 42–44 px en botones y entradas.

Los alias `--red`, `--yellow`, `--green` siguen disponibles para compatibilidad: en la portada apuntan al acento ocre, no a colores literales.

## Patrones de componentes

- **Navbar y hero:** navegación y CTA claros, botones sin crecimiento al hacer hover, cubo Rubik con pausa operativa.
- **Casos UX/UI:** un `<details>` general y nueve fichas `<details name="portfolio-case-2026">`; los tres casos prioritarios son Proletarian Coin, Raki y Pagana Circular. El navegador debe mantener abierto un solo caso por vez.
- **Destacados, Proceso y Diseño:** vista previa compacta mediante `<summary>`; contenido completo se abre sin duplicación.
- **Artefactos LAB:** cinco fichas y paneles expandidos; no sustituir la aplicación LAB Creative Suite por LAB Studio.
- **Ventanas modales:** elementos `<dialog>` con foco perceptible y control de cierre. Mantener los fondos de las obras y la identidad específica de LAB.
- **Contacto:** panel plegable con los campos originales y EmailJS; no cambiar IDs, atributos `name`, seguimiento de conversiones ni credenciales públicas.
- **Footer:** suficiente separación para legibilidad, enlaces sin subrayado, interacción por color y foco visible.

## Verificación responsive

Pruebas con navegador real por Cloudflare Browser Rendering, usando `https://diegopazos.pages.dev/`:

| Vista | Ancho viewport | Ancho documento | Desbordamiento horizontal |
|---|---:|---:|---|
| Móvil estrecho | 320 px | 320 px | No |
| Móvil | 390 px | 390 px | No |
| Tablet | 768 px | 768 px | No |
| Escritorio | 1366 px | 1366 px | No |

Comprobaciones funcionales en navegador real: nueve fichas con apertura única y orden prioritario correcto; formulario de contacto abre y cierra mediante Escape; modal LAB abre y cierra; cubo Rubik pausa (`aria-pressed=false`) y reanuda (`aria-pressed=true`). Los **28 recursos gráficos locales** de la portada respondieron con estado HTTP 200 y tipo de contenido de imagen. Las medidas demuestran ausencia de overflow horizontal, **no** equivalen a una auditoría manual exhaustiva, ni verifican el envío real de correos.

**Atención:** la galería «Artefactos 2026» es extensa en móvil pese a no desbordar horizontalmente. Cualquier futura compactación debe aprobarse por separado y respetar las fichas existentes.

## Verificaciones automáticas

```bash
node scripts/check-design-system.mjs
```

La comprobación estática revisa orden de CSS, tokens, llaves CSS, referencias locales, nueve casos, orden prioritario, modal y paneles conservados. El workflow `.github/workflows/design-system-check.yml` la ejecuta al cambiar el sitio; las pruebas de navegador siguen siendo complementarias.

## Regla para futuras modificaciones

1. Actualizar primero `css/design-tokens-2026.css` si cambia la identidad global de la portada.
2. Modificar componentes en el módulo correspondiente, sin agregar más redefiniciones `:root`.
3. Eliminar una regla antigua solo si está demostrado que no afecta a componentes o páginas internas.
4. Verificar los anchos de 390, 768 y 1366 px, las vistas desplegadas, los diálogos, el hero y el formulario.
5. Confirmar commit y despliegue de Cloudflare; no dar por validado un cambio solo por compilar o guardar CSS.

**Referencias de diseño:** [Portafolio 2026](https://diegopazos.pages.dev/) · [Paleta UI de LAB en Figma](https://www.figma.com/design/QwsaQ8IC460Fgd8Zpn98Sd).
