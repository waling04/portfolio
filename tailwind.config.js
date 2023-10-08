/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
                fontFamily: {
                    fontOne: ["Bungee Shade"],
                    fontTwo: ["Averia Sans Libre"]
                },
                fontSize: {
                    xs: "0.75rem",
                    sm: "1.75rem",
                    md: "2rem",
                    lg: "2.25rem",
                    xl: "2.5rem",
                    "2xl": "2.75rem",
                }
            },
    plugins: [],
  }}
