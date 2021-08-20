import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC, useEffect } from "react";
import FlowerDetailGrid from "../components/FlowerDetailGrid/FlowerDetailGrid";
import { Comment } from "../context/CommentContextTypes";
import { CommentsProvider, useComments } from "../context/CommentsContext";
import { getComments } from "../lib/commentsAPI";
import { getAllFlowers, getFlower } from "../lib/flowerAPI";
import { Flower } from "../types/types";

interface Props {
  flower: Flower;
  comments: Comment[];
}

const FlowerDetailPage: FC<Props> = ({ flower, comments }) => {
  const { setCommentsHandler } = useComments();

  useEffect(() => {
    setCommentsHandler(comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <FlowerDetailGrid flower={flower}></FlowerDetailGrid>;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allFlowers: Flower[] = await getAllFlowers();

  for (let i = 0; i < allFlowers.length; i++) {
    allFlowers[i] = { ...allFlowers[i], id: i.toString() };
  }

  const paths = allFlowers.map((flower) => ({
    params: {
      flowerId: flower.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const flower: Flower = await getFlower(params.flowerId as string);
  const comments = await getComments(params.flowerId as string);
  return {
    props: {
      flower: { ...flower, id: params.flowerId },
      comments: comments.data,
    },
    revalidate: 60,
  };
};

export default FlowerDetailPage;
