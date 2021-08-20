import React, { FC } from "react";
import { Flower } from "../../types/types";
import AddComment from "../AddComment/AddComment";
import Comments from "../Comments/Comments";
import FlowerDetails from "../FlowerDetails/FlowerDetails";
import FlowerImage from "../FlowerImage/FlowerImage";
import {
  AddCommentCard,
  CommentsCard,
  DetailCard,
  FlowerName,
  Grid,
  GridContainer,
  ImageContainer,
  TitleCard,
  FlowerNameLatin,
} from "./style";

interface Props {
  flower: Flower;
}

const FlowerDetailGrid: FC<Props> = ({ flower }) => {
  return (
    <GridContainer>
      <Grid>
        <TitleCard
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <FlowerName>{flower.common_name.toUpperCase()}</FlowerName>
          <FlowerNameLatin>({flower.latin_name})</FlowerNameLatin>
        </TitleCard>
        <ImageContainer>
          <FlowerImage image={flower.cover_image} name={flower.common_name} />
        </ImageContainer>
        <DetailCard
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <FlowerDetails
            bloomingSeason={flower.blooming_season}
            soil={flower.soil}
            height={flower.height}
            depth={flower.depth}
            spacing={flower.spacing}
            sun={flower.sun}
            notes={flower.notes}
          />
        </DetailCard>

        <AddCommentCard
          initial={{ y: "200vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <AddComment flowerId={flower.id} />
        </AddCommentCard>
        <CommentsCard
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Comments />
        </CommentsCard>
      </Grid>
    </GridContainer>
  );
};

export default FlowerDetailGrid;
