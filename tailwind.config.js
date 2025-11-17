/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Couleurs de base
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Couleur primaire (cyan/teal pour cohérence avec le portfolio)
        primary: {
          DEFAULT: "#06b6d4", // cyan-500
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        
        // Couleur secondaire (teal)
        secondary: {
          DEFAULT: "#14b8a6", // teal-500
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        
        // Muted (utilisé pour les backgrounds subtils)
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        
        // Slate (pour les backgrounds sombres)
        slate: {
          DEFAULT: "#1e293b",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      
      // Animations personnalisées
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // Backdrop blur personnalisé
      backdropBlur: {
        xs: '2px',
      },
      
      // Box shadows personnalisées
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
      },
      
      // Border radius personnalisé
      borderRadius: {
        '4xl': '2rem',
      },
      
      // Spacing personnalisé
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
      },
      
      // Transitions personnalisées
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}