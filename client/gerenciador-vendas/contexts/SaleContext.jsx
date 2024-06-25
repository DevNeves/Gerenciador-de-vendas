import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const SaleContext = createContext();

const url = 'http://localhost:3021';

export const SaleContextProvider = ({ children }) => {
  const [itensForSale, setItensForSale] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [id, setId] = useState(1);

  const [sales, setSales] = useState([]);
  const [saleToEdit, setSaleToEdit] = useState(null);
  const [saledItens, setSaledItens] = useState([]);

  const getSales = async () => {
    try {
      const response = await axios.get(`${url}/sales`);
      setSales(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const getSaledItens = async (id) => {
    try {
      const response = await axios.get(`${url}/saled-itens/${id}`);
      return response.data;
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const getSaledItensForFilter = async () => {
    try {
      const response = await axios.get(`${url}/saled-itens`);
      setSaledItens(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const addSale = async (data) => {
    try {
      const response = await axios.post(`${url}/sale`, { ...data, itensForSale });
      setTotal(0);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const editSale = async (data) => {
    try {
      const response = await axios.put(`${url}/sale/${saleToEdit.id}`, { ...data, itensForSale });
      setTotal(0);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const deleteSaledItem = async (id) => {
    try {
      await axios.delete(`${url}/saled-item/${id}`);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const deleteSale = async (id) => {
    try {
      const response = await axios.delete(`${url}/sale/${id}`);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getSales();
  }, [setSales, sales]);

  useEffect(() => {
    getSaledItensForFilter();
  }, [setSaledItens]);

  return (
    <SaleContext.Provider
      value={{
        setSales,
        sales,
        getSaledItens,
        itensForSale,
        setItensForSale,
        total,
        setTotal,
        itemToEdit,
        setItemToEdit,
        addSale,
        saleToEdit,
        setSaleToEdit,
        id,
        setId,
        deleteSaledItem,
        editSale,
        deleteSale,
        saledItens,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};
