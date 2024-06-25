import * as C from '../../styles/TableStyled';

const CustomersTable = ({ filteredCustomers }) => {
  return (
    <>
      {!filteredCustomers.length ? (
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
              <C.Th>Cidade</C.Th>
              <C.Th>Telefone</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {filteredCustomers.map((customer, i) => (
              <C.Tr key={i}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {customer.id}
                </C.Td>
                <C.Td>{customer.name}</C.Td>
                <C.Td>{customer.city}</C.Td>
                <C.Td>{customer.fone}</C.Td>
              </C.Tr>
            ))}
          </C.Tbody>
        </C.Table>
      )}
    </>
  );
};

export default CustomersTable;
