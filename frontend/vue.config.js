module.exports = {
    publicPath: '/',  // Debería ser '/' en la mayoría de los casos
    outputDir: 'static/dist',
    indexPath: 'frontend/public',

    configureWebpack: {
        devServer: {
            devMiddleware: {
                writeToDisk: true
            },
            proxy: {
                '^/api': {
                    target: 'http://localhost:8000',  // Apunta al backend FastAPI
                    ws: true,
                    changeOrigin: true,
                },
            },
        },
    }
};
