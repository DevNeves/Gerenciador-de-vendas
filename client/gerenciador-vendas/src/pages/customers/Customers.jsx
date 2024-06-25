import { Container } from '../../styles/ListPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import CustomersTable from '../../components/customers/CustomersTable';

const Customers = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Clientes cadastrados'}
        route={'/record-customer'}
        btnMessage={'Cadastrar Cliente'}
      />
      <CustomersTable />
    </Container>
  );
};

export default Customers;
