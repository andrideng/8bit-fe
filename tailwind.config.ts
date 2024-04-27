import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        orchidSky: {
          DEFAULT: 'var(--orchid-sky)',
        },
        coralSunset: {
          DEFAULT: 'var(--coral-sunset)',
        },
        lavenderDreams: {
          DEFAULT: 'var(--lavender-dreams)',
        },
        royalBlue: {
          DEFAULT: 'var(--royal-blue)',
        },
        stoneGray: {
          DEFAULT: 'var(--stone-gray)',
        },
        fuchsiaBliss: {
          DEFAULT: 'var(--fuchsia-bliss)',
        },
        magentaRose: {
          DEFAULT: 'var(--magenta-rose)',
        },
        midnightViolet: {
          DEFAULT: 'var(--midnight-violet)',
        },
        indigoBlue: {
          DEFAULT: 'var(--indigo-blue)',
        },
        sapphireOcean: {
          DEFAULT: 'var(--sapphire-ocean)',
        },
        silverLilac: {
          DEFAULT: 'var(--silver-lilac)',
        },
        plumPassion: {
          DEFAULT: 'var(--plum-passion)',
        },
        orchidDreams: {
          DEFAULT: 'var(--orchid-dreams)',
        },
        aquamarineOcean: {
          DEFAULT: 'var(--aquamarine-ocean)',
        },
        limeZest: {
          DEFAULT: 'var(--lime-zest)',
        },
        raspberrySorbet: {
          DEFAULT: 'var(--raspberry-sorbet)',
        },
        aquaMarine: {
          DEFAULT: 'var(--aqua-marine)',
        },
        skyBlue: {
          DEFAULT: 'var(--sky-blue)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
