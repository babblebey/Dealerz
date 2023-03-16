/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dorange : {
                    'light' : '#F86338',
                    'dark': '#7A6005'
                },
                dblue: {
                    'light': '#36B2F8',
                    'dark': '#11142D'
                },
                dgrey: {
                    'light': '#F4F7F8',
                    'medium': '#E2E2EA',
                    'dark': '#9A9AB0'
                },
                ddark: {
                    'light': '#666666',
                    'medium': '#515151',
                    'dark': '#333333'
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
