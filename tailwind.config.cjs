function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
      lg: "900px",
    },

    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text"),
          title: withOpacity("--color-primary"),
          heading: withOpacity("--color-dark"),
        },
      },
      backgroundColor: {
        skin: {
          light: withOpacity("--color-light"),
          fill: withOpacity("--color-bg"),
          card: withOpacity("--color-card"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-light"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-primary"),
        },
        transparent: "transparent",
      },
      stroke: {
        skin: {
          accent: withOpacity("--color-light")
        }
      },
      fontFamily: {
        sans: ["Lato"],
        liu: ["Liu"],
        playfair: ["Playfair"],
        aboreto: ["Aboreto"]
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
