# One-pager: Landing Eduardo Legal

## Objetivo
Generar una landing estática en Astro/React/Tailwind que replique visualmente el diseño provisto, con i18n ES/EN, navegación fija y secciones completas, manteniendo tipado estricto y validación runtime con Zod.

## Alcance
- UI completa: navbar, hero, servicios, métricas, about, contacto y footer.
- i18n con detección automática y selector de idioma.
- Estado global con Nanostores.
- Animaciones declarativas con Framer Motion.
- Validación runtime (Zod) para datos y formulario.
- Assets locales optimizables por Vite Image Optimizer.

## Fuera de alcance
- Backend, envío real de formularios o integración con CRM.
- CMS o content collections avanzadas.
- Autenticación o panel administrativo.

## Entradas
- Código React con diseño objetivo y textos ES/EN.
- Assets de referencia (imágenes de fondo/portrait).
- Stack del repo (Astro 5, React 19, Tailwind, Nanostores, Zod).

## Salidas
- Componentes React reutilizables y orquestados por Astro.
- Página `index.astro` actualizada.
- Estilos globales y configuración de Tailwind ajustados.
- Documentación de slice y riesgos.

## Supuestos
- El build es estático (SSG) y no hay backend.
- Se permite usar imágenes locales.

## Precondiciones
- Dependencias instaladas (`just setup`).

## Postcondiciones
- UI renderiza correctamente en desktop y mobile.
- Selector de idioma actualiza textos sin recarga.
- Validación runtime activa para datos y formulario.
- `astro build` genera `frontend/dist` sin errores.

## Casos borde
- Idioma del navegador no soportado (fallback a ES).
- JS deshabilitado (SSR muestra contenido en ES).
- Dispositivos pequeños con menú móvil.
- Fallo de carga de imágenes (alt y fondos degradados visibles).
- Preferencia de reduce motion activa.
