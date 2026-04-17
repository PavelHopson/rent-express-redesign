/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        surface: '#121214',
        card: '#18181B',
        elevated: '#1F1F23',
        border: '#27272A',
        'border-bright': '#3F3F46',
        text: '#FAFAFA',
        'text-muted': '#A1A1AA',
        'text-dim': '#52525B',
        accent: '#FF4D00',
        'accent-dim': '#CC3D00',
        'accent-glow': '#FF7A33',
        secondary: '#FFE600',
        success: '#00E676',
        danger: '#FF1744',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'mega': 'clamp(3rem, 11vw, 9rem)',
        'hero': 'clamp(2.5rem, 7vw, 6rem)',
        'huge': 'clamp(2rem, 5vw, 4.5rem)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'rotate-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
