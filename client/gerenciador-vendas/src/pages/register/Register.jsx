import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(inputs);
      navigate('/login');
    } catch (err) {
      setErr(err.response.data);
    }
  };

  useEffect(() => {
    setErr(null);
  }, [inputs]);

  return (
    <C.Container>
      <C.Wrapper>
        <C.Title>Cadastrar-se</C.Title>
        <C.Form>
          <C.Input
            type="text"
            placeholder="Nome"
            name="username"
            required
            onChange={handleChange}
          />
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
          <C.Button onClick={handleSubmit}>Cadastrar</C.Button>
        </C.Form>
        {err && <C.ErrorMessage>{err}</C.ErrorMessage>}
        <C.Message>
          Já possui uma conta ?{' '}
          <b>
            <Link to="/login">Clique aqui</Link>
          </b>{' '}
          para entrar
        </C.Message>
      </C.Wrapper>
    </C.Container>
  );
};

export default Register;
