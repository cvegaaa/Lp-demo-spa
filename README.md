# Plantilla demo — Spa & Centro de Estética

Plantilla genérica de landing page para el sector **spas / estética**, lista para personalizar y desplegar para un negocio real de este mismo rubro.

## Qué es esta plantilla

Una landing page de una sola página, en español, pensada para centros de bienestar y estética. Incluye:

- **Hero** con imágenes en transición y llamada a la acción visible sin desplazarse.
- **Sección de problema/oportunidad** enfocada en la mejora del agendamiento.
- **Servicios** presentados en tarjetas con imagen, descripción y duración.
- **Galería de ambientes** para mostrar la atmósfera del lugar.
- **Testimonios** de ejemplo, claramente marcados como reemplazables.
- **Llamada a la acción final** con datos de contacto (teléfono, WhatsApp, dirección, horario).
- **Pie de página** con navegación y datos de contacto.

El diseño usa una paleta cálida y natural (verde salvia, arena, terracota arcillosa) con tipografía editorial serif (*Cormorant Garamond*) y sans-serif limpia (*Manrope*).

## Cómo personalizarla para un cliente real

Todo el contenido del sitio se centraliza en un único archivo:

```
src/data/configSector.ts
```

Ahí se editan: nombre del negocio, eslogan, servicios, testimonios, imágenes y datos de contacto. No es necesario tocar los componentes para cambiar la información.

### Pasos para personalizar

1. **Clona el repositorio** y entra a la carpeta del proyecto.
2. **Edita `src/data/configSector.ts`**:
   - Cambia `nombre_generico` por el nombre del negocio real.
   - Ajusta `eslogan_sugerido` y `propuesta_valor`.
   - Reemplaza los `servicios` con los reales del negocio.
   - Sustituye los `testimonios` de ejemplo por reseñas reales.
   - Actualiza `datos_contacto_placeholder` con teléfono, WhatsApp, dirección y horario reales.
   - Cambia las URLs de `galeria` y de las imágenes de los servicios por fotos del negocio.
3. **Revisa el título y la descripción** en `index.html` (etiqueta `<title>` y `meta description`).
4. **Ajusta colores y tipografía** en `tailwind.config.js` si la identidad de marca del cliente lo requiere.

## Cómo desplegarla

Esta plantilla es un proyecto Vite + React + TypeScript estático. Se puede desplegar en cualquier hosting de sitios estáticos:

### Opción 1 — Netlify / Vercel / Cloudflare Pages

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. Conecta el repositorio en la plataforma elegida.
3. Configura el comando de construcción:
   - **Comando build:** `npm run build`
   - **Carpeta de salida:** `dist`
4. Despliega. La plataforma publicará el sitio automáticamente en cada cambio.

### Opción 2 — Despliegue manual

1. Ejecuta `npm install` para instalar dependencias.
2. Ejecuta `npm run build` para generar la carpeta `dist/`.
3. Sube el contenido de `dist/` a cualquier hosting estático (Netlify drop, Vercel CLI, GitHub Pages, etc.).

## Requisitos

- Node.js 18 o superior.
- npm (incluido con Node.js).

## Estructura del proyecto

```
src/
├── components/        # Componentes de cada sección de la landing
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProblemaSolucion.tsx
│   ├── Servicios.tsx
│   ├── Galeria.tsx
│   ├── Testimonios.tsx
│   ├── CtaFinal.tsx
│   └── Footer.tsx
├── data/
│   └── configSector.ts   # Único archivo a editar para personalizar
├── App.tsx               # Composición de la página
├── main.tsx
└── index.css             # Estilos base, fuentes y animaciones
```

---

Demo diseñada por [Vegora](https://www.vegora.com.co).
