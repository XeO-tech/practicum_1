module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{hbs,html,js}'],
  theme: {
    fontFamily: {
      monospace: ['IBM Plex Mono', 'Courier New', 'monospace'],
    },
    color: `#ffffff`,
    extend: {
      colors: {
        dark0: '#1C1C28',
        dark1: '#28293D',
        dark2: '#32334D',
        purple2: '#AC5DD9',
        green0: '#05A660',
        green1: '#06C270',
        green2: '#39D98A',
        green3: '#57EBA1',
        teal1: '#00CFDE',
        red0: '#E53535',
      },
      zIndex: {
        '-1': '-1',
      },
      transformOrigin: {
        0: '0%',
      },
    },
  },
  plugins: [],
};
