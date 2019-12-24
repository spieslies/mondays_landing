import styled from 'styled-components';

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 2px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 0;
  box-shadow: none;
`;

export default Textarea;
