import { Container } from '../../styles/RecordPageStyled';

import SaleForm from '../../components/sale/SaleForm.jsx';
import HeaderWrapper from '../../components/HeaderWrapper.jsx';

const RecordSale = () => {
  return (
    <Container>
      <HeaderWrapper title={'Cadastrar venda'} route={'/sales'} btnMessage={'Vendas'} />
      <SaleForm />
    </Container>
  );
};

export default RecordSale;
