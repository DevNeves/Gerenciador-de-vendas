import { Label, Span, ErrorMessage } from '../styles/FormStyled';

const FormField = ({ label, children, error, width = null }) => {
  return (
    <Label style={{ width: width }}>
      <Span>{label}</Span>
      {children}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Label>
  );
};

export default FormField;
