---
name: Aged Caribbean Luminance
colors:
  surface: '#fff8f4'
  surface-dim: '#e8d7c9'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e7'
  surface-container: '#fdebdc'
  surface-container-high: '#f7e5d7'
  surface-container-highest: '#f1dfd1'
  on-surface: '#231a11'
  on-surface-variant: '#514535'
  inverse-surface: '#392f25'
  inverse-on-surface: '#ffeee0'
  outline: '#847563'
  outline-variant: '#d6c4af'
  surface-tint: '#825500'
  primary: '#825500'
  on-primary: '#ffffff'
  primary-container: '#c8860a'
  on-primary-container: '#3f2700'
  inverse-primary: '#ffb950'
  secondary: '#605e58'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2da'
  on-secondary-container: '#67645e'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#939494'
  on-tertiary-container: '#2b2d2d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb3'
  primary-fixed-dim: '#ffb950'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#e7e2da'
  secondary-fixed-dim: '#cac6bf'
  on-secondary-fixed: '#1d1c17'
  on-secondary-fixed-variant: '#494741'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fff8f4'
  on-background: '#231a11'
  surface-variant: '#f1dfd1'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  title-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-page: 40px
  section-padding: 80px
---

## Brand & Style

The design system is centered on the concept of "Distilled Elegance." It targets a discerning audience that appreciates the craftsmanship of premium Caribbean rum and the heritage of Yazoo Investment Srl. The UI must evoke feelings of warmth, exclusivity, and effortless luxury.

The aesthetic follows a **Minimalist-Tactile** hybrid style. It leverages heavy whitespace to create a "light and airy" atmosphere, while using soft shadows and subtle borders to provide a sense of physical quality and depth. Every interaction should feel intentional and smooth, mirroring the slow pour of a fine aged spirit.

## Colors

The palette is inspired by the sun-drenched landscapes of the Caribbean and the liquid gold of aged rum. 

- **Primary Action (#C8860A):** A warm amber used sparingly for calls to action, active states, and refined accents.
- **Surface Cream (#FDF8F0):** Used for section backgrounds and card containers to soften the starkness of pure white, providing a "paper-like" premium feel.
- **Pure White (#FFFFFF):** The primary canvas color, ensuring the layout feels spacious and clean.
- **Borders:** Subtle amber tints with low opacity are used to define structure without adding visual noise.

## Typography

This design system utilizes a pairing of **Epilogue** and **Manrope** to balance editorial flair with modern readability.

- **Epilogue** is reserved for headlines. Its geometric yet distinctive character provides an upscale, boutique feel. Use light weights for large display text to emphasize sophistication.
- **Manrope** handles all functional text. Its refined and balanced proportions ensure clarity in body copy and labels. 
- Use wide letter-spacing for uppercase labels to denote luxury and hierarchy.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system centered on the screen, emphasizing a curated, "gallery-style" presentation. 

- **Grid:** A 12-column grid with generous 24px gutters.
- **Rhythm:** Spacing follows an 8px base unit. Section vertical padding should be significant (80px+) to allow the content to "breathe."
- **Alignment:** Content is primarily left-aligned for readability, while hero sections may use centered compositions to evoke a sense of formal balance.

## Elevation & Depth

Hierarchy is achieved through **Ambient Shadows** and **Tonal Layering**. 

- **Shadows:** Use extremely soft, diffused shadows with a slight amber tint (`rgba(200, 134, 10, 0.08)`). Shadows should have a large blur radius (20px-40px) and minimal offset to mimic natural, overhead lighting.
- **Layering:** The base layer is always White (#FFFFFF). Secondary information or interactive cards sit on a Surface Cream (#FDF8F0) layer. 
- **Borders:** A 1px border in a faded amber (`rgba(200, 134, 10, 0.2)`) is used on cards and inputs to provide definition against the light backgrounds.

## Shapes

The shape language is defined by **Softened Geometry**. 

- **Standard Radius:** 16px is the default for buttons, input fields, and small cards. This creates an approachable and premium feel.
- **Large Radius:** 24px is used for primary layout containers or featured image modules.
- **Interactive Elements:** Buttons maintain the 16px radius, avoiding full "pills" to keep the aesthetic more architectural and less casual.

## Components

- **Buttons:** Primary buttons use the Amber (#C8860A) background with White text. Secondary buttons are ghost-style with a 1px amber border.
- **Input Fields:** Use the Warm Cream (#FDF8F0) background with a subtle amber border on focus. Labels should be in the `label-caps` typography style.
- **Cards:** Elevated with a 16px radius and a soft ambient shadow. Background is typically Cream (#FDF8F0) to differentiate from the White page background.
- **Chips/Tags:** Small, 16px rounded elements with a light amber tint and Manrope Bold text for categorizing rum regions or aging notes.
- **Lists:** Clean, border-less lists with generous vertical padding (16px) between items, separated by a 1px Cream-Darker divider.
- **Featured Component (The "Bottle Showcase"):** A specialized card component with a high-depth shadow and centered imagery to highlight specific rum bottles.