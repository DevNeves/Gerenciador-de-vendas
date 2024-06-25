import * as C from '../../styles/TableStyled';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { useCity } from '../../../hooks/useCity';

const CitiesTable = () => {
  const { cities, deleteCity, setCityToEdit } = useCity();
  const navigate = useNavigate();

  const handleEdit = (city) => {
    setCityToEdit(city);
    navigate('/record-city');
  };

  const handleDelete = async (id) => {
    await deleteCity(id);
  };
  return (
    <>
      {!cities.length ? (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th $alignCenter={'center'}>Nenhuma cidade cadastrada</C.Th>
            </C.Tr>
          </C.Thead>
        </C.Table>
      ) : (
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th>Código</C.Th>
              <C.Th>Nome</C.Th>
              <C.Th>UF</C.Th>
              <C.Th>Editar</C.Th>
              <C.Th>Deletar</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {cities.map((city) => (
              <C.Tr key={city.id}>
                <C.Td $alignCenter={'center'} $width={'10%'}>
                  {city.id}
                </C.Td>
                <C.Td>{city.name}</C.Td>
                <C.Td>{city.uf}</C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#0d62b6'}>
                    <FaEdit onClick={() => handleEdit(city)} />
                  </C.BtnsWrapper>
                </C.Td>
                <C.Td $alignCenter={'center'} $width={'5%'}>
                  <C.BtnsWrapper $color={'#ef5454'}>
                    <FaTrashAlt onClick={() => handleDelete(city.id)} />
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

export default CitiesTable;
