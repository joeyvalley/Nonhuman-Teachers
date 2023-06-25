import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  '/oauth/token',
  createProxyMiddleware({
    target: 'https://www.eventbriteapi.com/v3/organizations/1433796023533/events/',
    changeOrigin: true,
  })
);

app.listen(4000, () => {
  console.log('Proxy server listening on port 4000');
});
