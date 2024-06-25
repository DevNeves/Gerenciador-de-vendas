import { Wrapper, Title, NavButton } from '../styles/ListPageStyled';

import { Link } from 'react-router-dom';

const HeaderWrapper = ({ title, route, btnMessage }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Link to={route}>
        <NavButton>{btnMessage}</NavButton>
      </Link>
    </Wrapper>
  );
};

export default HeaderWrapper;
