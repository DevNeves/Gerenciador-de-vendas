import { Form, Input } from '../../styles/FormStyled';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { citySchema } from '../../schemas/schemas';
import { useCity } from '../../../hooks/useCity';

import BtnsArea from '../BtnsArea';
import FormField from '../FormField';

const CityForm = () => {
  const { cityToEdit, editCity, addCity, setCityToEdit } = useCity();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(citySchema),
  });

  useEffect(() => {
    if (cityToEdit) {
      setValue('name', cityToEdit.name);
      setValue('uf', cityToEdit.uf);
    }
  }, [cityToEdit]);

  const onSubmit = async (data) => {
    if (cityToEdit) {
      await editCity(data);
    } else {
      await addCity(data);
    }

    reset();
    setCityToEdit(null);
  };

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <FormField label={'Cidade'} error={errors.name}>
          <Input type="text" {...register('name')} />
        </FormField>
        <FormField label={'UF'} error={errors.UF} width={'50%'}>
          <Input type="text" {...register('uf')} />
        </FormField>
      </Form>
      <BtnsArea reset={reset} />
    </>
  );
};

export default CityForm;
