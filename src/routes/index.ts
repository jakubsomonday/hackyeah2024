import express from 'express';
import path from 'path';
const router = express.Router();
import mondayRoutes from './monday';
import { getItems } from '../controllers/monday-controller';
import { createProxyMiddleware } from 'http-proxy-middleware';

function getHealth() {
  return {
    ok: true,
    message: 'Healthy'
  };
}

router.use(mondayRoutes);

router.get('/jakubso', getItems);

router.get('/health', function (req, res) {
  res.json(getHealth());
  res.end();
});

if (process.env.DEV === 'true') {
  console.log('Using proxy');
  router.use('/', createProxyMiddleware({
    target: 'http://localhost:8301', // Target server (your backend API)
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove /api from the forwarded request path
    },
  }));
} else {
  router.get('/view', function (req, res) {
    res.sendFile('index.html', { root: 'client/build/' });
  });
  router.use(express.static('client/build'));
  router.use('/static', express.static(path.join(__dirname, '..', 'client', 'public', 'static')));
  router.get('*', (req, res) => {
    res.sendFile('index.html', { root: 'client/build/' });
  });
}


export default router;
