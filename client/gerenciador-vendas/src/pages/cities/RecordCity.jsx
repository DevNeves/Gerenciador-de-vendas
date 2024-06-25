import { Container } from '../../styles/RecordPageStyled';

import HeaderWrapper from '../../components/HeaderWrapper.jsx';
import CityForm from '../../components/cities/CityForm.jsx';

const RecordCity = () => {
  return (
    <Container>
      <HeaderWrapper
        title={'Registrar Cidade'}
        route={'/cities'}
        btnMessage={'Cidades cadastradas'}
      />
      <CityForm />
    </Container>
  );
};

export default RecordCity;
