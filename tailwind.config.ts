// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: "class",
//     content: [
//       "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
  

const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-work-sans)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  });
  
