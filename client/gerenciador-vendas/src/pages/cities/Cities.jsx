import { Container } from '../../styles/ListPageStyled';

import CitiesTable from '../../components/cities/CitiesTable';
import HeaderWrapper from '../../components/HeaderWrapper';

const Cities = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Cidades Cadastradas'}
        route={'/record-city'}
        btnMessage={'Cadastrar cidade'}
      />
      <CitiesTable />
    </Container>
  );
};

export default Cities;
