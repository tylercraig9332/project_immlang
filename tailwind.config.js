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
          primary: `#157dec`,
          "secondary": `#9ca3af`,
          "accent": `#8b5cf6`,
          "neutral": `#111827`,
          "base-100": `#2A303C`,
          "info": `#9333ea`,
          "success": `#4aa02c`,
          "warning": `#ff8040`,
          "error": `#c24641`
        }
      },
      `dark`
    ]
  }
}