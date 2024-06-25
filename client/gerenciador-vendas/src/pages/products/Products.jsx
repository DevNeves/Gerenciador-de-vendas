import { Container } from '../../styles/ListPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import ProductsTable from '../../components/products/ProductsTable';

const Products = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Produtos cadastrados'}
        route={'/record-product'}
        btnMessage={'Cadastrar Produto'}
      />
      <ProductsTable />
    </Container>
  );
};

export default Products;
