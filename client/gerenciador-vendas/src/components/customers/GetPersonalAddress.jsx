import { Wrapper, Input } from '../../styles/FormStyled';

import { useCity } from '../../../hooks/useCity';
import { useDistrict } from '../../../hooks/useDistrict';

import InputMask from 'react-input-mask';
import FormField from '../FormField';
import RenderOptions from '../RenderOptions';

const GetPersonalAddress = ({ errors, register }) => {
  const { cities } = useCity();
  const { districts } = useDistrict();

  return (
    <>
      <Wrapper>
        <FormField label={'Cidade'} error={errors.city}>
          <RenderOptions
            data={cities}
            register={register}
            registerName={'city'}
            message={'Selecione uma cidade'}
          />
        </FormField>
        <FormField label={'CEP'} error={errors.postal_code}>
          <InputMask mask="99999-999" {...register('postal_code')}>
            {(inputProps) => <Input $weight={'400'} {...inputProps} />}
          </InputMask>
        </FormField>
        <FormField label={'Bairro'} error={errors.district}>
          <RenderOptions
            data={districts}
            register={register}
            registerName={'district'}
            message={'Selecione um bairro'}
          />
        </FormField>
        <FormField label={'Numero'} error={errors.house_number}>
          <Input type="text" {...register('house_number')} />
        </FormField>
      </Wrapper>
      <FormField label={'Rua'} error={errors.address}>
        <Input type="text" {...register('address')} />
      </FormField>
      <FormField label={'Complemento'} error={errors.complement}>
        <Input type="text" {...register('complement')} />
      </FormField>
    </>
  );
};

export default GetPersonalAddress;
