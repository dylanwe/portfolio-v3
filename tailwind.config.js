import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export const content = ['./components/**/*.tsx', './pages/**/*.tsx']
export const theme = {
  extend: {
    colors: {
      primary: colors.cyan,
      neutral: colors.slate,
    },
    spacing: {
      28: '7rem',
    },
    letterSpacing: {
      tighter: '-.04em',
    },
    lineHeight: {
      tight: 1.2,
    },
    fontSize: {
      '5xl': '2.5rem',
      '6xl': '2.75rem',
      '7xl': '4.5rem',
      '8xl': '6.25rem',
    },
  },
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
      '50%': { transform: 'translateY(-10px) rotate(3deg)' },
    },
    wave: {
      '0%, 100%': { transform: 'translateY(0) rotate(0)' },
      '50%': { transform: 'translateY(-10px) rotate(3deg)' },
    }
  }
}
export const plugins = [
  require('@tailwindcss/typography'),
]
