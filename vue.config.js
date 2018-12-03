const express = require('express')
const app = express()
app.use('/mock', express.static('./mock'))
app.listen(3000)

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    outputDir: 'dist',
    devServer: {
        port: 8080,
        host: 'localhost',
        https: false,
        open: false, //自动启动浏览器
        proxy: {
            '/mock': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }

    }
}