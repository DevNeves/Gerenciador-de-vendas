import { Wrapper, Input } from '../../styles/FormStyled';

import InputMask from 'react-input-mask';
import FormField from '../FormField';

const GetPersonalInfos = ({ errors, register }) => {
  return (
    <Wrapper>
      <FormField label={'Nome Completo'} error={errors.name}>
        <Input type="text" {...register('name')} />
      </FormField>
      <FormField label={'Telefone'} error={errors.fone}>
        <InputMask mask="(99) 99999-9999" {...register('fone')}>
          {(inputProps) => <Input $weight={'400'} {...inputProps} />}
        </InputMask>
      </FormField>
      <FormField label={'Email'} error={errors.email}>
        <Input type="text" {...register('email')} />
      </FormField>
      <FormField label={'Nascimento'} error={errors.birth_date}>
        <Input type="date" {...register('birth_date')} />
      </FormField>
    </Wrapper>
  );
};

export default GetPersonalInfos;
