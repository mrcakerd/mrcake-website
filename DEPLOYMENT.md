# Deployment Guide - CloudFlare Pages

Guía completa para deployment y troubleshooting del sitio Mr. Cake en CloudFlare Pages.

---

## 🚀 Deployment Automático

### Cómo Funciona
1. Haces `git push` a la rama `main` en GitHub
2. CloudFlare detecta el cambio automáticamente
3. Inicia el build (~30 segundos)
4. Deploya el sitio (~1-2 minutos total)
5. El sitio está live en `https://mrcake.lat`

### Verificar Status del Deploy
1. Ve a CloudFlare Dashboard
2. Pages > Mrcake-website
3. Verás el historial de deployments
4. "Success" = todo bien ✅
5. "Failed" = revisar logs ❌

---

## 🔧 Configuración de CloudFlare Pages

### Build Settings
- **Framework preset:** None
- **Build command:** (vacío)
- **Build output directory:** `/`
- **Root directory:** `/`

### Environment Variables
Ninguna configuración especial requerida.

---

## 📁 Archivos Críticos para Deployment

### **`_redirects`**
**IMPORTANTE:** Este archivo es ESENCIAL para que funcionen las subcarpetas.

Ubicación: Raíz del proyecto (mismo nivel que `index.html`)

Formato:
```
/ruta-origen    /ruta-destino/index.html    200
```

⚠️ **El código `200` es importante** - no usar `301` o `302`

Si los forms/blog no cargan, este es el primer lugar a revisar.

### **Nombres de Archivos**
CloudFlare es **case-sensitive**:
- ✅ `index.html` funciona
- ❌ `Index.html` NO funciona con `_redirects`

**Regla de oro:** TODO en minúsculas (excepto `Catalog/`)

---

## 🐛 Troubleshooting Común

### **Problema: "Too Many Redirects"**
**Causa:** Conflicto de nombres entre archivo y carpeta
```
❌ celebration.html + celebration/ = conflicto
✅ celebration.html + celebrations/ = funciona
```

**Solución:** Renombrar uno de los dos

---

### **Problema: Forms/Blog no cargan (muestra página principal)**
**Causa:** `_redirects` incorrecto o falta la ruta

**Solución:**
1. Verificar que la ruta esté en `_redirects`
2. Verificar que la carpeta tenga `index.html` (minúscula)
3. Verificar que el path sea correcto

Ejemplo:
```
# Correcto
/weddings/  /weddings/index.html  200

# Incorrecto
/weddings/  /weddings/Index.html  200  # mayúscula
```

---

### **Problema: Imágenes no cargan**
**Causa 1:** Ruta relativa incorrecta
```
❌ src="images/foto.jpg"  # busca en carpeta actual
✅ src="/images/foto.jpg" # busca desde raíz
```

**Causa 2:** Case-sensitivity
```
❌ src="/Images/foto.jpg"  # carpeta es images/
✅ src="/images/foto.jpg"
```

**Solución:** Usar rutas absolutas siempre (`/images/...`)

---

### **Problema: Cambios no se ven en el navegador**
**Causa:** Caché del navegador

**Solución:**
1. **Hard refresh:** Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
2. **Modo incógnito:** Abrir el sitio en ventana privada
3. **Purgar caché de CloudFlare:**
   - CloudFlare Dashboard > Caching
   - Purge Everything
   - Esperar 1-2 minutos

---

### **Problema: JavaScript no funciona (toggle, menús, etc.)**
**Causa:** Script truncado o falta inicialización

**Verificar:**
1. Que el archivo termine con `</script></body></html>`
2. Que tenga la función de inicialización (ej: `setLang('es')`)
3. Que no haya errores en la consola del navegador (F12 > Console)

---

## 🧪 Testing Antes de Deploy

### **1. Testing Local**
```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve

# Luego abrir: http://localhost:8000
```

### **2. Checklist Pre-Deploy**
- [ ] Todos los archivos en minúscula (excepto Catalog/)
- [ ] Rutas de imágenes absolutas (`/images/...`)
- [ ] `_redirects` actualizado si agregaste rutas nuevas
- [ ] JavaScript completo (no truncado)
- [ ] Links internos usan rutas relativas (`/weddings/` no `https://mrcake.lat/weddings/`)

---

## 📊 Monitoreo Post-Deploy

### **Cosas a Verificar Después de Deploy:**

1. **Navegación principal:** Todos los enlaces del menú funcionan
2. **Forms:** Los 3 forms cargan (`/weddings/`, `/bodas/`, `/celebrations/`)
3. **Blog:** El blog carga + artículos individuales
4. **Imágenes:** Todas las imágenes se ven
5. **Email:** Probar que los forms envíen emails correctamente

### **URLs a Probar:**
```
https://mrcake.lat
https://mrcake.lat/weddings/
https://mrcake.lat/bodas/
https://mrcake.lat/celebrations/
https://mrcake.lat/blog/
https://mrcake.lat/blog/destination-wedding-cake-dominican-republic/
https://mrcake.lat/Catalog/
https://mrcake.lat/celebration.html
https://mrcake.lat/punta-cana.html
```

---

## 🔄 Rollback (Volver a Versión Anterior)

Si algo sale mal después de un deploy:

### **Opción 1: Rollback en CloudFlare**
1. CloudFlare Dashboard > Pages > Mrcake-website
2. Ver historial de deployments
3. Click en deployment anterior que funcionaba
4. "Rollback to this deployment"

### **Opción 2: Revertir en Git**
```bash
# Ver commits recientes
git log --oneline -5

# Volver al commit anterior
git revert HEAD

# O volver a un commit específico
git revert <commit-hash>

# Push
git push
```

---

## 📞 Soporte

Si tienes problemas que no puedes resolver:

1. **Revisar logs de CloudFlare:** Dashboard > Deployment > Ver logs
2. **Revisar consola del navegador:** F12 > Console (para errores JavaScript)
3. **Probar en modo incógnito:** Para descartar caché

---

**Última actualización:** Abril 2025
