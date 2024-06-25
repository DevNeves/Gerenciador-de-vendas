import { Container } from '../../styles/ListPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import DistrictsTable from '../../components/districts/DistrictsTable';

const Districts = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Bairros cadastrados'}
        route={'/record-district'}
        btnMessage={'Cadastrar Bairro'}
      />
      <DistrictsTable />
    </Container>
  );
};

export default Districts;
