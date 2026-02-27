import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Poruta Brand Greens
        poruta: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#008000",
          800: "#006400",
        },
        // Bespoke Tinted Neutrals
        surface: {
          50: "#fbfcfb",
          100: "#f2f5f3",
          200: "#e1e7e3",
          300: "#c5d0cb",
          400: "#a3b3ac",
          500: "#83958d",
          600: "#677871",
          700: "#54625d",
          800: "#45504c",
          900: "#1b231f",
          950: "#0d1310",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-accent": "var(--gradient-accent)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      transitionProperty: {
        smooth: "var(--transition-smooth)",
        fast: "var(--transition-fast)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        handshakeFlow: {
          "0%": { transform: "translateY(0)", backgroundColor: "#677871", opacity: "0" },
          "10%": { opacity: "1" },
          "40%": { transform: "translateY(116px)", backgroundColor: "#677871" },
          "45%": { transform: "translateY(116px)", backgroundColor: "#008000" },
          "50%": { transform: "translateY(116px)", backgroundColor: "#008000" },
          "90%": { transform: "translateY(232px)", backgroundColor: "#008000", opacity: "1" },
          "100%": { transform: "translateY(232px)", opacity: "0" },
        },
        coreFlash: {
          "0%, 40%": { borderColor: "#45504c", color: "#677871", backgroundColor: "#0d1310" },
          "45%, 55%": { borderColor: "#008000", color: "#ffffff", backgroundColor: "rgba(0, 128, 0, 0.15)" },
          "60%, 100%": { borderColor: "#45504c", color: "#677871", backgroundColor: "#0d1310" },
        },
        bbProgress: {
          "0%, 20%": { width: "0%" },
          "44%, 100%": { width: "100%" },
        },
        bbPhase1: {
          "0%, 44%": { opacity: "1" },
          "45%, 100%": { opacity: "0" },
        },
        bbPhase2: {
          "0%, 44%": { opacity: "0", transform: "translateY(5px)" },
          "45%, 90%": { opacity: "1", transform: "translateY(0)" },
          "95%, 100%": { opacity: "0", transform: "translateY(5px)" },
        },
        bbStatus1: {
          "0%, 20%": { opacity: "1" },
          "21%, 100%": { opacity: "0" },
        },
        bbStatus2: {
          "0%, 20%": { opacity: "0" },
          "21%, 44%": { opacity: "1" },
          "45%, 100%": { opacity: "0" },
        },
        heroPhase1: {
          "0%, 25%": { opacity: "1" },
          "26%, 100%": { opacity: "0" },
        },
        heroPhase2: {
          "0%, 25%": { opacity: "0" },
          "26%, 37%": { opacity: "1" },
          "38%, 100%": { opacity: "0" },
        },
        heroPhase3: {
          "0%, 37%": { opacity: "0" },
          "38%, 90%": { opacity: "1" },
          "95%, 100%": { opacity: "0" },
        },
        heroProgress: {
          "0%, 26%": { width: "0%" },
          "38%, 100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "blink 1s step-end infinite",
        "handshake-flow": "handshakeFlow 4s infinite",
        "core-flash": "coreFlash 4s infinite",
        "bb-progress": "bbProgress 5s infinite",
        "bb-phase-1": "bbPhase1 5s infinite",
        "bb-phase-2": "bbPhase2 5s infinite",
        "bb-status-1": "bbStatus1 5s infinite",
        "bb-status-2": "bbStatus2 5s infinite",
        "hero-phase-1": "heroPhase1 10s infinite",
        "hero-phase-2": "heroPhase2 10s infinite",
        "hero-phase-3": "heroPhase3 10s infinite",
        "hero-progress": "heroProgress 10s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
