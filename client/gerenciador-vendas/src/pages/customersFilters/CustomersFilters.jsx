import { Container, P, MakePDFButton } from '../../styles/FilterPageStyled';

import { useState } from 'react';

import HeaderWrapper from '../../components/HeaderWrapper';
import CustomersTable from '../../components/customerFilters/CustomersTable';
import CustomersFiltersForm from '../../components/customerFilters/CustomersFiltersForm';
import CustomersReport from '../../pdf/CustomersReport';

const CustomersFilters = () => {
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  return (
    <Container>
      <HeaderWrapper
        title={'Filtro de clientes'}
        route={'/record-customer'}
        btnMessage={'Cadastrar novo Cliente'}
      />
      <P>Filtrar por:</P>
      <CustomersFiltersForm setFilteredCustomers={setFilteredCustomers} />
      <CustomersTable filteredCustomers={filteredCustomers} />
      <MakePDFButton onClick={() => CustomersReport(filteredCustomers)}>Gerar PDF</MakePDFButton>
    </Container>
  );
};

export default CustomersFilters;
