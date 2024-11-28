/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            'surface-pro': '2736px', // Surface Pro 7
          'asus-fold': '1920px',   // Asus Zenbook Fold
          'nest-hub': '1280px',    // Nest Hub Max
        },
    },
    plugins: [],

};

   