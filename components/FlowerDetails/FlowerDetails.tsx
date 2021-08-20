import React, { FC } from "react";
import { Content, DetailsContainer, Divider, Title } from "./style";

interface Props {
  bloomingSeason: string;
  soil: string[];
  height: { numberInt: number }[];
  depth: { numberInt: number };
  spacing: { numberInt: number };
  sun: boolean;
  notes: string;
}

const FlowerDetails: FC<Props> = ({
  bloomingSeason,
  soil,
  height,
  depth,
  spacing,
  sun,
  notes,
}) => {
  return (
    <DetailsContainer>
      <div>
        <Title>Blooming season</Title>
        <Content>{bloomingSeason}</Content>
      </div>
      <Divider />
      <div>
        <Title>Soil</Title>
        {soil.map((item) => (
          <Content key={item}>{item[0].toUpperCase() + item.slice(1)}</Content>
        ))}
      </div>
      <Divider />
      <div>
        <Title>Height</Title>
        <Content>
          {height.length > 1
            ? height[0].numberInt + " - " + height[1].numberInt
            : height[0].numberInt}{" "}
          cm
        </Content>
      </div>
      <Divider />
      <div>
        <Title>Root depth</Title>
        <Content>{depth.numberInt} cm</Content>
      </div>
      <Divider />
      <div>
        <Title>Flower spacing</Title>
        <Content>{spacing.numberInt} cm</Content>
      </div>
      <Divider />
      <div>
        <Title>Requires sunny area</Title>
        <Content>{sun ? "Yes" : "No"}</Content>
      </div>
      <Divider />
      <div>
        <Title>Notes</Title>
        <Content>{notes}</Content>
      </div>
    </DetailsContainer>
  );
};

export default FlowerDetails;
