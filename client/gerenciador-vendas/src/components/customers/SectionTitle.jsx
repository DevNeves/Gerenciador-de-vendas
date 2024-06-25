import { Span } from '../../styles/FormStyled';

const SectionTitle = ({ title }) => {
  return (
    <Span color={'gray'} $weight={'bold'}>
      {title}
    </Span>
  );
};

export default SectionTitle;
