import { useContext } from 'react';
import { DistrictContext } from '../contexts/DistrictContext';

export const useDistrict = () => {
  const context = useContext(DistrictContext);

  return context;
};
