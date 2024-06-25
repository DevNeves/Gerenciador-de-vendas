import * as C from '../../styles/TableStyled';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { useCustomer } from '../../../hooks/useCustomer';

const CustomersTable = () => {
  const { customers, deleteCustomer, setCustomerToEdit } = useCustomer();
  const navigate = useNavigate();

  const handleEdit = (customer) => {
    setCustomerToEdit(customer);
    navigate('/record-customer');
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
  };

  return (
    <>
      {!customers.length ? (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Nenhum cliente cadastrado</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Código</C.Th>
              <C.Th>Nome</C.Th>
              <C.Th>Telefone</C.Th>
              <C.Th>Editar</C.Th>
              <C.Th>Deletar</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {customers.map((customer) => (
              <C.Tr key={customer.id}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {customer.id}
                </C.Td>
                <C.Td>{customer.name}</C.Td>
                <C.Td>{customer.fone}</C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#0d62b6'}>
                    <FaEdit onClick={() => handleEdit(customer)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#ef5454'}>
                    <FaTrashAlt onClick={() => handleDelete(customer.customer_id)} />
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

export default CustomersTable;
