import { styled } from 'styled-components';

export const Container = styled.main`
  flex: 1;
  width: 100%;
  background-color: #f5f5f5;
  color: #494949;
  padding: 20px;
`;

export const Title = styled.h1`
  margin: 40px 0;
`;

export const SubTitle = styled.h3`
  margin-bottom: 5px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 200px;
  height: 40px;
  background-color: #cecdcd;
  margin-bottom: 20px;
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
  max-width: 200px;
  margin-bottom: 20px;

  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }
`;
