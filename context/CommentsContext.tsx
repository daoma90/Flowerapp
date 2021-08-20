import { createContext, useContext, useState } from "react";
import { getComments } from "../lib/commentsAPI";
import { CommentContextTypes, Comment } from "./CommentContextTypes";

const commentContextInitialState: CommentContextTypes = {
  comments: [],
  commentEditMode: false,
  commentEditData: null,
  setCommentsHandler: () => null,
  getCommentsHandler: () => null,
  populateCommentEditFields: () => null,
  clearEditMode: () => null,
};

export const CommentContext = createContext<CommentContextTypes>(
  commentContextInitialState
);

export const useComments = () => {
  return useContext(CommentContext);
};

export const CommentsProvider = ({ children }: any) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentEditMode, setCommentEditMode] = useState<boolean>(false);
  const [commentEditData, setCommentEditData] = useState<Comment | null>(null);

  const setCommentsHandler = (comments: Comment[]) => {
    setComments(comments);
  };

  const getCommentsHandler = async (flowerId: string) => {
    const response = await getComments(flowerId);

    if (response.status === 200) {
      setComments(response.data);
    }
  };

  const populateCommentEditFields = (comment: Comment) => {
    setCommentEditData(comment);
    setCommentEditMode(true);
  };

  const clearEditMode = () => {
    setCommentEditData(null);
    setCommentEditMode(false);
  };

  const value = {
    comments,
    commentEditMode,
    commentEditData,
    setCommentsHandler,
    getCommentsHandler,
    populateCommentEditFields,
    clearEditMode,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};
