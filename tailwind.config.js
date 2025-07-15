/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.css",
    "./**/*.js", // in case you move your scripts to .js files
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        script: ["Tangerine", "cursive"],
        arabic: ["Scheherazade New", "serif"],
      },
      boxShadow: {
        'inner': 'inset 0 2px 8px 0 rgba(0,0,0,0.10)',
      },
      zIndex: {
        '60': '60',
        '99': '99',
        '100': '100',
      }
    },
  },
  safelist: [
    // Buttons & Cards
    'bg-blue-600', 'bg-blue-700', 'bg-blue-100', 'bg-blue-200', 'bg-blue-800', 'bg-slate-100', 'bg-slate-200', 'bg-slate-500', 'bg-slate-600', 'bg-slate-700', 'bg-slate-800', 'bg-white', 'bg-white/95', 'bg-white/80', 'bg-black/30', 'bg-black/50', 'bg-green-500', 'bg-green-600', 'bg-green-100', 'bg-green-800', 'bg-red-500', 'bg-red-600',
    'text-white', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-slate-400', 'text-slate-500', 'text-slate-600', 'text-slate-700', 'text-slate-800', 'text-green-500', 'text-green-800', 'text-red-500', 'text-xs', 'text-sm', 'text-lg', 'text-xl', 'text-2xl', 'text-4xl', 'text-5xl', 'text-base',
    // Spacing and Padding
    'px-4', 'px-5', 'px-6', 'px-8', 'px-2', 'py-2', 'py-3', 'py-4', 'py-6', 'py-8', 'p-4', 'p-6', 'p-8', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mt-1', 'mt-2', 'mt-4', 'mt-6', 'mt-8', 'mt-2', 'mt-3', 'my-1', 'my-2', 'my-4', 'pt-2', 'pt-4', 'pt-6',
    // Border radius and shadow
    'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full',
    'shadow', 'shadow-lg', 'shadow-xl', 'shadow-sm', 'shadow-inner',
    // Flex/Grid/Layout
    'flex', 'flex-1', 'flex-col', 'flex-row', 'flex-grow', 'flex-shrink-0', 'flex-col', 'items-center', 'items-end', 'items-between', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'space-y-1', 'space-y-2', 'space-y-3', 'space-y-4', 'space-y-6', 'space-x-2', 'space-x-3', 'space-x-4',
    // Width/Max-width/Height
    'w-full', 'w-0', 'w-5', 'w-10', 'w-16', 'w-20', 'w-24', 'w-32', 'w-64', 'w-80', 'w-96', 'max-w-sm', 'max-w-xs', 'max-w-md', 'h-full', 'h-0', 'h-5', 'h-10', 'h-16', 'h-20', 'h-24', 'h-32', 'h-64', 'h-80', 'h-96', 'min-h-screen',
    // Positioning, Z, Overflow
    'relative', 'absolute', 'fixed', 'inset-0', 'top-0', 'bottom-0', 'left-0', 'right-0', 'z-10', 'z-50', 'z-60', 'z-99', 'z-100', 'overflow-y-auto', 'overflow-hidden',
    // Border, Outline, Ring, Transition
    'border', 'border-t', 'border-slate-200', 'border-slate-300', 'border-slate-400', 'border-slate-300/70', 'border-slate-200/70',
    'focus:ring-2', 'focus:ring-blue-500',
    'transition', 'transition-all', 'transition-opacity', 'transition-transform', 'transition-colors', 'duration-1000', 'duration-500', 'duration-300', 'duration-1000', 'delay-500', 'transform', 'hover:bg-blue-700', 'hover:bg-blue-500', 'hover:bg-blue-200', 'hover:bg-blue-200/70', 'hover:bg-black/50', 'hover:bg-green-200', 'hover:text-blue-600', 'hover:underline', 'hover:scale-105', 'active',
    // Display & Visibility
    'hidden', 'block', 'inline-block', 'inline-flex',
    // Miscellaneous utilities
    'uppercase', 'font-semibold', 'font-bold', 'font-header', 'font-script', 'font-arabic', 'font-medium', 'font-normal', 'tracking-widest', 'italic', 'break-words', 'whitespace-nowrap', 'whitespace-normal', 'line-clamp-2', 'text-center', 'text-left', 'text-right',
    // Dynamic utilities used in JS
    'is-visible', 'fade-in-up', 'glass-card', 'logo-reveal-animation', 'spinner', 'music-playing', 'drawer', 'drawer-backdrop', 'drawer-content', 'drawer-close', 'drawer-footer', 'bottom-nav-btn', 'active',
    // For drawers and nav
    'pb-[80px]', 'z-[100]', 'z-[99]', 'z-[60]', 'shadow-[0_-2px_10px_rgba(0,0,0,0.05)]', 'backdrop-blur-sm', 'backdrop-blur', 'sticky', 'bottom-0', 'top-4', 'right-4',
    // For timeline and gallery
    'timeline', 'timeline-item', 'timeline-dot', 'timeline-time', 'timeline-title', 'timeline-description', 'gallery-container', 'gallery-item', 'gallery-prev', 'gallery-next',
    // Toast & Marquee
    'toast', 'show', 'wishes-marquee', 'wishes-marquee-content', 'wish-item', 'wish-name',
    // Custom classes if any injected in HTML/JS
    'logo-reveal-animation', 'sr-only',
  ],
  plugins: [
  require('@tailwindcss/line-clamp'),
  ],
}
