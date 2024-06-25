import express from 'express';
import { getCities, addCity, editCity, deleteCity } from '../controllers/city.js';

const router = express.Router();

router.get('/cities', getCities);
router.post('/city', addCity);
router.put('/city/:id', editCity);
router.delete('/city/:id', deleteCity);

export default router;
