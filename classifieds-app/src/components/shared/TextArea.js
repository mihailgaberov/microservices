import styled from "styled-components";

const TextArea = styled.textarea`
  border: 1px solid ${props => props.theme.veryLightGrey};
  box-sizing: border-box;
  display: block;
  font-size: .9rem;
  padding: .25rem;
  resize: vertical;
  width: 100%;
`;

export default TextArea;
