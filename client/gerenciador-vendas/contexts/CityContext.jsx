import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CityContext = createContext();

const url = 'http://localhost:3021';

export const CityContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [cityToEdit, setCityToEdit] = useState(null);

  const getCities = async () => {
    try {
      const response = await axios.get(`${url}/cities`);
      setCities(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const addCity = async (data) => {
    try {
      const response = await axios.post(`${url}/city`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const editCity = async (data) => {
    try {
      const response = await axios.put(`${url}/city/${cityToEdit.id}`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const deleteCity = async (id) => {
    try {
      const response = await axios.delete(`${url}/city/${id}`);
      toast.success(response.data);
    } catch (error) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getCities();
  }, [setCities, cities]);

  return (
    <CityContext.Provider
      value={{
        cities,
        getCities,
        addCity,
        editCity,
        deleteCity,
        cityToEdit,
        setCityToEdit,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
