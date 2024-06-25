import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { CustomerContextProvider } from '../../contexts/CustomerContext';
import { DistrictContextProvider } from '../../contexts/DistrictContext';
import { CityContextProvider } from '../../contexts/CityContext';
import { ProductContextProvider } from '../../contexts/ProductContext';
import { SaleContextProvider } from '../../contexts/SaleContext';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Customers from '../pages/customers/Customers';
import RecordCustomer from '../pages/customers/RecordCustomer';
import Districts from '../pages/districts/Districts';
import RecordDistrict from '../pages/districts/RecordDistrict';
import Cities from '../pages/cities/Cities';
import RecordCity from '../pages/cities/RecordCity';
import Products from '../pages/products/Products';
import RecordProduct from '../pages/products/RecordProduct';
import RecordSale from '../pages/sale/RecordSale';
import Sales from '../pages/sale/Sales';
import SaleFilters from '../pages/saleFilters/SaleFilters';
import CustomersFilters from '../pages/customersFilters/CustomersFilters';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const AppProviders = ({ children }) => (
  <ProtectedRoute>
    <CustomerContextProvider>
      <DistrictContextProvider>
        <CityContextProvider>
          <ProductContextProvider>
            <SaleContextProvider>{children}</SaleContextProvider>
          </ProductContextProvider>
        </CityContextProvider>
      </DistrictContextProvider>
    </CustomerContextProvider>
  </ProtectedRoute>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProviders>
        <Layout />
      </AppProviders>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/record-customer',
        element: <RecordCustomer />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/districts',
        element: <Districts />,
      },
      {
        path: '/record-district',
        element: <RecordDistrict />,
      },
      {
        path: '/cities',
        element: <Cities />,
      },
      {
        path: '/record-city',
        element: <RecordCity />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/record-product',
        element: <RecordProduct />,
      },
      {
        path: '/record-sale',
        element: <RecordSale />,
      },
      {
        path: '/sales',
        element: <Sales />,
      },
      {
        path: '/sales-filters',
        element: <SaleFilters />,
      },
      {
        path: '/customers-filters',
        element: <CustomersFilters />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
