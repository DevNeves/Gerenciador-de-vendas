import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CustomerContext = createContext();

const url = 'http://localhost:3021';

export const CustomerContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const getCustomers = async () => {
    try {
      const response = await axios.get(`${url}/customers`);
      setCustomers(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const addCustomer = async (data) => {
    try {
      const response = await axios.post(`${url}/customer`, data);
      toast.success(response.data);

      return response.data;
    } catch (err) {
      if (err.response.status === 409) {
        toast.error(err.response.data);
      } else {
        toast.error(err.response.data);
      }
    }
  };

  const editCustomer = async (data) => {
    try {
      const response = await axios.put(`${url}/customer/${customerToEdit.customer_id}`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      const response = await axios.delete(`${url}/customer/${id}`);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getCustomers();
  }, [setCustomers, customers]);

  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        addCustomer,
        editCustomer,
        deleteCustomer,
        customerToEdit,
        setCustomerToEdit,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
