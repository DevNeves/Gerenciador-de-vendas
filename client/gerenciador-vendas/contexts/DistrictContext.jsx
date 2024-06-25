import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const DistrictContext = createContext();

const url = 'http://localhost:3021';

export const DistrictContextProvider = ({ children }) => {
  const [districts, setDistricts] = useState([]);
  const [districtToEdit, setDistrictToEdit] = useState(null);

  const getDistricts = async () => {
    try {
      const response = await axios.get(`${url}/districts`);
      setDistricts(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const addDistrict = async (data) => {
    try {
      const response = await axios.post(`${url}/district`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const editDistrict = async (data) => {
    try {
      const response = await axios.put(`${url}/district/${districtToEdit.id}`, data);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const deleteDistrict = async (id) => {
    try {
      const response = await axios.delete(`${url}/district/${id}`);
      toast.success(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getDistricts();
  }, [setDistricts, districts]);

  return (
    <DistrictContext.Provider
      value={{
        districts,
        getDistricts,
        addDistrict,
        editDistrict,
        deleteDistrict,
        districtToEdit,
        setDistrictToEdit,
      }}
    >
      {children}
    </DistrictContext.Provider>
  );
};
