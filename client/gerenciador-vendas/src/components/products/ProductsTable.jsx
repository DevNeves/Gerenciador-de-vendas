import * as C from '../../styles/TableStyled';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import { useProduct } from '../../../hooks/useProduct';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {
  const { products, setProductToEdit, deleteProduct } = useProduct();
  const navigate = useNavigate();

  const handleEdit = (product) => {
    setProductToEdit(product);
    navigate('/record-product');
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };

  return (
    <>
      {!products.length ? (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Nenhum produto cadastrado</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Código</C.Th>
              <C.Th>Nome</C.Th>
              <C.Th>Preço</C.Th>
              <C.Th>Editar</C.Th>
              <C.Th>Deletar</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {products.map((product) => (
              <C.Tr key={product.id}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {product.id}
                </C.Td>
                <C.Td>{product.name}</C.Td>
                <C.Td>R$ {String(product.price).replace('.', ',')}</C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#0d62b6'}>
                    <FaEdit onClick={() => handleEdit(product)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#ef5454'}>
                    <FaTrashAlt onClick={() => handleDelete(product.id)} />
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

export default ProductsTable;
