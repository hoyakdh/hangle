---
description: A comprehensive guide and best practices for using Tailwind CSS in this project.
---

# Tailwind CSS Guide

This skill provides guidelines, best practices, and common patterns for using Tailwind CSS in the **Hangle** project.

## 1. Core Principles

### Utility-First
Build complex components from a constrained set of primitive utilities.
- **Do:** `<div class="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">`
- **Don't:** Create custom CSS classes for every component unless absolutely necessary (e.g., complex animations or legacy integrations).

### Mobile-First
Tailwind uses a mobile-first breakpoint system. Unprefixed utilities (e.g., `block`) take effect on all screen sizes, while prefixed utilities (e.g., `md:flex`) only take effect at the specified breakpoint *and above*.
- **Do:** `<div class="block md:flex">` (Block on mobile, Flex on desktop)
- **Don't:** `<div class="md:flex block">` (Order doesn't matter, but conceptually incorrect thinking)

## 2. Project Configuration

### Config File
The project uses a standard `tailwind.config.js` located at the root.
- **Content:** Scans `./src/**/*.{js,ts,jsx,tsx}`.
- **Theme:** Extend the default theme here if you need custom colors or spacing.

### Global Styles
Global styles and custom utility layers are defined in `src/index.css`.
- **`@layer utilities`**: Contains custom utility classes like `.perspective-1000`, `.preserve-3d`, `.backface-hidden`, and `.rotate-y-180` used for card flip animations.
- **Dark Mode**: Configured to verify system preference or manual toggle via class strategy (verified in `UserContext.tsx`).

## 3. Common Patterns & Best Practices

### Layouts
- **Flexbox Centering:** `flex items-center justify-center`
- **Full Screen Center:** `min-h-screen flex items-center justify-center`
- **Grid Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Between Items:** `flex justify-between items-center`

### Typography
- **Headings:** `text-2xl font-bold text-gray-900 dark:text-white`
- **Subtext:** `text-sm text-gray-500 dark:text-gray-400`
- **Links:** `text-indigo-600 hover:text-indigo-500 underline`

### Spacing
- Use the scale (1 = 0.25rem = 4px).
- **Padding:** `p-4` (16px), `px-4 py-2`
- **Margin:** `m-4`, `mt-8`, `space-y-4` (for vertical stack spacing)

### Colors
- **Primary:** `indigo-600` (Light), `indigo-400` (Dark)
- **Backgrounds:** `bg-white` (Light Card), `bg-gray-50` (Light Body), `bg-gray-800` (Dark Card), `bg-gray-900` (Dark Body)
- **Text:** `text-gray-900` (Primary), `text-gray-500` (Secondary)

### Interactive States
- **Hover:** `hover:bg-gray-100`
- **Focus:** `focus:outline-none focus:ring-2 focus:ring-indigo-500`
- **Disabled:** `disabled:opacity-50 disabled:cursor-not-allowed`

### Dark Mode
Prefix classes with `dark:` to apply styles only in dark mode.
- **Example:** `bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`

## 4. Ordering of Classes
To maintain readability, try to order classes logically (though not strictly enforced, consistency helps):
1.  **Layout/Positioning:** `absolute`, `relative`, `flex`, `grid`, `hidden`
2.  **Box Model:** `w-`, `h-`, `p-`, `m-`
3.  **Typography:** `text-`, `font-`
4.  **Visuals:** `bg-`, `border-`, `rounded-`, `shadow-`
5.  **Interactivity:** `hover:`, `focus:`, `cursor-`
6.  **Responsive/State Modifiers:** `md:`, `dark:`

## 5. Handling Dynamic Classes
Tailwind scans files for *complete class names*. Do not dynamically construct class names.
- **Bad:** `<div className={`text-${color}-500`}>` (Tailwind won't find `text-red-500`)
- **Good:**
    ```tsx
    const colorClasses = {
      red: 'text-red-500',
      blue: 'text-blue-500'
    };
    <div className={colorClasses[color]}>
    ```
  Or verify the full class name exists in a safelist (not recommended for large sets).

## 6. Components vs. @apply
- **React Components:** Preferred way to reuse styles. Extract repetitive UI into a component (e.g., `<Button />`).
- **@apply:** Use sparingly in CSS files for modifying third-party libraries or when extracting a complex utility is truly cleaner than a component.

## 7. Useful Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com) (for inspiration)
- [Headless UI](https://headlessui.com) (accessible unstyled components that integrate well)
