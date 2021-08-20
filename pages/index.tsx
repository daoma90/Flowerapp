import { useRef } from "react";
import { FC } from "react";
import FlowerGridSection from "../components/FlowerGridSection/FlowerGridSection";
import Hero from "../components/Hero/Hero";
import { getAllFlowers } from "../lib/flowerAPI";
import { Flower } from "../types/types";

interface Props {
  flowers: Flower[];
}

const Home: FC<Props> = ({ flowers }) => {
  for (let i = 0; i < flowers.length; i++) {
    flowers[i] = { ...flowers[i], id: i.toString() };
  }

  const scrollRef = useRef(null);

  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <div>
      <Hero executeScroll={executeScroll} />
      <FlowerGridSection flowers={flowers} scrollRef={scrollRef} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const flowers: Flower[] = await getAllFlowers();

  return {
    props: {
      flowers: flowers,
    },
    revalidate: 600,
  };
}
