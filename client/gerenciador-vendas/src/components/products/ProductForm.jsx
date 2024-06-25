import { Form, Input } from '../../styles/FormStyled';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { productSchema } from '../../schemas/schemas';
import { useProduct } from '../../../hooks/useProduct';

import BtnsArea from '../BtnsArea';
import FormField from '../FormField';

const ProductForm = () => {
  const { addProduct, editProduct, productToEdit, setProductToEdit } = useProduct();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (productToEdit) {
      setValue('name', productToEdit.name);
      setValue('price', productToEdit.price);
    }
  }, [productToEdit]);

  const onSubmit = async (data) => {
    if (productToEdit) {
      await editProduct(data);
    } else {
      await addProduct(data);
    }

    reset();
    setProductToEdit(null);
  };

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <FormField label={'Produto'} error={errors.name}>
          <Input type="text" {...register('name')} />
        </FormField>
        <FormField label={'Preço'} error={errors.price} width={'50%'}>
          <Input min={0.1} step="any" type="number" {...register('price')} />
        </FormField>
      </Form>
      <BtnsArea reset={reset} />
    </>
  );
};

export default ProductForm;
