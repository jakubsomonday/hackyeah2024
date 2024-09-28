import express from 'express';
import path from 'path';
const router = express.Router();
import mondayRoutes from './monday';
import { getItems } from '../controllers/monday-controller';


router.use(mondayRoutes);

router.use('/static', express.static(path.join(__dirname, '..', 'client', 'public', 'static')));

router.get('/jakubso', getItems);

router.get('/health', function(req, res) {
  res.json(getHealth());
  res.end();
});

router.get('/view', function(req, res) {
    res.sendFile('index.html', { root: 'client/build/' });
});

function getHealth() {
  return {
    ok: true,
    message: 'Healthy'
  };
}

router.use(express.static('client/build'));

router.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'client/build/' });
});

export default router;
