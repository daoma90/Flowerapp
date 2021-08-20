import styled from "styled-components";
import { colorError } from "../../constants/colors";
import { Slabo } from "../../constants/text";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTitle = styled.label`
  ${Slabo}
  font-size: 1rem;
  color: white;
`;

export const Input = styled.input`
  border: none;
  box-shadow: 2px 3px 8px 0.2px rgba(50, 50, 50, 0.5);
  border-radius: 5px;
  height: 2.3vh;
  margin-top: 5px;
`;

export const TextArea = styled.textarea`
  border: none;
  box-shadow: 2px 3px 8px 0.2px rgba(50, 50, 50, 0.5);
  border-radius: 5px;
  resize: none;
  margin-top: 5px;
`;

export const ErrorText = styled.p`
  ${Slabo}
  font-size: .6em;
  color: ${colorError};
  height: 10px;
  margin: 5px;
  margin-left: 0;
`;
