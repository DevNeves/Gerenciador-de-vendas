import { Button } from '../styles/FormStyled';

const BtnsArea = ({ reset }) => {
  return (
    <>
      <Button form="form" color={'#0eb33f'}>
        CONFIRMAR
      </Button>
      <Button color={'#ed3434'} onClick={() => reset()}>
        CANCELAR
      </Button>
    </>
  );
};

export default BtnsArea;
