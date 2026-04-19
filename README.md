# Mr. Cake Website

Website oficial de Mr. Cake - Pastelería Creativa en Santo Domingo, República Dominicana.

## 🌐 Live Site
**https://mrcake.lat**

Hosteado en **CloudFlare Pages** con deployment automático desde este repositorio.

---

## 📁 Estructura del Proyecto

```
Mrcake-website/
├── _redirects              # Configuración de rutas para CloudFlare Pages
├── index.html              # Página principal del sitio
├── images/                 # Imágenes globales del sitio
├── weddings/               # Form de bodas (inglés)
│   └── index.html
├── bodas/                  # Form de bodas (español)
│   └── index.html
├── celebrations/           # Form de celebration cakes
│   └── index.html
├── blog/                   # Blog principal + artículos
│   ├── index.html
│   └── [artículos]/        # Cada artículo tiene su carpeta
│       ├── index.html
│       └── images/
├── Catalog/                # Catálogo de bodas
│   └── index.html
├── celebration.html        # Página info de celebration cakes
├── punta-cana.html         # Páginas de locaciones
├── la-romana.html
├── samana.html
└── jarabacoa.html
```

---

## 🔧 Configuración Importante

### **Case-Sensitivity**
⚠️ **TODOS los archivos deben estar en minúsculas** excepto:
- `Catalog/` (carpeta con C mayúscula por razones históricas)

### **Rutas de Imágenes**
- Imágenes globales: `/images/` (raíz)
- Imágenes de artículos del blog: Cada artículo tiene su propia carpeta `images/`
- Siempre usar rutas absolutas: `src="/images/foto.jpg"`

### **Forms**
Los 3 forms (`weddings`, `bodas`, `celebrations`) envían emails automáticamente vía CloudFlare.

---

## 🚀 Deployment

El sitio se deploya automáticamente en CloudFlare Pages cuando se hace push a la rama `main`.

**Tiempo de deploy:** ~1-2 minutos

**URL de preview:** CloudFlare genera URLs de preview para cada commit

---

## 📝 Archivos Clave

### **`_redirects`**
Maneja el routing de CloudFlare Pages. **CRÍTICO** para que funcionen:
- Forms (`/weddings/`, `/bodas/`, `/celebrations/`)
- Blog y artículos
- Catalog

Si un enlace no funciona, revisar este archivo primero.

### **`index.html`** (principal)
- Menú hamburguesa con enlaces a todas las secciones
- Toggle de idioma (ES/EN)
- Enlaces a forms de bodas

### **Forms**
- `weddings/index.html` - Form de bodas en inglés
- `bodas/index.html` - Form de bodas en español  
- `celebrations/index.html` - Form de celebration cakes
- Todos tienen menú de sabores completo (bizcochos, rellenos, rellenos premium)

---

## 🎨 Features

- ✅ Sitio bilingüe (ES/EN) con toggle
- ✅ Blog con artículos individuales
- ✅ 3 forms funcionales con envío de email
- ✅ Catálogo visual de bodas
- ✅ Páginas de destinos (Punta Cana, La Romana, Samaná, Jarabacoa)
- ✅ Responsive design
- ✅ SEO optimizado

---

## 🛠️ Para Desarrolladores

### **Testing Local**
Cualquier servidor HTTP funciona. Ejemplo con Python:
```bash
python3 -m http.server 8000
```

### **Caché del Navegador**
Si los cambios no se reflejan:
1. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
2. Abrir en modo incógnito
3. Purgar caché de CloudFlare (Dashboard > Caching > Purge Everything)

### **Agregar Nuevos Artículos al Blog**
1. Crear carpeta en `blog/` con nombre del artículo (minúsculas, guiones)
2. Agregar `index.html` dentro
3. Si tiene imágenes, crear subcarpeta `images/`
4. Actualizar `blog/index.html` con el nuevo artículo
5. Agregar rutas en `_redirects`

---

## 📧 Contacto

- **Email:** frank@mrcake.lat
- **Instagram:** @mrcake.rd
- **WhatsApp:** +1 (829) 368-4150

---

## 📜 Historial de Migraciones

- **Abril 2025:** Migración de Netlify a CloudFlare Pages
- **Problema principal resuelto:** Case-sensitivity en nombres de archivos
- **Cambios estructurales:** Todo estandarizado a minúsculas

---

**Hecho con 🎂 por Frank González**
