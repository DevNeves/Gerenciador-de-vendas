import { styled } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.$gridTemplate ? props.$gridTemplate : '2fr 0.4fr')};
  align-items: end;
  grid-gap: 20px;
  margin-top: 10px;
`;

export const Span = styled.span`
  font-size: 22px;
  color: ${(props) => (props.color ? props.color : 'gray')};
  font-weight: ${(props) => (props.$weight ? props.$weight : 400)};
  margin-left: 5px;
  margin-top: 5px;
`;

export const Input = styled.input`
  height: 45px;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  font-size: 19px;
  background-color: #ebe9e9;
  border-bottom: 4px solid gray;
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

export const Select = styled.select`
  height: 45px;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  font-size: 19px;
  background-color: #ebe9e9;
  border-bottom: 4px solid gray;
  transition: all 0.2s linear;
  font-weight: bold;
  color: #808080;
  border: ${(props) => (props.$error ? '1px solid red' : '')};

  &:focus {
    transform: scale(1.009);
  }

  &:hover {
    transform: scale(1.009);
  }
`;
export const Option = styled.option``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.color};
  font-size: 18px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => props.color};
  transition: all 0.4s ease;
  margin-right: 25px;

  &:hover {
    color: ${(props) => props.color};
    background-color: white;
    border: 1px solid ${(props) => props.color};
  }
`;

export const TotalValue = styled.h2`
  background-color: #bebdbd;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 26px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  position: absolute;
  top: 95%;
`;
