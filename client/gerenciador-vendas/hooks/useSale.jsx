import { useContext } from 'react';
import { SaleContext } from '../contexts/SaleContext';

export const useSale = () => {
  const context = useContext(SaleContext);

  return context;
};
