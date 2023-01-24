/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
 

    theme: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      
   

      
        screens: {
          sm: '500px',
          // => @media (min-width: 576px) { ... }
    
          sm2: '100px',
          // => @media (min-width: 576px) { ... }



          md: '768px',
          // => @media (min-width: 576px) { ... }

          md2: '800px',
          // => @media (min-width: 576px) { ... }    
          lg: '1024px',
          // => @media (min-width: 960px) { ... }
           xl: '1280px',
          // => @media (min-width: 960px) { ... }
          xl2: '1536px',
          // => @media (min-width: 1440px) { ... }
    
    
        },
    
   

    extend: {

      width: {
        '1/10': 'calc(100% / 3)',
      },
      container: {
        margin: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    }
    
  },

  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  
  plugins: [require("daisyui")],
  
};
