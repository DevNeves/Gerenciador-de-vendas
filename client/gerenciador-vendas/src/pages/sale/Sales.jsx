import { Container } from '../../styles/ListPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import SalesTable from '../../components/sale/SalesTable';

const Sales = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Vendas cadastradas'}
        route={'/record-sale'}
        btnMessage={'Cadastrar Venda'}
      />
      <SalesTable />
    </Container>
  );
};

export default Sales;
