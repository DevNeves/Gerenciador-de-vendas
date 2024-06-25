import FormSaleItens from './FormSaleItens';
import ItensSaledTable from './ItensSaledTable';
import BuyerForm from './BuyerForm';
import BtnsArea from './BtnsArea';

const SaleForm = () => {
  return (
    <>
      <BuyerForm />
      <FormSaleItens />
      <ItensSaledTable />
      <BtnsArea />
    </>
  );
};

export default SaleForm;
