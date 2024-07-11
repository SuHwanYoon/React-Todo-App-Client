import { createProxyMiddleware } from 'http-proxy-middleware';

export function handler(event, context, callback) {
  const proxy = createProxyMiddleware({
    target: 'http://full-stack-restapi-mysql-env.eba-thy63jtv.ap-northeast-2.elasticbeanstalk.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/',
    },
    logLevel: 'debug',  // 로깅 레벨을 디버그로 설정하여 더 많은 정보를 로그에서 확인
  });

  return proxy(event, context, callback);
}
