const colors = require("tailwindcss/colors");

/**
 * See full Tailwind color palette options here
 * https://tailwindcss.com/docs/customizing-colors#default-color-palette
 */

// Choose a primary color from Tailwind's set of colors,
// or define your own

// const primary = colors.rose
// const primary = colors.emerald
// const primary = colors.teal;
// const primary = colors.cyan
// const primary = colors.sky
const primary = colors.blue
// const primary = colors.violet
// const primary = colors.purple
// const primary = colors.pink
// const primary = colors.rose
// const primary = {
//   ...colors.pink,
//   500: "#FF1B75",
// };

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...primary,
          DEFAULT: primary["500"],
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.primary[500]'),
            '--tw-prose-body': theme('colors.gray[800]'),
            maxWidth: null,
            a: {
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'none',
              }
            }
          }
        }
      }),
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          "@screen md": {
            maxWidth: "896px",
          },
        },
      });
    },
  ],
};
