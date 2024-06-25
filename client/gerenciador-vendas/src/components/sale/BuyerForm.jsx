import { Form, Input, Wrapper } from '../../styles/FormStyled';

import { useEffect } from 'react';
import { useSale } from '../../../hooks/useSale';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCustomer } from '../../../hooks/useCustomer';
import { useForm } from 'react-hook-form';
import { salesSchema } from '../../schemas/schemas';

import FormField from '../FormField';
import RenderOptions from '../RenderOptions';

const BuyerForm = () => {
  const { customers } = useCustomer();
  const { setItensForSale, addSale, saleToEdit, editSale, setSaleToEdit } = useSale();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(salesSchema),
  });

  useEffect(() => {
    if (saleToEdit) {
      setValue('buyer', saleToEdit.buyer);
      setValue('sale_date', saleToEdit.sale_date.split('T')[0]);
    }
  }, [saleToEdit]);

  const onSubmit = (data) => {
    if (saleToEdit) {
      editSale(data);
    } else {
      addSale(data);
    }

    setSaleToEdit(null);
    reset();
    setItensForSale([]);
  };

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <FormField label={'Comprador'} error={errors.buyer}>
          <RenderOptions
            data={customers}
            register={register}
            registerName={'buyer'}
            message={'Selecione o comprador'}
          />
        </FormField>
        <FormField label={'Data da Venda'} error={errors.sale_date}>
          <Input type="date" {...register('sale_date')} />
        </FormField>
      </Wrapper>
    </Form>
  );
};

export default BuyerForm;
