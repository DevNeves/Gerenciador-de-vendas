import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

import authRouter from './routes/auth.js';
import districtRouter from './routes/district.js';
import cityRouter from './routes/city.js';
import productRouter from './routes/product.js';
import customerRouter from './routes/customer.js';
import saleRouter from './routes/sale.js';

app.use('/', authRouter);
app.use('/', customerRouter);
app.use('/', districtRouter);
app.use('/', cityRouter);
app.use('/', productRouter);
app.use('/', saleRouter);

app.listen(PORT, () => {
  console.log('Server running at port ' + PORT);
});
