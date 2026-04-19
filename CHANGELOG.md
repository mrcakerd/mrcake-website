# Changelog

Todos los cambios importantes del proyecto Mr. Cake Website.

---

## [2.0.0] - 2025-04-19

### 🚀 Migración a CloudFlare Pages

**BREAKING CHANGES:**
- Migración completa de Netlify a CloudFlare Pages
- Toda la estructura de archivos estandarizada a minúsculas

### ✅ Fixed
- **Forms no cargaban:** Renombrados todos los `Index.html` → `index.html`
- **Blog no funcionaba:** Carpeta `BLOG/` renombrada a `blog/`
- **Artículos no cargaban:** Actualizado archivo `_redirects` con rutas correctas
- **Imágenes de locaciones no aparecían:** Corregidas rutas de `src="wedding-01.jpeg"` a `src="/images/wedding-01.jpeg"`
- **Catálogo sin toggle de idioma:** Completado JavaScript truncado + inicialización `setLang('es')`
- **Loop infinito en celebrations:** Renombrada carpeta del form a `celebrations/` (con S)

### ➕ Added
- Archivo `_redirects` para manejo de rutas en CloudFlare
- Menú completo de sabores en form de celebrations (bizcochos, rellenos, rellenos premium)
- README.md con documentación completa del proyecto
- CHANGELOG.md para tracking de cambios

### 🔧 Changed
- Todas las rutas de imágenes cambiadas a absolutas (`/images/...`)
- Enlaces internos cambiados de absolutos a relativos donde corresponde
- Estructura de carpetas completamente en minúsculas (excepto `Catalog/`)

### 📄 Files Modified
- `_redirects` - Creado desde cero
- `index.html` (principal) - Actualizado enlace del blog y catalog
- `Catalog/index.html` - Completado JavaScript + enlaces a forms
- `celebration.html` - Enlaces a form corregidos
- `celebrations/index.html` - Agregado menú de sabores
- `punta-cana.html` - Rutas de imágenes corregidas
- `la-romana.html` - Rutas de imágenes corregidas
- `samana.html` - Rutas de imágenes corregidas
- `jarabacoa.html` - Rutas de imágenes corregidas

---

## [1.0.0] - 2024

### Versión inicial en Netlify
- Sitio web completo con forms, blog, catálogo
- Sistema bilingüe (ES/EN)
- Forms de bodas y celebrations
- Blog con artículos
- Páginas de destinos

---

## Leyenda de Tipos de Cambios

- `Added` - Nuevas funcionalidades
- `Changed` - Cambios en funcionalidades existentes
- `Deprecated` - Funcionalidades que serán removidas
- `Removed` - Funcionalidades removidas
- `Fixed` - Bugs corregidos
- `Security` - Vulnerabilidades corregidas
