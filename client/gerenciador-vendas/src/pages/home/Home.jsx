import * as C from './styles';

const Home = () => {
  return (
    <C.Container>
      <C.Title>Gerenciador de Vendas</C.Title>
      <C.Wrapper>
        <C.SubTitle>Total Vendas</C.SubTitle>
        <C.Value>2432423</C.Value>
        <C.SubTitle>Produtos Cadastrados</C.SubTitle>
        <C.Button>Produtos</C.Button>
        <C.SubTitle>Clientes Cadastrados</C.SubTitle>
        <C.Button>Pessoas</C.Button>
      </C.Wrapper>
    </C.Container>
  );
};

export default Home;
