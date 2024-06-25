import { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';

export const useCity = () => {
  const context = useContext(CityContext);

  return context;
};
