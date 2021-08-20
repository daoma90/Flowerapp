import React, { FC } from "react";
import Image from "next/image";
import { ImageContainer, MissingImage } from "./style";

interface Props {
  image: string;
  name: string;
}

const FlowerImage: FC<Props> = ({ image, name }) => {
  return (
    <ImageContainer>
      {image ? (
        <Image
          unoptimized={true}
          src={image}
          alt={`Image of ${name}`}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      ) : (
        <MissingImage>Image not avaliable</MissingImage>
      )}
    </ImageContainer>
  );
};

export default FlowerImage;
