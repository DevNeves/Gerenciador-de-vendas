import express from 'express';
import {
  getCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
} from '../controllers/customer.js';

const router = express.Router();

router.get('/customers', getCustomers);
router.post('/customer', addCustomer);
router.put('/customer/:id', editCustomer);
router.delete('/customer/:id', deleteCustomer);

export default router;
