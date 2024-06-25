import * as C from '../../styles/TableStyled';
import { FormatDate } from '../FormatDate';

const SalesTable = ({ filteredSales }) => {
  return (
    <>
      {!filteredSales.length ? (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Nenhum filtro selecionado</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Código</C.Th>
              <C.Th>Nome</C.Th>
              <C.Th>Total</C.Th>
              <C.Th $alignCenter={'center'}>Data da venda</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {filteredSales.map((sale, i) => (
              <C.Tr key={i}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {sale.id}
                </C.Td>
                <C.Td>{sale.buyer}</C.Td>
                <C.Td>{parseFloat(sale.total_value).toFixed(2).replace('.', ',')}</C.Td>
                <C.Td $alignCenter={'center'} $width={'20%'}>
                  {FormatDate(sale.sale_date)}
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
