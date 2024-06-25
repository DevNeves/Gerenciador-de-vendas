import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const url = 'http://localhost:3021';

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const register = async (inputs) => {
    await axios.post(`${url}/register`, inputs);
  };

  const login = async (inputs) => {
    const res = await axios.post(`${url}/login`, inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post(`${url}/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ register, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
