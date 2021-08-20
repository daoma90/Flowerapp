import React, { FC } from "react";
import { useRouter } from "next/router";
import { Flower } from "../../types/types";
import FlowerImage from "../FlowerImage/FlowerImage";
import {
  FlowerName,
  FlowerNameLatin,
  GridItemContainer,
  ImageContainer,
  TextCard,
} from "./style";

interface Props {
  flower: Flower;
}

const GridItem: FC<Props> = ({ flower }) => {
  const router = useRouter();

  const navigate = () => {
    router.push({
      pathname: "/[flowerId]",
      query: {
        flowerId: flower.id,
      },
    });
  };

  return (
    <GridItemContainer
      onClick={navigate}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.1,
        opacity: 0.6,
      }}
      transition={{ duration: 0.1 }}
    >
      <ImageContainer layoutId={flower.id} type="crossfade">
        <FlowerImage image={flower.cover_image} name={flower.common_name} />
      </ImageContainer>
      <TextCard>
        <FlowerName>{flower.common_name}</FlowerName>
        <FlowerNameLatin>({flower.latin_name})</FlowerNameLatin>
      </TextCard>
    </GridItemContainer>
  );
};

export default GridItem;
