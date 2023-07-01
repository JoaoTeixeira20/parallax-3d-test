import type { Config } from 'tailwindcss';

export const colors = {
  neonTheme: {
    text: 'rgb(35, 35, 35)',
    background: 'rgb(70,70,70)',
    foreground: 'rgb(104,104,104)',
    backgroundRadial: '#FFFFFF',
    outlineInitial: 'rgb(165 243 252)',
    outlineFinal: 'rgb(22 78 99)',
    cubeColor: 'rgb(212,212,212)'
  },
  swissTheme: {
    text: 'rgb(104,104,104)',
    background: 'rgb(70,70,70)',
    foreground: 'rgb(35, 35, 35)',
    backgroundRadial: '#FFFFFF',
    outlineInitial: 'rgb(165 243 252)',
    outlineFinal: 'rgb(22 78 99)',
    cubeColor: 'rgb(212,212,212)'
  },
};

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config;
