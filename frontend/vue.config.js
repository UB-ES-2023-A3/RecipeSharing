module.exports = {
    publicPath: 'http://localhost:8080',
    outputDir: '../static/dist',
    indexPath: '../../templates/_base_vue.html',

    configureWebpack: {
        devServer: {
            allowedHosts:[
                'frontend-wm7w.onrender.com',
                'frontend-rg5p.onrender.com'
            ],
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}