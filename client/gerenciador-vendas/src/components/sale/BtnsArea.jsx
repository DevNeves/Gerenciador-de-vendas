import { Button, TotalValue, Wrapper } from '../../styles/FormStyled';

import { useSale } from '../../../hooks/useSale';
import { useForm } from 'react-hook-form';

const BtnsArea = () => {
  const { setItensForSale, total, setTotal } = useSale();

  const { reset } = useForm();

  return (
    <Wrapper>
      <div>
        <Button form="form" color={'#0eb33f'}>
          CONFIRMAR
        </Button>
        <Button
          color={'#ed3434'}
          onClick={() => {
            reset();
            setItensForSale([]);
            setTotal(0);
          }}
        >
          CANCELAR
        </Button>
      </div>
      <TotalValue>{total <= 0 ? '0,00' : total.toFixed(2).replace('.', ',')}</TotalValue>
    </Wrapper>
  );
};

export default BtnsArea;
