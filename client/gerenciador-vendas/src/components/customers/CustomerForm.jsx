import { Form } from '../../styles/FormStyled';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { customerSchema } from '../../schemas/schemas.js';
import { useCustomer } from '../../../hooks/useCustomer';

import BtnsArea from '../BtnsArea.jsx';
import GetPersonalInfos from './GetPersonalInfos.jsx';
import SectionTitle from './SectionTitle.jsx';
import GetPersonalAddress from './GetPersonalAddress.jsx';

const CustomerForm = () => {
  const { addCustomer, editCustomer, setCustomerToEdit, customerToEdit } = useCustomer();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerSchema),
  });

  useEffect(() => {
    if (customerToEdit) {
      Object.keys(customerToEdit).forEach((key) => {
        setValue(key, customerToEdit[key]);
      });
      setValue('birth_date', customerToEdit.birth_date.split('T')[0]);
    }
  }, [customerToEdit]);

  const onSubmit = async (data) => {
    if (customerToEdit) {
      await editCustomer(data);
    } else {
      const response = await addCustomer(data);
      if (!response) return;
    }

    reset();
    setCustomerToEdit(null);
  };

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle title={'Dados Pessoais'} />
        <hr />
        <GetPersonalInfos errors={errors} register={register} />
        <SectionTitle title={'Endereço'} />
        <hr />
        <GetPersonalAddress errors={errors} register={register} />
      </Form>
      <BtnsArea reset={reset} />
    </>
  );
};

export default CustomerForm;
