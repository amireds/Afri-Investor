module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#151516',
        dark: '#1F1F1F',
        hero: '#F6FAFF',
        link: '#0066C9',
        border: '#EEEEEE',
        cta: '#FAFAFA',
        primary: '#258C60',
        font: '#0E0E0E',
        btnBorder: '#DCD9D9',
        light: '#999999',
        modalBg: 'rgba(0,0,0,0.6)',
      },
      fontFamily: {
        apercu: ['"Apercu"'],
        'apercu-pro': ['"Apercu Pro'],
        'apercu-mono': ['"Apercu Mono"'],
      },
      backgroundImage: {
        pop: 'url("~/assets/images/pop.svg")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
