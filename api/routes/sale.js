import express from 'express';
import {
  getSales,
  getSaledItens,
  getSaledItensForFilter,
  addSale,
  editSale,
  deleteSaledItem,
  deleteSale,
} from '../controllers/sale.js';

const router = express.Router();

router.get('/sales', getSales);
router.get('/saled-itens/:id', getSaledItens);
router.get('/saled-itens', getSaledItensForFilter);
router.post('/sale', addSale);
router.put('/sale/:id', editSale);
router.delete('/saled-item/:id', deleteSaledItem);
router.delete('/sale/:id', deleteSale);

export default router;
