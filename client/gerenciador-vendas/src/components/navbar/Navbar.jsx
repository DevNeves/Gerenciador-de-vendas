import * as C from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <C.Container>
      <C.Logo>Gerenciador</C.Logo>
      <C.Nav>
        <C.ItemContainer translate="190px">
          <C.Button>Cadastro</C.Button>
          <C.Wrapper>
            <Link to="/customers">
              <C.Item>Pessoas</C.Item>
            </Link>
            <Link to="/districts">
              <C.Item>Bairro</C.Item>
            </Link>
            <Link to="/cities">
              <C.Item>Cidade</C.Item>
            </Link>
            <Link to="/products">
              <C.Item>Produto</C.Item>
            </Link>
          </C.Wrapper>
        </C.ItemContainer>
        <C.ItemContainer translate="80px">
          <C.Button>Movimento</C.Button>
          <C.Wrapper>
            <Link to="/sales">
              <C.Item>Venda</C.Item>
            </Link>
          </C.Wrapper>
        </C.ItemContainer>
        <C.ItemContainer translate="110px">
          <C.Button>Relatórios</C.Button>
          <C.Wrapper>
            <Link to="/sales-filters">
              <C.Item>Vendas</C.Item>
            </Link>
            <Link to="/customers-filters">
              <C.Item>Pessoas</C.Item>
            </Link>
          </C.Wrapper>
        </C.ItemContainer>
      </C.Nav>
      <C.Button onClick={logout}>Sair</C.Button>
    </C.Container>
  );
};

export default Navbar;
