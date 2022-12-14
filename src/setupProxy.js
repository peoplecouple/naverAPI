const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://openapi.naver.com',
      changeOrigin: true,
      ws:true,
      pathRewrite: {
        '^/api/': '/'
      }
    })
  )
}