import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomInput from "../CustomInput/CustomInput";
import {
  AddCommentContainer,
  Form,
  InputRow,
  Spacer,
  SubmitButton,
  Title,
} from "./style";
import { createComment, editComment } from "../../lib/commentsAPI";
import { FC } from "react";
import { useComments } from "../../context/CommentsContext";

export interface FormData {
  flowerId: string;
  title: string;
  name: string;
  message: string;
  id?: string;
}

const formDefaultValues = {
  title: "",
  name: "",
  message: "",
};

const schema = yup.object().shape({
  title: yup.string().required("This field is required"),
  name: yup.string().required("This field is required"),
  message: yup.string().required("This field is required"),
});

interface Props {
  flowerId: string;
}

const AddComment: FC<Props> = ({ flowerId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const {
    getCommentsHandler,
    commentEditMode,
    commentEditData,
    clearEditMode,
  } = useComments();

  useEffect(() => {
    if (commentEditMode) {
      reset({
        title: commentEditData.title,
        name: commentEditData.name,
        message: commentEditData.message,
      });
    } else {
      reset(formDefaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentEditMode]);

  const onSubmit = handleSubmit(async (data, e) => {
    if (commentEditMode) {
      const response = await editComment({
        ...data,
        id: commentEditData.id,
        flowerId: commentEditData.flowerId,
      });
      if (response.status === 200) {
        reset(formDefaultValues);
        getCommentsHandler(flowerId);
        clearEditMode();
      }
    } else if (!commentEditMode) {
      const response = await createComment({ ...data, flowerId: flowerId });
      if (response.status === 200) {
        reset(formDefaultValues);
        getCommentsHandler(flowerId);
      }
    }
  });

  return (
    <AddCommentContainer>
      <Title>{!commentEditMode ? "Add a comment" : "Edit comment"}</Title>
      <Form onSubmit={onSubmit}>
        <InputRow>
          <CustomInput
            title="Title"
            id="title"
            register={register}
            errors={errors.title}
          />
          <Spacer />
          <CustomInput
            title="Name"
            id="name"
            register={register}
            errors={errors.name}
          />
        </InputRow>
        <CustomInput
          title="Message"
          id="message"
          register={register}
          errors={errors.message}
          multiline
        />
        <SubmitButton type="submit">Send comment</SubmitButton>
      </Form>
    </AddCommentContainer>
  );
};

export default AddComment;
