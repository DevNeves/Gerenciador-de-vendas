import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3d3d3d;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #d6d5d5;
  box-shadow: 0px 1px 3px 1px gray;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Input = styled.input`
  height: 35px;
  padding-left: 5px;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  box-shadow: 0px 1px 3px 1px gray;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.01);
  }

  &:focus {
    transform: scale(1.01);
    outline: 1px teal solid;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
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

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export const Message = styled.span`
  text-align: center;
  margin-top: 20px;
`;
