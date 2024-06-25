import * as C from '../../styles/TableStyled';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { IoMdPrint } from 'react-icons/io';

import { useSale } from '../../../hooks/useSale';
import { useCustomer } from '../../../hooks/useCustomer';
import { useNavigate } from 'react-router-dom';

import SalePDF from '../../pdf/SalePDF';
import { FormatDate } from '../FormatDate';

const SalesTable = () => {
  const { sales, getSaledItens, setItensForSale, setTotal, setSaleToEdit, setId, deleteSale } =
    useSale();
  const { customers } = useCustomer();
  const navigate = useNavigate();

  const handleEdit = async (sale) => {
    const items = await getSaledItens(sale.id);

    items.forEach((item, index) => {
      setItensForSale((prev) => [
        ...prev,
        {
          id: index + 1,
          product: item.name,
          product_id: item.product_id,
          item_id: item.item_id,
          qty: item.qty,
          price: item.price,
          total: item.total_value,
        },
      ]);

      setId(items.length + 1);
      setTotal((prev) => prev + parseFloat(item.total_value));
    });

    setSaleToEdit(sale);
    navigate('/record-sale');
  };

  const handleDelete = async (id) => {
    await deleteSale(id);
  };

  const handlePDF = async (sale) => {
    const customer = customers.filter((customer) => customer.name === sale.buyer);
    const itens = await getSaledItens(sale.id);

    return SalePDF(sale, itens, customer[0]);
  };

  return (
    <>
      {!sales.length ? (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Nenhuma venda cadastrada</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th $alignCenter={'center'}>Código</C.Th>
              <C.Th>Comprador</C.Th>
              <C.Th>Total</C.Th>
              <C.Th $alignCenter={'center'}>Data</C.Th>
              <C.Th>Editar</C.Th>
              <C.Th>Deletar</C.Th>
              <C.Th>PDF</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {sales.map((sale) => (
              <C.Tr key={sale.id}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {sale.id}
                </C.Td>
                <C.Td $width={'35%'}>{sale.buyer}</C.Td>
                <C.Td $width={'20%'}>
                  R$ {parseFloat(sale.total_value).toFixed(2).replace('.', ',')}
                </C.Td>
                <C.Td>{FormatDate(sale.sale_date)}</C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#0d62b6'}>
                    <FaEdit onClick={() => handleEdit(sale)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#ef5454'}>
                    <FaTrashAlt onClick={() => handleDelete(sale.id)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#14bfe1'}>
                    <IoMdPrint onClick={() => handlePDF(sale)} />
                  </C.BtnsWrapper>
                </C.Td>
              </C.Tr>
            ))}
          </C.Tbody>
        </C.Table>
      )}
    </>
  );
};

export default SalesTable;
