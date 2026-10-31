# Contactos, móvil y visibilidad — 31 de octubre de 2026

## Medición
Propiedad GA4 558310718; flujo Portafolio Diego Pazos 2026; medición G-Q18BHF539L. Se marcó generate_lead como evento clave en la interfaz de GA4, verificado por estrella activa. La configuración se aplica a la propiedad compartida entre dominios; los informes del portafolio principal deben filtrar hostname=diegopazos.pages.dev. La conversión empieza desde la activación, sin atribuir retroactivamente los eventos históricos.

Lectura del 1 al 31 de octubre, solo hostname diegopazos.pages.dev: 118 page_view, 5 form_start y 2 generate_lead. Los dos eventos históricos no demuestran dos clientes ni recepción en la bandeja de entrada.

Instrumentación: contact_open al abrir (no al cerrar); contact_form_start una vez por intento; generate_lead tras respuesta confirmada de EmailJS; contact_form_error sin texto libre; contact_phone_click, contact_email_click y contact_whatsapp_click separados de conversiones. El sitio actualmente publica teléfono y formulario, no un mailto o WhatsApp; esos dos manejadores están preparados pero no se inventaron enlaces de contacto. Se eliminó project_type con asunto libre. Se previenen envíos simultáneos y se excluye localhost/127.0.0.1 de la inicialización propia de Analytics.

Pruebas aisladas con EmailJS simulado: validación fallida no envía; error no genera lead; éxito genera un lead; doble clic genera una solicitud; correo/teléfono/WhatsApp no generan lead ni registran sus direcciones. No se enviaron correos reales de prueba: recepción en bandeja y extremo a extremo siguen pendientes. DebugView y recepción de los nuevos eventos no se dan por verificados mediante estas pruebas.

## Rendimiento móvil: línea base real
PageSpeed Insights: https://pagespeed.web.dev/analysis/https-diegopazos-pages-dev/7k7h4j7hdx?form_factor=mobile
Lighthouse 13.6.0, Moto G Power emulado, 4G lenta, captura 31/10/2026 20:10 America/Santiago.
- Rendimiento 99; accesibilidad 98; recomendaciones 100; SEO 100.
- FCP 1,7 s; LCP 1,7 s; TBT 40 ms; CLS 0,007; Speed Index 1,7 s.
- Sin datos de usuarios reales/CrUX. No hay INP de campo ni validación de Core Web Vitals reales.
- Diagnósticos: 7.157 KiB transferidos; imágenes mejorables (ahorro estimado 2.916 KiB); bloqueo de renderizado 680 ms; JavaScript sin usar 74 KiB.

Mejoras: scripts externos diferidos respetando orden; fuente de iconos limitada a nueve símbolos y display=swap; seis previews WebP animados, originales GIF preservados como fallback y ampliación. Peso conjunto de esos seis recursos: 3.917.248 → 2.634.158 bytes (ahorro 1.283.090, 32,8%). No es una reducción del 32,8% de toda la página. No se afirma una nueva puntuación hasta repetir la prueba después del despliegue.

## Revisión visual
Portada comprobada a 390×844 sin desbordamiento horizontal. Se mantuvo ocre #c8b16b, carbón #242321 y tipografía clara. Ajustes: foco ocre, panel del diálogo LAB, áreas táctiles de al menos 44 px en navegación y enlaces de tarjetas, texto de formulario 16 px y jerarquía de encabezados. Los colores internos de obras y marcas se conservan.

## Visibilidad externa
README del repositorio enlaza al dominio Cloudflare principal y el pie enlaza al perfil GitHub confirmado. Dos borradores y enlaces UTM en DIFUSION_PORTAFOLIO_20261031.md. No se publicaron mensajes ni se modificaron biografías de LinkedIn/Behance. Falta resolver y confirmar sus perfiles exactos antes de editarlos.
