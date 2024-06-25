import { Input, Wrapper, Button } from '../../styles/FormStyled';

import { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { useProduct } from '../../../hooks/useProduct';
import { useSale } from '../../../hooks/useSale';

import FormField from '../FormField';
import RenderOptions from '../RenderOptions';

const AddItemToSell = ({ register, fields, setValue, errors }) => {
  const { products } = useProduct();
  const { itemToEdit } = useSale();
  const { product, qty, price, total } = fields;

  useEffect(() => {
    if (itemToEdit) {
      setValue('product', itemToEdit.product);
      setValue('qty', itemToEdit.qty);
      setValue('price', itemToEdit.price);
    }
  }, [itemToEdit]);

  useEffect(() => {
    const selectedProduct = products.find((item) => item.name === product);

    if (selectedProduct) {
      setValue('price', selectedProduct.price);
    }
  }, [product, price]);

  useEffect(() => {
    if (qty && price) {
      const priceNumber = parseFloat(price);
      const qtyNumber = parseInt(qty);

      setValue('total', (priceNumber * qtyNumber).toFixed(2));
    }
  }, [qty, price, total]);

  return (
    <Wrapper $gridTemplate={'30% 16% 16% 15% 18.5%'}>
      <FormField label={'Produto'} error={errors.product}>
        <RenderOptions
          data={products}
          register={register}
          registerName={'product'}
          message={'Selecione um produto'}
        />
      </FormField>
      <FormField label={'Quantidade'} error={errors.qty}>
        <Input min={1} type="number" {...register('qty')} />
      </FormField>
      <FormField label={'Valor Unitário'} error={errors.price}>
        <Input min={1} step="any" type="number" {...register('price')} />
      </FormField>
      <FormField label={'Total'} error={errors.total}>
        <Input min={1} step="any" type="number" {...register('total')} />
      </FormField>
      <Button color={'#3484ed'}>
        <FaShoppingCart />
      </Button>
    </Wrapper>
  );
};

export default AddItemToSell;
