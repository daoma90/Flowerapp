import React from "react";
import { FC } from "react";
import { IconContext } from "react-icons";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Comment } from "../../context/CommentContextTypes";
import { useComments } from "../../context/CommentsContext";
import { deleteComment } from "../../lib/commentsAPI";
import {
  CommentContainer,
  CommentOptionDelete,
  CommentOptionEdit,
  CommentOptionsContainer,
  Content,
  CreatedDate,
  CreatedDetailsContainer,
  CreatedName,
  Title,
} from "./style";

interface Props {
  comment: Comment;
}

const width = {
  rest: { width: "0%" },
  hover: {
    width: "80px",
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};

const CommentCard: FC<Props> = ({ comment }) => {
  const {
    getCommentsHandler,
    populateCommentEditFields,
    clearEditMode,
    commentEditMode,
  } = useComments();
  const date = new Date(comment.timeStamp);

  const formatDate = (date: Date) => {
    return (
      ("0" + date.getDate()).slice(-2) +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getFullYear()
    );
  };

  const deleteCommentHandler = async () => {
    const response = await deleteComment(comment.id);
    if (response.status === 200) {
      getCommentsHandler(comment.flowerId);
    }
  };

  const editCommentHandler = () => {
    if (commentEditMode) {
      clearEditMode();
    } else {
      populateCommentEditFields(comment);
    }
  };

  return (
    <CommentContainer initial="rest" whileHover="hover" animate="rest">
      <Title>{comment.title}</Title>
      <Content>{comment.message}</Content>
      <CreatedDetailsContainer>
        <CreatedName>{comment.name}</CreatedName>
        <CreatedDate>{formatDate(date)}</CreatedDate>
      </CreatedDetailsContainer>
      <CommentOptionsContainer variants={width}>
        <IconContext.Provider value={{ size: "25", color: "white" }}>
          <CommentOptionEdit onClick={editCommentHandler}>
            <AiOutlineEdit />
          </CommentOptionEdit>
          <CommentOptionDelete onClick={deleteCommentHandler}>
            <AiOutlineDelete />
          </CommentOptionDelete>
        </IconContext.Provider>
      </CommentOptionsContainer>
    </CommentContainer>
  );
};

export default CommentCard;
