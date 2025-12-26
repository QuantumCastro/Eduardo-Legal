# Matriz de riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- |
| Desfase visual vs. diseño de referencia | Media | Alta | Reproducir layout, tipografías y paleta; ajustar spacing en QA visual. |
| i18n no sincroniza entre secciones | Media | Media | Estado global con Nanostores y una sola isla React. |
| Peso JS elevado por animaciones | Media | Media | Animaciones discretas y uso de `useReducedMotion`. |
| Optimización de imágenes desactivada | Media | Baja | Documentar `ENABLE_IMAGE_OPTIMIZER` y usar assets locales. |
| Validación de formulario insuficiente | Baja | Media | Esquema Zod + mensajes de error por campo. |
