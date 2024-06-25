import * as C from '../../styles/TableStyled';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { useDistrict } from '../../../hooks/useDistrict';

const DistrictsTable = () => {
  const { districts, deleteDistrict, setDistrictToEdit } = useDistrict();
  const navigate = useNavigate();

  const handleEdit = (district) => {
    setDistrictToEdit(district);
    navigate('/record-district');
  };

  const handleDelete = async (id) => {
    await deleteDistrict(id);
  };

  return (
    <>
      {!districts.length ? (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th $alignCenter={'center'}>Nenhum bairro cadastrado</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Código</C.Th>
              <C.Th>Nome</C.Th>
              <C.Th>Editar</C.Th>
              <C.Th>Deletar</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {districts.map((district) => (
              <C.Tr key={district.id}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {district.id}
                </C.Td>
                <C.Td>{district.name}</C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#0d62b6'}>
                    <FaEdit onClick={() => handleEdit(district)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#ef5454'}>
                    <FaTrashAlt onClick={() => handleDelete(district.id)} />
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

export default DistrictsTable;
