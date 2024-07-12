import { createProxyMiddleware } from 'http-proxy-middleware';

export function handler(event, context, callback) {
  const proxy = createProxyMiddleware({
    target: 'http://full-stack-restapi-mysql-env.eba-thy63jtv.ap-northeast-2.elasticbeanstalk.com',
    changeOrigin: true,
    pathRewrite: { '^/api/': '/' },
    secure: false, // HTTPS 요청을 HTTP 서버로 전달하기 위해
    logLevel: 'debug'
  });

  proxy(event, context, callback);
}
