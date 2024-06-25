import * as C from '../../styles/TableStyled';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useSale } from '../../../hooks/useSale';

const ItensSaledTable = () => {
  const { itensForSale, setItensForSale, setTotal, setItemToEdit, saleToEdit, deleteSaledItem } =
    useSale();

  const handleDelete = (sale) => {
    if (saleToEdit && sale.item_id) {
      deleteSaledItem(sale.item_id);

      const filteredItens = itensForSale.filter((item) => item.item_id !== sale.item_id);
      const deletedItem = itensForSale.find((item) => item.item_id === sale.item_id);

      setTotal((prev) => prev - parseFloat(deletedItem.total));
      setItensForSale(filteredItens);
    } else {
      const filteredItens = itensForSale.filter((item) => item.id !== sale.id);
      const deletedItem = itensForSale.find((item) => item.id === sale.id);

      setTotal((prev) => prev - parseFloat(deletedItem.total));
      setItensForSale(filteredItens);
    }
  };

  const handleEdit = (item) => {
    setItemToEdit(item);

    if (saleToEdit && item.item_id) {
      deleteSaledItem(item.item_id);
    }

    setTotal((prev) => prev - parseFloat(item.total));
  };

  return (
    <>
      {!itensForSale.length ? (
        <C.Table style={{ marginBottom: '20px' }}>
          <C.Thead>
            <C.Tr>
              <C.Th>Nenhum item adicionado na venda</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table style={{ marginBottom: '20px' }}>
          <C.Thead>
            <C.Tr>
              <C.Th>Código</C.Th>
              <C.Th>Produto</C.Th>
              <C.Th>Quantidade</C.Th>
              <C.Th>Valor Unitário</C.Th>
              <C.Th>Total</C.Th>
              <C.Th>Editar</C.Th>
              <C.Th>Deletar</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {itensForSale.map((item) => (
              <C.Tr key={item.id}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {item.id}
                </C.Td>
                <C.Td $width={'30%'}>{item.product}</C.Td>
                <C.Td $width={'10%'}>{item.qty}</C.Td>
                <C.Td $width={'15%'}>R$ {String(item.price).replace('.', ',')}</C.Td>
                <C.Td>{parseFloat(item.total).toFixed(2).replace('.', ',')}</C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#0d62b6'}>
                    <FaEdit onClick={() => handleEdit(item)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#ef5454'}>
                    <FaTrashAlt onClick={() => handleDelete(item)} />
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

export default ItensSaledTable;
