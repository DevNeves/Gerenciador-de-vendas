import express from 'express';
import { getProducts, addProduct, editProduct, deleteProduct } from '../controllers/product.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/product', addProduct);
router.put('/product/:id', editProduct);
router.delete('/product/:id', deleteProduct);

export default router;
