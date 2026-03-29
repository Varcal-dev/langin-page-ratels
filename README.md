# 🦡 Ratels All Stars — Landing Page

> **Piel de hierro · Corazón de fuego**

Landing page oficial del club de cheerleading **Ratels All Stars**, diseñada para captación de atletas, posicionamiento de marca y conversión directa a inscripción.

---

## 🚀 Descripción

Este proyecto es una **landing page orientada a conversión**, construida como activo de marketing digital para el club. Combina identidad de marca fuerte, claridad comercial y psicología de conversión para transformar visitas en leads reales.

**Enfocada en:**
- Captar nuevos atletas (niños, jóvenes y adultos)
- Comunicar la identidad tribal del club
- Mostrar oferta formativa y competitiva con transparencia
- Convertir visitas en leads mediante formulario y WhatsApp

---

## 🎯 Objetivos del proyecto

| Objetivo | Indicador |
|---|---|
| Incrementar inscripciones mensuales | Formularios enviados / mes |
| Reducir fricción en el proceso de registro | Tasa de abandono del formulario |
| Posicionar a Ratels como referente regional | Tráfico orgánico + tiempo en página |
| Validar interés de nuevos públicos | Clicks en WhatsApp / Test de nivel |

---

## 🧩 Estructura de la página

La landing está organizada en **13 secciones estratégicas** ordenadas por el flujo de conversión:

```
01 · Hero              → Primera impresión + CTA principal
02 · Diferenciación    → ¿Por qué Ratels y no otro club?
03 · Identidad         → Filosofía, valores y esencia de marca
04 · Grupos            → Segmentación por edades y niveles
05 · Horarios          → Calendario semanal detallado
06 · Precios           → Transparencia total de costos
07 · Equipo            → Coaches, roles y credenciales
08 · Metodología       → 5 pilares de formación
09 · Contenido real    → Videos, galería e Instagram
10 · Prueba social     → Testimonios y métricas del club
11 · Cultura tribal    → Rituales, identidad y grito Ratels
12 · Test interactivo  → Descubre tu grupo ideal
13 · Ubicación         → Mapa, horarios y estado en tiempo real
14 · Conversión final  → Formulario + WhatsApp prellenado
15 · FAQ               → Respuestas a objeciones comunes
```

### Detalle por sección

<details>
<summary><strong>01 · Hero</strong></summary>

- Video de fondo en loop (equipo entrenando)
- Propuesta de valor clara y directa
- Badge de urgencia: cupos limitados + fecha de cierre
- Dos CTAs: "Inscríbete ahora" y "¿En qué grupo estás?"
- Badges de confianza: edades, sin experiencia, precio desde
</details>

<details>
<summary><strong>04 · Grupos</strong></summary>

| Grupo | Edades | Tipo |
|---|---|---|
| Mini Ratels | 4 – 7 años | Formativo |
| Junior Ratels | 8 – 11 años | Formativo |
| Youth Ratels | 12 – 15 años | Competitivo |
| Senior Ratels | 16 – 20 años | Élite |
| Open / All Stars | 21+ años | Abierto |
| Performance Team | Mixto | Shows / Escénico |
</details>

<details>
<summary><strong>06 · Precios</strong></summary>

| Concepto | Valor |
|---|---|
| Inscripción (única) | $50.000 COP |
| Mensualidad | $80.000 COP |
| Temporada competitiva | A consultar |

Incluye: camiseta oficial + seguro médico deportivo + acceso a sesiones de tumbling.
</details>

<details>
<summary><strong>08 · Metodología — 5 pilares</strong></summary>

1. **Fundamentos técnicos** — postura, saltos, brazos, posiciones
2. **Acrobacia & Tumbling** — progresión desde cero hasta nivel competitivo
3. **Stunts & Pirámides** — elevaciones con protocolo de seguridad estricto
4. **Coreografía & Escenario** — presencia, sincronía y puesta en escena
5. **Mentalidad competitiva** — presión, resiliencia y concentración
</details>

<details>
<summary><strong>12 · Test interactivo</strong></summary>

Quiz de 4 preguntas que determina el grupo ideal del usuario:
- ¿Cuántos años tienes?
- ¿Tienes experiencia previa?
- ¿Qué te mueve?
- ¿Cuántos días puedes entrenar?

Resultado personalizado con descripción del grupo + CTA directo a inscripción.
</details>

<details>
<summary><strong>13 · Ubicación interactiva</strong></summary>

- **Indicador en tiempo real**: Abierto / Cerrado según horario del club
- **Resaltado del día actual** en la tabla de horarios
- **Botón copiar dirección** con feedback visual
- **Mapa lazy-load**: se carga solo cuando el usuario lo solicita (mejora performance)
</details>

---

## 🛠️ Tecnologías utilizadas

```
Frontend:    HTML5 · CSS3 · JavaScript (Vanilla)
Tipografías: Bebas Neue · Rajdhani · Orbitron (Google Fonts)
Estilos:     CSS personalizado con variables y animaciones nativas
Integraciones:
  · WhatsApp Click-to-Chat API
  · Google Maps Embed (lazy load)
  · Instagram (enlace externo)
```

> ⚠️ No depende de frameworks externos. Cero dependencias npm. Funciona como archivo estático.

---

## 📲 Flujo de conversión

```
Usuario llega
    │
    ▼
Hero: propuesta de valor + urgencia
    │
    ▼
Explora grupos → identifica el suyo
    │
    ▼
Revisa precio → sin fricción, todo claro
    │
    ▼
Lee testimonios → confía
    │
    ▼
Hace el test → grupo confirmado
    │
    ├──► Formulario → Lead guardado
    │
    └──► WhatsApp (mensaje prellenado) → Contacto directo
```

---

## 📌 Características implementadas

### Diseño y UX
- [x] Cursor personalizado (vinotinto)
- [x] Barra de progreso de scroll
- [x] Animaciones de reveal al hacer scroll (IntersectionObserver)
- [x] Hero con video de fondo en loop + fallback poster
- [x] Líneas de scratch animadas en el hero
- [x] Textura de ruido (noise) sutil sobre toda la página
- [x] Tema oscuro con paleta: negro · plateado · vinotinto

### Navegación
- [x] Navbar fija con blur y borde al hacer scroll
- [x] Resaltado automático del ítem activo según sección visible
- [x] Menú hamburguesa para móvil (panel lateral animado)
- [x] Bloqueo de scroll al abrir menú móvil
- [x] Cierre con tecla Escape y clic en fondo oscuro

### Conversión
- [x] Banner de urgencia permanente (cupos limitados + fecha)
- [x] Formulario de captura (nombre, edad, grupo, teléfono)
- [x] Botón WhatsApp con mensaje prellenado automático
- [x] Botón flotante WhatsApp siempre visible
- [x] Estado de éxito tras enviar formulario
- [x] Test interactivo de 4 pasos con resultado personalizado

### Contenido interactivo
- [x] Quiz de nivel con barra de progreso
- [x] Indicador "Abierto ahora / Cerrado" en tiempo real
- [x] Fila del día actual resaltada en horarios
- [x] Copiar dirección al portapapeles con feedback visual
- [x] Mapa de Google Maps con carga lazy (no bloquea performance)

### Performance
- [x] Fuentes cargadas desde Google Fonts con preconnect implícito
- [x] Mapa embebido con `loading="lazy"`
- [x] Video hero con fade-in progresivo y fallback
- [x] Sin dependencias externas de JavaScript

---

## ⚠️ Mejoras futuras

### Prioridad alta
- [ ] **Backend de formulario** — integración con Google Sheets, Notion o CRM propio
- [ ] **Automatización de leads** — WhatsApp Business API + respuesta automática
- [ ] **SEO local avanzado** — schema markup LocalBusiness, meta tags optimizados
- [ ] **Menú móvil mejorado** — acceso a Ubicación y FAQ desde nav

### Prioridad media
- [ ] **Countdown timer real** — contador regresivo hacia fecha de cierre de inscripciones
- [ ] **Sección de competencias** — calendario de torneos de la temporada
- [ ] **Galería real** — grid con fotos y videos reales del equipo
- [ ] **Optimización para Meta Ads** — pixel de Facebook + eventos de conversión
- [ ] **Google Analytics 4** — seguimiento de eventos (formulario, WhatsApp, test)

### Prioridad baja
- [ ] **Sistema de inscripción online completo** — pago en línea
- [ ] **Dashboard de métricas** — panel de conversiones en tiempo real
- [ ] **Modo claro** — toggle dark/light mode
- [ ] **Multiidioma** — versión en inglés para atletas internacionales
- [ ] **CheerManager** — integración con software de gestión del club

---

## 📊 Métricas sugeridas

| Métrica | Herramienta sugerida |
|---|---|
| Tasa de conversión (%) | Google Analytics 4 |
| Clicks en WhatsApp | GA4 Events |
| Formularios enviados | GA4 / Google Sheets |
| Tiempo en página | GA4 |
| Sección más visitada | Hotjar / Microsoft Clarity |
| Tasa de rebote | GA4 |
| Tráfico por fuente | GA4 + UTM params |

> **Tip**: usa parámetros UTM en los links de Instagram para saber exactamente cuántas visitas y leads vienen desde redes sociales.

---

## 📁 Estructura de archivos

```
ratels-allstars/
├── index.html              # Landing page principal
├── styles_2.css            # Estilos globales
├── README.md               # Este archivo
├── /img/
│   ├── hero-poster.jpg     # Frame de fallback del video hero
│   ├── gimnasio-ratels.jpg # Foto de instalaciones
│   ├── coach-head.jpg      # Foto Head Coach
│   ├── coach-acro.jpg      # Foto Coach Acrobacia
│   ├── coach-danza.jpg     # Foto Coach Coreografía
│   └── coach-mini.jpg      # Foto Coach Mini/Junior
└── /video/
    └── hero-reel.mp4       # Video hero (8–15 seg, loop, sin audio)
```

---

## 🧠 Enfoque estratégico

Esta landing no es solo informativa — **es un activo de marketing**.

```
Branding emocional     →  Identidad tribal Ratels
Claridad comercial     →  Precios, grupos, proceso
Psicología conversión  →  Urgencia, prueba social, test
Acción inmediata       →  CTA + WhatsApp en cada sección
```

El copy está diseñado para hablar directamente a **tres audiencias simultáneas**:
- **Padres** → seguridad, metodología, precios claros, coaches reales
- **Jóvenes** → competencia, identidad, tribu, reto
- **Adultos** → inclusión, comunidad, sin límite de edad

---

## 👥 Público objetivo

| Segmento | Edad | Motivación principal |
|---|---|---|
| Padres de niños pequeños | Adultos (hijos 4–11) | Actividad física + disciplina |
| Jóvenes competitivos | 12–20 años | Competencia + identidad |
| Adultos activos | 21+ años | Comunidad + deporte |
| Sin experiencia | Todas | Aprender desde cero |

---

## 📍 Información del club

| | |
|---|---|
| **Club** | Ratels All Stars |
| **Modalidad** | Cheerleading formativo y competitivo |
| **Ubicación** | Florencia, Caquetá, Colombia |
| **Dirección** | Calle 20 #2-28, Barrio el Convenio |
| **WhatsApp** | +57 XXX XXX XXXX |
| **Instagram** | @ratelsallstars |
| **Horario** | Lun–Vie 2:00 PM – 9:00 PM · Sáb 8:00 AM – 2:00 PM |

---

## 🦡 Filosofía Ratels

> *"No entrenamos atletas. Forjamos guerreros del escenario."*

**Piel de hierro** → disciplina, técnica, fortaleza, entrenamiento.  
**Corazón de fuego** → pasión, energía, espíritu de equipo, entrega.

```
¡PIEL DE HIERRO! — ¡CORAZÓN DE FUEGO!
```

---

## 📄 Licencia

© 2025 **Ratels All Stars** · Florencia, Caquetá, Colombia  
Todos los derechos reservados.

---

*Construido con HTML5 · CSS3 · JavaScript · Mucho fuego interno 🔥*
