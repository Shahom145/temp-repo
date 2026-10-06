/** @type {import('tailwindcss').Config} */
// Creates oklch() color with Tailwind opacity support
const c = (v) => `oklch(var(--${v}) / <alpha-value>)`;
// References a full semantic CSS variable
const s = (v) => `var(--${v})`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Raw palette (used with oklch() in JSX inline styles)
        ivory:   c('ivory'),
        gold:    { DEFAULT: c('gold'), soft: c('gold-soft') },
        emerald: { deep: c('emerald-deep'), ink: c('emerald-ink') },
        // Semantic aliases (exact reference token names)
        background:  s('background'),
        foreground:  s('foreground'),
        card:        { DEFAULT: s('card'), foreground: s('card-foreground') },
        primary:     { DEFAULT: s('primary'), foreground: s('primary-foreground') },
        secondary:   { DEFAULT: s('secondary'), foreground: s('secondary-foreground') },
        muted:       { DEFAULT: s('muted'), foreground: s('muted-foreground') },
        accent:      { DEFAULT: s('accent'), foreground: s('accent-foreground') },
        border:      s('border'),
        input:       s('input'),
        ring:        s('ring'),
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        script:  ['"Great Vibes"', 'cursive'],
        sans:    ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:    'calc(var(--radius) - 4px)',
        md:    'calc(var(--radius) - 2px)',
        lg:    'var(--radius)',
        xl:    'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      // Animations matching the reference
      animation: {
        'float-soft': 'float-soft 6s ease-in-out infinite',
        'pulse':      'pulse 2s cubic-bezier(.4, 0, .6, 1) infinite',
      },
      keyframes: {
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      maxWidth: { frame: '520px' },
      boxShadow: {
        luxe: 'var(--shadow-luxe)',
        gold: 'var(--shadow-gold)',
      },
      screens: {
        xs:    '360px',
        frame: '560px',
      },
    },
  },
  plugins: [],
};
