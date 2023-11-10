module.exports = {
    publicPath: 'https://frontend-rg5p.onrender.com/',
    outputDir: '../frontend/static/dist',
    indexPath: '../frontend/static/dist/index.html',

    configureWebpack: {
        devServer: {
            allowedHosts:[
                'frontend-wm7w.onrender.com',
                'frontend-rg5p.onrender.com',
                'backend-7stm.onrender.com',
            ],
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}
