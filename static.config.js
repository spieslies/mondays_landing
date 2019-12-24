export default {
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-styled-components'),
    [
      require.resolve('react-static-plugin-favicons'),
      { inputFile: path.resolve(__dirname, 'sati_green.png') },
    ],
  ],
}
