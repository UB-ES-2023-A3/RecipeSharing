module.exports = {
  publicPath: '/',
  outputDir: '../frontend/static/dist',
  indexPath: '../frontend/static/dist/index.html',

  devServer: {
    public: 'https://frontend-rg5p.onrender.com/',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
