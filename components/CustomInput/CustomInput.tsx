import React, { FC } from "react";
import {
  InputContainer,
  Input,
  InputTitle,
  TextArea,
  ErrorText,
} from "./style";

interface Props {
  title: string;
  id: string;
  register: any;
  errors: any;
  multiline?: boolean;
}

const CustomInput: FC<Props> = ({
  title,
  id,
  register,
  errors,
  multiline = false,
}) => {
  return (
    <InputContainer>
      <InputTitle htmlFor={id}>{title}</InputTitle>
      {multiline ? (
        <>
          <TextArea rows="5" id={id} {...register(id)}></TextArea>
          <ErrorText>{errors?.message}</ErrorText>
        </>
      ) : (
        <>
          <Input type="text" id={id} {...register(id)}></Input>
          <ErrorText>{errors?.message}</ErrorText>
        </>
      )}
    </InputContainer>
  );
};

export default CustomInput;
