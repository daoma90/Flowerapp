import { motion } from "framer-motion";
import React from "react";
import { useComments } from "../../context/CommentsContext";
import CommentCard from "../CommentCard/CommentCard";
import { CommentsContainer, Container, NoComments, Title } from "./style";

export default function Comments() {
  const { comments } = useComments();

  return (
    <Container>
      <Title>Comments</Title>
      <CommentsContainer>
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <motion.li key={comment.id} layout>
              <CommentCard comment={comment} />
            </motion.li>
          ))
        ) : (
          <NoComments>There are no comments at the moment</NoComments>
        )}
      </CommentsContainer>
    </Container>
  );
}
