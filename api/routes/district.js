import express from 'express';
import {
  getDistricts,
  addDistrict,
  editDistrict,
  deleteDistrict,
} from '../controllers/district.js';

const router = express.Router();

router.get('/districts', getDistricts);
router.post('/district', addDistrict);
router.put('/district/:id', editDistrict);
router.delete('/district/:id', deleteDistrict);

export default router;
