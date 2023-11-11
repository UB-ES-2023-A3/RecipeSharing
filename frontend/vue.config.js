module.exports = {
  publicPath: '/',
  outputDir: '../frontend/static/dist',
  indexPath: '../frontend/static/dist/index.html',

  devServer: {
    public: 'https://frontend-rg5p.onrender.com/',
    writeToDisk: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
