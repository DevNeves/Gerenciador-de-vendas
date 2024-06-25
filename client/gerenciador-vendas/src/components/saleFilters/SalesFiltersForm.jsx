import { Label, CheckBox, Input, Form, Wrapper } from '../../styles/FilterPageStyled';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useProduct } from '../../../hooks/useProduct';
import { useSale } from '../../../hooks/useSale';

import RenderOptions from '../RenderOptions';

const SalesFiltersForm = ({ setFilteredSales }) => {
  const { products } = useProduct();
  const { sales, saledItens } = useSale();

  const { register, watch } = useForm();
  const { checkedPeriod, checkedBuyer, checkedProduct, firstPeriod, lastPeriod, buyer, product } =
    watch();

  useEffect(() => {
    let filtered = sales;

    if (checkedPeriod && firstPeriod && lastPeriod) {
      filtered = filtered.filter(
        (sale) => sale.sale_date >= firstPeriod && sale.sale_date <= lastPeriod
      );
    }

    if (checkedBuyer && buyer) {
      filtered = filtered.filter((sale) => sale.buyer.toLowerCase().includes(buyer.toLowerCase()));
    }

    if (checkedProduct && product) {
      filtered = filtered.filter((sale) => {
        const productSaled = saledItens.find(
          (item) => product === item.name && item.sale_id === sale.id
        );

        return productSaled;
      });
    }

    setFilteredSales(filtered);
  }, [checkedPeriod, checkedBuyer, checkedProduct, buyer, product, setFilteredSales]);

  return (
    <Form>
      <Label>
        <Wrapper>
          <CheckBox type="checkbox" {...register('checkedPeriod')} />
          Periodo de venda
        </Wrapper>
        <Wrapper>
          <Input type="date" {...register('firstPeriod')} />
          A
          <Input type="date" {...register('lastPeriod')} />
        </Wrapper>
      </Label>
      <Label>
        <Wrapper>
          <CheckBox type="checkbox" {...register('checkedBuyer')} />
          Comprador
        </Wrapper>
        <RenderOptions
          data={sales}
          register={register}
          registerName={'buyer'}
          message={'Selecione o comprador'}
        />
      </Label>
      <Label>
        <Wrapper>
          <CheckBox type="checkbox" {...register('checkedProduct')} />
          Produto
        </Wrapper>
        <RenderOptions
          data={products}
          register={register}
          registerName={'product'}
          message={'Selecione o produto'}
        />
      </Label>
    </Form>
  );
};

export default SalesFiltersForm;
