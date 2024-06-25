import { Container } from '../../styles/RecordPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import CustomerForm from '../../components/customers/CustomerForm';

const RecordCustomer = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Registrar Cliente'}
        route={'/customers'}
        btnMessage={'Clientes cadastrados'}
      />
      <CustomerForm />
    </Container>
  );
};

export default RecordCustomer;
