module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'alata': ['Alata', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'white-custom': "#ffffff",
        'black-custom': "#000000",
        'dark-gray':'#8c8c8c',
        'very-dark-gray':'#696969'
      },
      backgroundImage: theme =>({
        'hero-image':"url(/images/image-hero.jpg)",
        'interactive-image':"url(/images/image-interactive.jpg)",
        'curiosity':"url(/images/image-curiosity.jpg)",
        'deep-earth':"url(/images/image-deep-earth.jpg)",
        'fisheye':"url(/images/image-fisheye.jpg)",
        'from-above':"url(/images/image-from-above.jpg)",
        'grid':"url(/images/image-grid.jpg)",
        'night-arcade':"url(/images/image-night-arcade.jpg)",
        'pocket-borealis':"url(/images/image-pocket-borealis.jpg)",
        'soccer-team':"url(/images/image-soccer-team.jpg)",        
        'curiosity-small':"url(/images/mobile/image-curiosity.jpg)",
        'deep-earth-small':"url(/images/mobile/image-deep-earth.jpg)",
        'fisheye-small':"url(/images/mobile/image-fisheye.jpg)",
        'from-above-small':"url(/images/mobile/image-from-above.jpg)",
        'grid-small':"url(/images/mobile/image-grid.jpg)",
        'night-arcade-small':"url(/images/mobile/image-night-arcade.jpg)",
        'pocket-borealis-small':"url(/images/mobile/image-pocket-borealis.jpg)",
        'soccer-team-small':"url(/images/mobile/image-soccer-team.jpg)"
      }),
      borderWidth:{
        1: '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
