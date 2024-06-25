import { styled } from 'styled-components';

export const Title = styled.h1`
  color: gray;
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  background-color: #373591;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #373591;
  transition: all 0.4s ease;

  &:hover {
    color: #373591;
    background-color: white;
    border: 1px solid #373591;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.main`
  flex: 1;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;
