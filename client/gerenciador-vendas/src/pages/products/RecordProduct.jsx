import { Container } from '../../styles/RecordPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import ProductForm from '../../components/products/ProductForm';

const RecordProduct = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Cadastrar Produto'}
        route={'/products'}
        btnMessage={'Produtos cadastrados'}
      />
      <ProductForm />
    </Container>
  );
};

export default RecordProduct;
