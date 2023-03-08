const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'gray-950': '#09090A',
                'gray-900': '#121214',
                'gray-800': '#202024',
                'gray-700': '#29292E',
                'gray-600': '#323238',
                'gray-500': '#505059',
                'gray-200': '#C4C4CC',
                'gray-100': '#E1E1E6',

                'violet-900': '#633BBC',
                'violet-600': '#8257E5',
                'violet-500': '#996DFF',
              },
              gridTemplateColumns: {
                'cols-4': 'repeat(auto-fit, minmax(10rem, 1fr))',
                'cols-2': 'repeat(auto-fit, minmax(50rem, 1fr))',
              },
              screens: {
                'xs': '340px'
              }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
