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
        opacityOn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        opacityOff: {
          from: { },
          to: { opacity: '0' },
        },
        heightOn: {
          from: { height: '128px' },
          to: { height: '28px' },
          // options: { // 옵션 객체
          //   iterations: 'infinite', // 반복 횟수
          //   fillMode: 'forwards' // animation-fill-mode
          // }
        },
        heightMiddleOn: {
          from: { height: '28px' },
          to: { height: '0px' },
        },
        heightOff: {
          from: { height: '20px' },
          to: { height: '128px' },
        },
        heightMiddleOff: {
          from: { height: '0px' },
          to: { height: '28px' },
        },
      },
      animation: {
        'wiggle': 'wave 2s linear infinite',
        'headerOn': 'headerOn 2s',
        'headerOff': 'headerOff 2s',
        'opacityOn': 'opacityOn 2s',
        'opacityOff': 'opacityOff 2s',
        'heightOn': 'heightOn 0.5s',
        'heightMiddleOn': 'heightMiddleOn 1s',
        'heightOff': 'heightOff 1s',
        'heightMiddleOff': 'heightMiddleOff 1s',
      },
    },
  },
  plugins: [],
};
export default config;
