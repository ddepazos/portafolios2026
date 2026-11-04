/**
 * Regression checks for the Portafolio 2026 design system.
 * No dependencies: node scripts/check-design-system.mjs
 * This intentionally checks structure/cascade contract, not screenshots or EmailJS delivery.
 */
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const check = (condition, label) => { assert.ok(condition, label); console.log('✓ ' + label); };
const html = read('index.html');
const base = read('css/main.css');
const refresh = read('css/refresh-2026.css');
const tokens = read('css/design-tokens-2026.css');
const caseStyles = read('css/case-study-2026.css');

check(/<html[^>]*lang="es"/.test(html), 'Página principal con idioma correcto');
check(/name="viewport"/.test(html), 'Meta viewport responsive presente');
const variableRef = html.indexOf('css/variables.css');
const tokenRef = html.indexOf('css/design-tokens-2026.css');
const baseRef = html.indexOf('css/main.css');
const refreshRef = html.indexOf('css/refresh-2026.css');
check(variableRef >= 0 && variableRef < tokenRef && tokenRef < baseRef && baseRef < refreshRef,
  'Orden de CSS: variables base → tokens 2026 → main → refresh');
check(!/:root\s*\{/.test(refresh), 'Paleta raíz duplicada eliminada de refresh');
for (const [name, value] of Object.entries({
  '--bg': '#242321', '--bg-2': '#292826', '--panel': '#302e2b',
  '--ink': '#eee9e1', '--muted': '#c3bdb4', '--accent': '#c8b16b',
  '--accent-hover': '#d8c68d'
})) {
  check(new RegExp(name + '\\s*:\\s*' + value, 'i').test(tokens), name + ' definido en tokens 2026');
}
check(tokens.includes('--ui-focus'), 'Token de foco visible definido');

for (const f of ['css/variables.css','css/design-tokens-2026.css','css/main.css',
 'css/design.css','css/artefactos-2026.css','css/refresh-2026.css','css/case-study-2026.css']) {
  const css = read(f);
  const noComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const opened = (noComments.match(/\{/g) || []).length;
  const closed = (noComments.match(/\}/g) || []).length;
  check(opened === closed, f + ': llaves CSS equilibradas');
}
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = match[1];
  if (!url || url.startsWith('#') || /^(https?:|mailto:|tel:|data:)/.test(url)) continue;
  const file = url.split(/[?#]/)[0];
  if (file.startsWith('/')) continue;
  check(existsSync(resolve(root, file)), 'Recurso local presente: ' + file);
}
const studies = html.slice(html.indexOf('<section class="section projects" id="proyectos">'));
const studiesOnly = studies.slice(0, studies.indexOf('</section>') + '</section>'.length);
const labels = [...studiesOnly.matchAll(/<span class="case-tile-heading">\s*<strong>([^<]+)/g)].map(m => m[1]);
check(labels.length === 9, 'Nueve casos compactos conservados');
check(labels.slice(0,3).join('|') === 'Proletarian Coin|Raki|Pagana Circular',
 'Orden de prioridad: Proletarian Coin → Raki → Pagana Circular');
check((studiesOnly.match(/name="portfolio-case-2026"/g) || []).length === 9,
 'Comportamiento nativo de apertura única en los casos');

for (const name of ['proletarian-coin','raki','pagana-circular','triad','corpus-tattoo',
 'nota-negra','recorrido','design-system','chile-bajo-la-piel']) {
  const page = read('proyectos/' + name + '.html');
  check(page.includes('../css/case-study-2026.css'), 'Diseño común en caso ' + name);
}
check(caseStyles.includes('body.case-study-2026'), 'Estilos de casos aislados del home');
check((html.match(/data-artifact-panel="/g) || []).length === 5, 'Cinco paneles de LAB preservados');
check((html.match(/<dialog\b/g) || []).length === 3, 'Tres diálogos originales preservados');
check(html.includes('id="contactForm"') && html.includes('data-contact-trigger'),
 'Formulario y activadores de contacto presentes');
check(html.includes('class="rubik-toggle"') && html.includes('rubik-cube rubik-animate'),
 'Cubo Rubik y control de animación conservados');
check((base.match(/\.cta-collapsed,\s*\.cta-expanded,\s*\.cta-arrow\s*\{/g) || []).length === 1,
 'Bloque base duplicado de CTA eliminado');

console.log('\nSistema de diseño 2026: verificaciones estáticas correctas.');
