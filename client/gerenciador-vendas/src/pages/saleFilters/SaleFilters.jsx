import { Container, P, MakePDFButton } from '../../styles/FilterPageStyled';
import { useState } from 'react';

import HeaderWrapper from '../../components/HeaderWrapper';
import SalesFiltersForm from '../../components/saleFilters/SalesFiltersForm';
import SalesTable from '../../components/saleFilters/SalesTable';
import SaleReport from '../../pdf/SaleReport';

const SaleFilters = () => {
  const [filteredSales, setFilteredSales] = useState([]);

  return (
    <Container>
      <HeaderWrapper
        title={'Filtro de vendas'}
        route={'/record-sale'}
        btnMessage={'Cadastrar nova venda'}
      />
      <P>Filtrar por:</P>
      <SalesFiltersForm setFilteredSales={setFilteredSales} />
      <SalesTable filteredSales={filteredSales} />
      <MakePDFButton onClick={() => SaleReport(filteredSales)}>Gerar PDF</MakePDFButton>
    </Container>
  );
};

export default SaleFilters;
