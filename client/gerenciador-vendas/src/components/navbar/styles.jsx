import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background-color: #dcdbdb;
  padding: 0 20px;
  border-bottom: 3px solid #c7c5c5;
  color: #494949;
`;

export const Logo = styled.h2`
  font-weight: bold;
  font-size: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Wrapper = styled.ul`
  opacity: 0;
  position: absolute;
  bottom: 42px;
  list-style: none;
  width: 100%;
  background-color: gray;
  transition: all 0.3s ease;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
  position: relative;

  &:hover ${Wrapper} {
    opacity: 1;
    transform: translateY(${(props) => props.translate});
  }
`;

export const Item = styled.li`
  width: 100%;
  font-size: 22px;
  cursor: pointer;
  color: white;
  background-color: teal;
  padding: 5px 10px;
  border: 1px solid teal;

  &:hover {
    background-color: white;
    color: teal;
    border: 1px solid teal;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: teal;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid teal;
  transition: all 0.4s ease;

  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }
`;
