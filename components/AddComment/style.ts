import styled from "styled-components";
import { colorGrey } from "../../constants/colors";
import { Slabo } from "../../constants/text";

export const AddCommentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 80%;
`;

export const Title = styled.h3`
  ${Slabo}
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: ${colorGrey};
  color: white;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 3px 8px 0.2px rgba(50, 50, 50, 0.5);
  cursor: pointer;
  margin-top: 5px;
`;

export const Spacer = styled.div`
  width: 40px;
`;
