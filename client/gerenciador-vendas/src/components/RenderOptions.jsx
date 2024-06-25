import { Option, Select } from '../styles/FormStyled';

const RenderOptions = ({ data, register, registerName, message }) => {
  return (
    <Select {...register(registerName)}>
      <Option value={''}>{message}</Option>
      {data.map((item) => (
        <Option key={item.id} value={item.name || item.buyer}>
          {item.name || item.buyer}
        </Option>
      ))}
      ;
    </Select>
  );
};

export default RenderOptions;
