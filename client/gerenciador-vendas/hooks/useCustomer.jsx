import { useContext } from 'react';
import { CustomerContext } from '../contexts/CustomerContext';

export const useCustomer = () => {
  const context = useContext(CustomerContext);

  return context;
};
