import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'midnight-indigo': '#2E3A8C',
      'forest-green': '#3B755F',
      'shadow-slate': '#212121',
      beige: '#F2EBDB',
      silver: '#B0B0B0',
      ripple: '#AFC6BD',
    },
  },
  plugins: [],
};
export default config;
