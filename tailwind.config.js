/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./pages/**/*.{js,ts,jsx,tsx}`,
    `./src/**/*.{js,ts,jsx,tsx}` ],
  plugins: [ require( `daisyui` ) ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        immlangTheme: {
          "primary": `#157dec`,
          "primary-content": `#FFFFFF`,
          "secondary": `#F9F9F9`, // `#BDA0BC`, // `#C08497`, // `#EFF1F3`, // - nice white
          "accent": `#D4B483`,
          "neutral": `#c084fc`,
          "neutral-content": `#FFFFFF`,
          "base-100": `#2A303C`,
          "base-content": `#FFFFFF`,
          "info": `#BDA0BC`, // `#F9F9F9`, // `#9333ea`,
          "success": `#00CC99`,
          "warning": `#ff8040`,
          "error": `#c24641`,
          "error-content": `#FFFFFF`
        },
        immlangThemeLight: {
          "primary": `#157dec`,
          "primary-content": `#FFFFFF`,
          "secondary": `#D4B483`, // `#454545`, // #9ca3af`,
          "accent": `#D8DDEF`,
          "neutral": `#c084fc`,
          "neutral-content": `#FFFFFF`,
          "base-100": `#EFF1F3`,
          "info": `#BDA0BC`, // `#9333ea`,
          "success": `#00CC99`,
          "success-content": `#FFFFFF`,
          "warning": `#ff8040`,
          "warning-content": `#FFFFFF`,
          "error": `#c24641`,
          "error-content": `#FFFFFF`
        }
      },
      `dark`
    ]
  }
}