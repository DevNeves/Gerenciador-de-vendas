import { Form, Input } from '../../styles/FormStyled';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { districtSchema } from '../../schemas/schemas';
import { useDistrict } from '../../../hooks/useDistrict';

import BtnsArea from '../BtnsArea';
import FormField from '../FormField';

const DistrictForm = () => {
  const { addDistrict, editDistrict, districtToEdit, setDistrictToEdit } = useDistrict();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(districtSchema),
  });

  useEffect(() => {
    if (districtToEdit) {
      setValue('name', districtToEdit.name);
    }
  }, [districtToEdit]);

  const onSubmit = async (data) => {
    if (districtToEdit) {
      await editDistrict(data);
    } else {
      await addDistrict(data);
    }

    reset();
    setDistrictToEdit(null);
  };

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <FormField label={'Bairro'} errors={errors.name}>
          <Input $error={errors.name} type="text" {...register('name')} />
        </FormField>
      </Form>
      <BtnsArea reset={reset} />
    </>
  );
};

export default DistrictForm;
