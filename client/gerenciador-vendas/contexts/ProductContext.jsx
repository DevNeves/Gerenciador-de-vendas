import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

const url = 'http://localhost:3021';

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${url}/products`);
      setProducts(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const addProduct = async (data) => {
    try {
      const response = await axios.post(`${url}/product`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const editProduct = async (data) => {
    try {
      const response = await axios.put(`${url}/product/${productToEdit.id}`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${url}/product/${id}`);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        addProduct,
        editProduct,
        deleteProduct,
        productToEdit,
        setProductToEdit,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
