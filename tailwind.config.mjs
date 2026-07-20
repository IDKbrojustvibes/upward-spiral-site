/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1116',
        panel: '#161B22',
        line: '#2A313B',
        navy: '#1E4E79',
        signal: '#E8532F',
        bone: '#F4F3EF',
        muted: '#9AA1AB',
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
