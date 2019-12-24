import styled from 'styled-components';

const InputErrorMessage = styled.span`
  position: absolute;
  top: 53px;
  font-size: 10px;
  color: ${p => p.theme.colors.danger};
  padding-left: 15px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 57px;
    left: -10px;
    top: -67px;
    background-color: ${p => p.theme.colors.danger};
  }
  &:after {
    content: "c";
    margin-left: 5px;
    display: none;
  }
`;

export default InputErrorMessage
