import { CheckBox, Form, Input, Label, Wrapper } from '../../styles/FilterPageStyled';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useCustomer } from '../../../hooks/useCustomer';
import { useCity } from '../../../hooks/useCity';
import { useDistrict } from '../../../hooks/useDistrict';

import RenderOptions from '../RenderOptions';

const CustomersFiltersForm = ({ setFilteredCustomers }) => {
  const { customers } = useCustomer();
  const { cities } = useCity();
  const { districts } = useDistrict();

  const { register, watch } = useForm();

  const { checkedName, checkedCity, checkedDistrict, name, city, district } = watch();

  useEffect(() => {
    let filtered = customers;

    if (checkedName && name) {
      filtered = filtered.filter((customer) =>
        customer.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (checkedCity && city) {
      filtered = filtered.filter((customer) =>
        customer.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (checkedDistrict && district) {
      filtered = filtered.filter((customer) =>
        customer.district.toLowerCase().includes(district.toLowerCase())
      );
    }

    setFilteredCustomers(filtered);
  }, [checkedName, name, checkedCity, city, checkedDistrict, district, customers]);

  return (
    <Form>
      <Label>
        <Wrapper>
          <CheckBox type="checkbox" {...register('checkedName')} />
          Parte do nome
        </Wrapper>
        <Input type="text" $width={'500px'} {...register('name')} />
      </Label>
      <Label>
        <Wrapper>
          <CheckBox type="checkbox" {...register('checkedCity')} />
          Cidade
        </Wrapper>
        <RenderOptions
          data={cities}
          register={register}
          registerName={'city'}
          message={'Selecione a cidade'}
        />
      </Label>
      <Label>
        <Wrapper>
          <CheckBox type="checkbox" {...register('checkedDistrict')} />
          Bairro
        </Wrapper>
        <RenderOptions
          data={districts}
          register={register}
          registerName={'district'}
          message={'Selecione o bairro'}
        />
      </Label>
    </Form>
  );
};

export default CustomersFiltersForm;
