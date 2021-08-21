import React, { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { colorGreen, colorRed, colorYellow } from "../../constants/colors";
import { RoundedButton } from "../../styles/globals";
import { Flower } from "../../types/flowerTypes";
import GridItem from "../GridItem/GridItem";
import {
  FilterContainer,
  GridSectionContainer,
  Headline,
  HeadlineContainer,
  FilterButtonContainer,
  LeftHeadlineContainer,
  Grid,
} from "./style";

interface Props {
  flowers: Flower[];
  scrollRef: any;
}

const FlowerGridSection: FC<Props> = ({ flowers, scrollRef }) => {
  const [renderedFlowers, setRenderedFlowers] = useState<Flower[]>(flowers);
  const [filter, setFilter] = useState<string>("No filter");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1 },
      });
    } else {
      animation.start({ x: "-50vw" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (filter === "Summer" || filter === "Spring") {
      filterFlowers(filter);
    } else {
      setRenderedFlowers(flowers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const filterFlowers = (filterWord: string) => {
    const filteredFlowers = flowers.filter((flower: Flower) =>
      flower.blooming_season.includes(filterWord)
    );
    setRenderedFlowers(filteredFlowers);
  };

  return (
    <div ref={scrollRef}>
      <GridSectionContainer ref={ref}>
        <HeadlineContainer>
          <LeftHeadlineContainer>
            <Headline animate={animation}>
              Click on a flower in the list to learn more
            </Headline>
          </LeftHeadlineContainer>
          <FilterContainer>
            <Headline>Filter flowers by blooming season</Headline>
            <FilterButtonContainer>
              <RoundedButton
                backgroundColor={colorGreen}
                onClick={() => setFilter("Spring")}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                Spring
              </RoundedButton>
              <RoundedButton
                backgroundColor={colorYellow}
                onClick={() => setFilter("Summer")}
                whileHover={{ scale: 1.1 }}
              >
                Summer
              </RoundedButton>
              <RoundedButton
                backgroundColor={colorRed}
                onClick={() => setFilter("No filter")}
                whileHover={{ scale: 1.1 }}
              >
                No filter
              </RoundedButton>
            </FilterButtonContainer>
          </FilterContainer>
        </HeadlineContainer>
        <Grid>
          {renderedFlowers.map((flower) => (
            <motion.li
              key={flower._id.oid}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              layout
            >
              <GridItem flower={flower} />
            </motion.li>
          ))}
        </Grid>
      </GridSectionContainer>
    </div>
  );
};

export default FlowerGridSection;
