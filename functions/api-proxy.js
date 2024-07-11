import { createProxyMiddleware } from 'http-proxy-middleware';

export function handler(event, context, callback) {
  console.log('Received event:', event); // 요청에 대한 로그 추가

  const proxy = createProxyMiddleware({
    target: 'http://full-stack-restapi-mysql-env.eba-thy63jtv.ap-northeast-2.elasticbeanstalk.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // remove /api prefix when forwarding to the target
    },
    onProxyReq: (proxyReq, req, res) => {
      // Add custom header to request
      proxyReq.setHeader('x-added', 'foobar');
      // Or log the request
      console.log('Proxy request:', proxyReq);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log('Proxy response:', proxyRes.statusCode); // 응답에 대한 로그 추가
    },
  });

  return proxy(event, context, callback);
}
