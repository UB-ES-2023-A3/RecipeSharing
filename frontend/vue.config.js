module.exports = {
    publicPath: 'http://localhost:8080',
    outputDir: '../static/dist',
    indexPath: '../../templates/_base_vue.html',

    configureWebpack: {
        devServer: {
            disableHostCheck: true,
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}