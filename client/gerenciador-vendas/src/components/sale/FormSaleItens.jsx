import { Form } from '../../styles/FormStyled';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSale } from '../../../hooks/useSale';
import { useProduct } from '../../../hooks/useProduct';
import { saleItensSchema } from '../../schemas/schemas';

import AddItemToSell from './AddItemToSell';

const FormSaleItens = () => {
  const { products } = useProduct();
  const { setItensForSale, setTotal, itemToEdit, setItemToEdit, id, setId } = useSale();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(saleItensSchema),
  });

  const fields = watch();

  const onSubmit = (data) => {
    const getProductId = products.find((product) => product.name === data.product).id;

    const newItem = {
      id: itemToEdit ? itemToEdit.id : id,
      product: data.product,
      product_id: getProductId,
      qty: data.qty,
      price: data.price,
      total: data.total,
    };

    if (itemToEdit) {
      setItensForSale((prev) => prev.map((item) => (item.id === itemToEdit.id ? newItem : item)));
      setItemToEdit(null);
    } else {
      setItensForSale((prev) => [...prev, newItem]);
    }

    setTotal((prev) => prev + parseFloat(data.total));
    setId((prev) => prev + 1);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AddItemToSell register={register} fields={fields} setValue={setValue} errors={errors} />
    </Form>
  );
};

export default FormSaleItens;
