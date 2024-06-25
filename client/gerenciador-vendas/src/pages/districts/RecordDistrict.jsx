import { Container } from '../../styles/RecordPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper';
import DistrictForm from '../../components/districts/DistrictForm';

const RecordDistrict = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Registrar Bairro'}
        route={'/districts'}
        btnMessage={'Bairros cadastrados'}
      />
      <DistrictForm />
    </Container>
  );
};

export default RecordDistrict;
