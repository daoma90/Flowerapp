import axios from "axios";
import { FormData } from "../components/AddComment/AddComment";

export const commentApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getComments = async (flowerId: string) => {
  const response = await commentApi.get(`/comment-list/${flowerId}`);

  return response;
};

export const createComment = async (comment: FormData) => {
  const response = await commentApi.post(`/comment-create/`, comment);
  return response;
};

export const editComment = async (comment: FormData) => {
  const response = await commentApi.post(
    `/comment-update/${comment.id}/`,
    comment
  );
  return response;
};

export const deleteComment = async (commentId: string) => {
  const response = await commentApi.delete(`/comment-delete/${commentId}/`);
  return response;
};
