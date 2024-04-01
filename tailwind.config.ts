import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        headerOn: {
          from: { opacity: '1' },
          to: { transform: 'translateY(-100px)', opacity: '0' },
        },
        headerOff: {
          from: { opacity: '0' },
          to: { transform: 'translateY(0px)', opacity: '1' },
        },
        mainTwoDown: {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-200px)' }
        },
        mainTwoDown2: {
          from: { transform: 'translateY(-200px)' },
          to: { transform: 'translateY(-400px)' }
        },
        mainTwoDown3: {
          from: { transform: 'translateY(-400px)' },
          to: { transform: 'translateY(-600px)' }
        },
        mainTwoUp: {
          from: { transform: 'translateY(-200px)' },
          to: { transform: 'translateY(0px)' }
        },
        mainTwoUp2: {
          from: { transform: 'translateY(-400px)' },
          to: { transform: 'translateY(-200px)' }
        },
        mainTwoUp3: {
          from: { transform: 'translateY(-600px)' },
          to: { transform: 'translateY(-400px)' }
        }
      },
      animation: {
        'wiggle': 'wave 2s linear infinite',
        'headerOn': 'headerOn 2s',
        'headerOff': 'headerOff 2s',
        'mainTwoDown': 'mainTwoDown 1s',
        'mainTwoDown2': 'mainTwoDown2 1s',
        'mainTwoDown3': 'mainTwoDown3 1s',
        'mainTwoUp': 'mainTwoUp 1s',
        'mainTwoUp2': 'mainTwoUp2 1s',
        'mainTwoUp3': 'mainTwoUp3 1s',
      },
    },
  },
  plugins: [],
};
export default config;
