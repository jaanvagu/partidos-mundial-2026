# Guía de Partidos 2026

Frontend estático para el calendario del Mundial 2026 con enriquecimiento silencioso de resultados en vivo y finales desde la API pública de Cultura Runner.

## Configuración local

1. Usa `site/config.js` como punto central de configuración.
2. Debe quedar así:

```js
window.APP_CONFIG = {
  API_BASE_URL: "https://api.culturarunner.com.co",
};
```

## Despliegue

- El sitio carga `site/config.js` antes de `site/app.js`.
- En Hostinger o cualquier despliegue estático, asegúrate de publicar `config.js` junto con el sitio.
- GitHub Actions ya no necesita secrets de API token para resultados.

## Notas de integración

- El fixture principal sigue quemado en frontend.
- Los resultados se consultan desde `GET /api/results` sin headers de autenticación.
- El frontend guarda el último resultado válido en `localStorage` y lo reutiliza si la API falla.
- Si no hay datos válidos, la interfaz conserva el comportamiento original sin mostrar errores al usuario.
- La protección de la API pública vive del lado backend con CORS, control de origen/referer y rate limit, no con tokens embebidos en frontend.
