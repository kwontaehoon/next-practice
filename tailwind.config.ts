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
        opacityOn: {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-100px)', opacity: '0' },
        },
        opacityOff: {
          from: { transform: 'translateY(-100px)', opacity: '1' },
          to: { transform: 'translateY(0px)' },
        }
      },
      animation: {
        'aa': 'wiggle 3s linear infinite',
        'wiggle': 'wave 2s linear infinite',
        'opacityOn': 'opacityOn 2s',
        'opacityOff': 'opacityOff 2s',
      },
    },
  },
  plugins: [],
};
export default config;
