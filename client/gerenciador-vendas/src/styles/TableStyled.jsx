import { styled } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  font-size: 26px;
  margin-top: 10px;
  color: #454545;
  border-collapse: collapse;
  border: 3px solid lightgray;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-left: 4px solid teal;
  font-weight: bold;
  padding: 10px;
  text-align: ${(props) => (props.$alignCenter ? 'center' : 'left')};
`;
export const Tbody = styled.tbody``;

export const Td = styled.td`
  border: 3px solid lightgray;
  padding: 12px;
  text-align: ${(props) => (props.$alignCenter ? 'center' : 'left')};
  width: ${(props) => (props.$width ? props.$width : 'auto')};
`;

export const BtnsWrapper = styled.div`
  font-size: 26px;
  transform: scale(1.3);
  transition: all 0.4s ease;
  cursor: pointer;
  color: ${(props) => props.$color};
  text-align: center;
  &:hover {
    transform: scale(1.4);
  }
`;
