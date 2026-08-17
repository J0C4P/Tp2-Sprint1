```
hola, necesito tu ayuda para un PROMPT.

Quiero diseñar una web que simule una presentacion a un carrito de comidas callejero de tema absurdo. Es un proyecto educativo



Tu tarea NO es diseñar, sino:

- Hacerme todas las preguntas que necesites para tener el contexto completo.

- Analizar las casuisticas que yo no estoy contemplando

- al final devoverme UN prompt final, listo para pegar en una herrmaineta de diseño con IA (Google Stitch)



Restricciones que ya sé:

-Es una SPA web (no mobile app)

-El enfasis principal es la landing page.



Empeza por las preguntas
```

---

```
Create a desktop Single Page Application (SPA) landing page for "88 MPH Diner", an absurd time-traveling street food cart inspired by Back to the Future and 1980s/1990s retro-futuristic sci-fi aesthetics.

Visual & UI Style:
- Aesthetic: 80s/90s retro-futurism, glowing neon accents, brushed stainless steel / DeLorean textures, digital LCD digital readout displays, and classic synthwave grid patterns.
- Color Palette: Matte dark steel gray/black background, radioactive flux-capacitor cyan (#00f0ff), digital clock orange/amber (#ff8800), and plutonium neon pink/red accents.
- Typography: Futuristic bold sans-serif display fonts with digital LED monospaced fonts for prices, dates, and badges.

Page Layout & Sections (Single Page Scroll):
1. Sticky Header / Navigation:
   - Brand logo: "88 MPH Diner: Street Food Across Decades".
   - Current Timeline status badge (e.g., "Parked in: Hill Valley, 1985").
   - Quick jump links: "Temporal Menu", "Timeline Radar", "Time Travelers' Reviews", and a glowing "Order to the Future" CTA button with a floating item counter badge.

2. Hero Section:
   - Catchy, humorous headline: "Fast Food at 88 Miles Per Hour — Where We're Going, We Don't Need Plates."
   - Subtitle: "Authentic street food cooked 5 minutes before the Big Bang, served fresh 30 years from tomorrow."
   - Hero visual: A futuristic, neon-lit mobile food truck with smoking tire tracks, gull-wing serving hatch, and hovering food trays.
   - Dual Call to Action: "Explore Menu" (Primary orange neon button) & "Select Delivery Century" (Ghost cyan button).

3. The Temporal Menu (Interactive Grid):
   - Category Tabs styled as time-circuit switches: "Prehistoric Jurassic Snacks", "1955 Diner Classics", "2015 Cyber Fast Food", and "Paradox Combos".
   - Product Cards featuring:
     * Card 1: "T-Rex Crispy Strips" (Aged 65 million years, Extra Crunchy) — Price: $12.50 or 0.0003 Space Credits.
     * Card 2: "Plutonium-Spiced Hover Burger" (Warning: May alter your timeline) — Includes radioactive glow badge.
     * Card 3: "DeLorean Loaded Tacos" (Served exactly 1 minute before you ordered them).
     * Card 4: "Flux Milkshake" (Generates 1.21 Gigawatts of pure sugar).
   - Card micro-interactions: Timeline selector tag, "+ Add to Temporal Cart" button, and funny allergen warnings ("Contains nuts, gluten, and bootstrap paradoxes").

4. Live "Paradox-Free" Tracking Widget:
   - A playful interactive UI module showing the cart's location across different centuries (1885, 1955, 1985, 2015, 2088) with a simulated digital timeline scanner.

5. Customer Reviews from the Multi-Timeline:
   - 3 testimonial cards from absurd historical and future characters (e.g., a Victorian gentleman complaining about spicy quantum salsa, a 2015 hoverboarder, a medieval knight loving the tacos).

6. Absurd Checkout / Order Modal Simulator:
   - Interactive slide-over drawer showing selected items, delivery timeline picker (Dropdown: "Deliver to Yesterday", "Deliver in 1985", "Deliver 10 minutes ago"), and a total summary with a "Timeline Insurance" fee.

7. Retro Footer:
   - Time-travel safety disclaimer, copyright "1885–2088 Doc & Marty Street Foods Inc.", and social links styled as time frequencies.
```

design.md

```
---
name: Chronos Retro-Futurist
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffb781'
  on-secondary: '#4e2600'
  secondary-container: '#ff8a0d'
  on-secondary-container: '#623000'
  tertiary: '#fff3f4'
  on-tertiary: '#65002e'
  tertiary-container: '#ffccd7'
  on-tertiary-container: '#bb005b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb781'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#ffb1c4'
  on-tertiary-fixed: '#3f001a'
  on-tertiary-fixed-variant: '#8f0044'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-rg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies the high-octane energy of an 80s sci-fi blockbuster. It targets a nostalgic yet tech-savvy audience through a "Vapor-Mechanical" aesthetic—fusing the raw, industrial grit of brushed stainless steel with the hyper-vibrant glow of synthwave neon. The emotional response is one of adrenaline, "retro-future" wonder, and tactical precision.

The UI avoids flat, modern minimalism in favor of **High-Contrast Retro-Futurism**. This involves:
- **Luminous Depth:** Surfaces emit light rather than just reflecting it, mimicking vacuum tubes and LED panels.
- **Industrial Texture:** Heavy use of metallic gradients and grain to ground the ethereal neon elements.
- **Chronological Motifs:** Visual references to time-circuits, flux capacitors, and digital dashboard readouts.

## Colors
The palette is built on a "Dark Void" foundation to allow the neon accents to achieve maximum perceptual brightness (glow).

- **Primary (Radioactive Flux Cyan):** Used for interactive states, primary actions, and "energized" components.
- **Secondary (Digital Clock Amber):** Used for warnings, technical data, and secondary UI status indicators.
- **Accent (Plutonium Pink):** Reserved for high-alert states, critical errors, or special "limited time" street food offers.
- **Base (Brushed Steel):** A deep matte gray/black (#121214) provides the canvas, while a slightly lighter surface (#1a1a1c) is used for elevated containers.

## Typography
The typography system follows a "Cockpit Readout" hierarchy:
- **Headlines (Sora):** Wide, geometric, and bold. Used to command attention like a dashboard warning.
- **Body (Hanken Grotesk):** Sharp and contemporary, ensuring high legibility against dark, textured backgrounds.
- **Data & UI (JetBrains Mono):** The workhorse for prices, timestamps, and technical specs. This font should be treated with a slight `text-shadow` glow in the primary or secondary color to simulate an LCD screen.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model to mimic the rigid, modular nature of 80s hardware interfaces. 

- **Grid:** 12-column system on desktop with a heavy 32px gutter to allow the background "metal" to breathe.
- **Rhythm:** All spacing must be multiples of 4px. Use wider internal padding in cards (24px+) to create a sense of "enclosure."
- **Adaptation:** On mobile, margins tighten to 20px, and complex data tables reflow into vertically stacked "Circuit Cards."

## Elevation & Depth
Depth is not achieved through traditional soft shadows, but through **Tonal Layering** and **Glow Radiance**.

1.  **Level 0 (Floor):** Matte Steel (#121214) with a subtle grain texture overlay.
2.  **Level 1 (Sub-panel):** Darker Steel (#1a1a1c) with a 1px solid border of #ffffff (10% opacity).
3.  **Level 2 (Active Component):** Brushed metal gradient with a 2px "Neon Stroke" (Primary or Secondary color) and a corresponding `box-shadow` blur of 15px in that same color to simulate light emission.
4.  **Glassmorphism:** Use `backdrop-filter: blur(12px)` for overlays and modals, tinted with 20% of the Primary color to suggest a high-tech HUD.

## Shapes
The shape language is "Tactical & Geometric." 

- **Corners:** Use "Soft" (0.25rem) roundedness for most UI elements to maintain a machined look. Avoid perfectly round circles unless they are circular "gauges."
- **Angled Cuts:** For primary buttons or headers, use a 45-degree chamfered (clipped) corner on the top-right to reinforce the futuristic military-grade aesthetic.
- **Dividers:** Use 1px dashed lines (JetBrains Mono style) to separate data sections.

## Components
- **Buttons:** High-contrast containers with a 2px neon border. Hovering triggers a "Pulse" animation where the glow expands and the text color shifts to white.
- **Chips/Badges:** Styled as 7-segment display segments. Use `JetBrains Mono` and a background color at 15% opacity of the stroke color.
- **Input Fields:** Bottom-border only (2px), glowing Cyan when focused. Labels should be small, all-caps, and positioned above the field like a label on a switchboard.
- **Cards:** The header should feature a "Brushed Stainless" horizontal gradient. The body is semi-transparent glass.
- **Time-Circuit Tabs:** Horizontal segments that toggle with a mechanical "click" sound (visualized by a sudden color snap from Amber to Cyan).
- **Progress Bars:** Segmented blocks (like a battery charge indicator) rather than a smooth continuous fill.
```

---

```
Leé el design system en .kiro/steering/design.md y traducí los tokens de colors, typography, rounded y spacing a vraiables @theme de tailwind v4 en src/index.css - Un token = una variable css. - Importá las fuentes de GoogleFonts en el index.css - No escribas ningún componente todavia
```

---

```
Perfecto, ya leí el design system. Ahora voy a traducir todos los tokens a variables CSS de Tailwind v4 en el archivo `src/index.css`.Listo! He traducido todos los tokens del design system a variables CSS de Tailwind v4:

**✅ Colors** - Todos los colores del sistema (surface, primary, secondary, tertiary, error, fixed, background)

**✅ Typography** - Familias de fuentes, tamaños, pesos, line-heights y letter-spacing para:
- display-lg (desktop y mobile)
- headline-md
- body-rg
- data-mono
- label-caps

**✅ Rounded** - Los 6 valores de border-radius (sm, default, md, lg, xl, full)

**✅ Spacing** - Todos los tokens de espaciado (unit, gutter, margins, stacks)

**✅ Google Fonts** - Importadas las 3 fuentes necesarias:
- Sora (700, 800)
- Hanken Grotesk (400, 500, 600, 700)
- JetBrains Mono (500, 700)

Ahora podés usar estos tokens en tu código con las clases de Tailwind, por ejemplo: `text-primary`, `bg-surface`, `font-display-lg`, `rounded-md`, etc.
```
---

```
Adjunto el screenshot de la landing (_design-reference/landing.png) y

el HTML de referencia (_design-reference/landing.html).

Implementá SOLO la sección Hero, como src/components/Hero.jsx.

Requisitos:

React + Tailwind v4, usando las variables @theme que ya definimos.

Respetá el design system de .kiro/steering/design.md.

HTML semántico:

,
, <button>. Nada de
.
Mobile first y responsive (mobile y desktop).

Sin useState: todavía no lo vimos en clase. Datos hardcodeados.

export default y props desestructuradas si hace falta.

Los textos, en español.

El HTML de referencia es SOLO para tomar estructura y medidas.

NO lo copies: traducilo a JSX componentizado y limpio.
```

---

```
Voy a leer los archivos de referencia para implementar el Hero correctamente.Perfecto, ahora voy a crear el componente Hero con React y las variables @theme que definimos. Voy a traducir la estructura del HTML a JSX componentizado, semántico y responsive.Listo! He creado el componente Hero con las siguientes características:

✅ **React + Tailwind v4**: Usa las variables CSS @theme que definimos (`--font-family-display`, `--font-family-body`, `--font-family-mono`)

✅ **Design System**: Respeta todos los colores y tipografías del sistema (Primary Cyan, Secondary Amber, efectos de glow neon)

✅ **HTML Semántico**: 
- `<section>` para el contenedor principal
- `<h1>` para el título principal
- `<button>` para las acciones (no divs)
- ARIA labels para accesibilidad

✅ **Mobile First y Responsive**:
- Grid que se adapta de 1 columna (mobile) a 12 columnas (desktop)
- Imagen del hero solo visible en `lg:` (desktop)
- Typography fluida con `clamp()` 
- Espaciado adaptativo (`md:` breakpoints)

✅ **Sin useState**: Todo hardcodeado como pediste

✅ **Textos en Español**: Todos los textos traducidos

✅ **Efectos Retro-Futuristas**:
- Neon glow en textos y bordes
- Badge con animación pulse
- Hover states con transiciones
- Scanlines y gradientes industriales
- Background con blur y overlay

El componente está listo para importar y usar en tu App. 🚀
```