module.exports = {
    publicPath: 'https://frontendrecipesharing.onrender.com/',
    outputDir: '../frontend/static/dist',
    indexPath: '../frontend/static/dist/index.html',

    configureWebpack: {
        devServer: {
            allowedHosts:[
                'https://frontendrecipesharing.onrender.com/'
            ],
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}
