import type { Config } from "tailwindcss"
import typography from '@tailwindcss/typography';


const config: Config = {
  content: [
    "components/**",
    "layouts/**",
    "pages/**",
    "public/**",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.8125rem',
        s: ".875rem",
        p: "1rem",
        h6: "1.25rem",
        h5: "1.625rem",
        h4: "2.125rem",
        h3: "2.75rem",
        h2: "3.5rem",
        h1: "4.375rem",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        frame: "hsl(var(--frame) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",

        border: "hsl(var(--border) / <alpha-value>)",

        input: "hsl(var(--input))",

        ring: "hsl(var(--ring))",

        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },

        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },

        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        accent: {
          background: "hsl(var(--accent-background) / <alpha-value>)",
          color: "hsl(var(--accent-color) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },

        informative: {
          background: "hsl(var(--informative-background) / <alpha-value>)",
          color: "hsl(var(--informative-color) / <alpha-value>)",
          foreground: "hsl(var(--informative-foreground) / <alpha-value>)",
        },

        successful: {
          background: "hsl(var(--successful-background) / <alpha-value>)",
          color: "hsl(var(--successful-color) / <alpha-value>)",
          foreground: "hsl(var(--successful-foreground) / <alpha-value>)",
        },

        cautionary: {
          background: "hsl(var(--cautionary-background) / <alpha-value>)",
          color: "hsl(var(--cautionary-color) / <alpha-value>)",
          foreground: "hsl(var(--cautionary-foreground) / <alpha-value>)",
        },

        destructive: {
          background: "hsl(var(--destructive-background) / <alpha-value>)",
          color: "hsl(var(--destructive-color) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
      },
      spacing: {
        18: '4.5rem'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      lineHeight: {
        12: '3rem'
      },
      typography: () => ({
        accent: {
          css: {
            "--tw-prose-body": "hsl(var(--muted-foreground))",
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-lead": "hsl(var(--muted-foreground))",
            "--tw-prose-links": "hsl(var(--accent))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-counters": "hsl(var(--accent))",
            "--tw-prose-bullets": "hsl(var(--accent))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--accent))",
            "--tw-prose-captions": "hsl(var(--muted-foreground))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-pre-code": "hsl(var(--foreground))",
            "--tw-prose-pre-bg": "hsl(var(--muted))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config