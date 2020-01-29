import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid ${props => props.theme.veryLightGrey};
  box-sizing: border-box;
  display: block;
  font-size: .9rem;
  padding: .25rem;
  width: 100%;
`;

export default TextInput;
