module.exports = {
  publicPath: '/',
  outputDir: '../frontend/static/dist',
  indexPath: '../frontend/static/dist/index.html',

  devServer: {
    allowedHosts: [
      'frontend-rg5p.onrender.com',
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8080,  // Asegúrate de que el puerto coincida con el puerto de tu servidor local
  },
};
