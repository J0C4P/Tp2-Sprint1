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