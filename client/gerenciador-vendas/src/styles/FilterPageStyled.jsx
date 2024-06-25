import { styled } from 'styled-components';

export const Container = styled.main`
  flex: 1;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const P = styled.p`
  font-size: 20px;
  color: gray;
  margin-top: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  color: #808080;

  select {
    width: 500px;
    height: 38px;
  }
`;

export const CheckBox = styled.input`
  width: 30px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:focus {
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  height: 35px;
  width: ${(props) => (props.$width ? props.$width : '230px')};
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  font-size: 18px;
  background-color: #ebe9e9;
  transition: all 0.2s linear;
  font-weight: ${(props) => (props.$weight ? props.$weight : 'bold')};
  color: #808080;
  border: ${(props) => (props.$error ? '1px solid red' : '')};

  &:focus {
    transform: scale(1.009);
  }

  &:hover {
    transform: scale(1.009);
  }
`;

export const MakePDFButton = styled.button`
  padding: 10px 20px;
  background-color: #3d3dff;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: solid 1px #3d3dff;
  transition: all 0.4s ease;
  margin-top: 25px;

  &:hover {
    color: #3d3dff;
    background-color: white;
    border: solid 1px #3d3dff;
  }
`;
