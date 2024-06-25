import { useContext, useState } from 'react';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      navigate('/home');
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <C.Container>
      <C.Wrapper>
        <C.Title>Entrar</C.Title>
        <C.Form>
          <C.Input
            type="email"
            placeholder="E-mail"
            name="email"
            required
            onChange={handleChange}
          />
          <C.Input
            type="password"
            placeholder="Senha"
            name="password"
            required
            onChange={handleChange}
          />
          <C.Button onClick={handleSubmit}>Entrar</C.Button>
        </C.Form>
        {err && <C.ErrorMessage>{err}</C.ErrorMessage>}
        <C.Message>
          Não possui uma conta ?{' '}
          <b>
            <Link to="/register">Clique aqui</Link>
          </b>{' '}
          para se cadastrar
        </C.Message>
      </C.Wrapper>
    </C.Container>
  );
};

export default Login;
