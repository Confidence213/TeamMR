const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      // target: "https://api.teammanipalracing.in",
      changeOrigin: true,
      headers: {
        "Connection": "keep-alive"
      },
    })
  );
};