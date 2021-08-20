import React from "react";
import Image from "next/image";
import daisy from "../../public/images/daisy.jpg";
import growingPlants from "../../public/images/growing-plant.jpg";
import rayFlower from "../../public/images/ray-flower.jpg";
import globeAmaranth from "../../public/images/globe-amaranth.jpg";
import lotus from "../../public/images/lotus.jpg";
import cherryBlossoms from "../../public/images/cherry-blossom.jpg";
import sunFlower from "../../public/images/sunflower.jpg";
import {
  HeaderContainer,
  HeroButton,
  HeroButtonText,
  HeroGrid,
  HeroText,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Overlay,
} from "./style";

const textScale = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

interface Props {
  executeScroll: () => void;
}

const Hero = ({ executeScroll }) => {
  return (
    <HeroGrid>
      <HeaderContainer>
        <HeroText
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          LEARN MORE ABOUT FLOWERS
        </HeroText>
        <HeroButton
          onClick={executeScroll}
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ delay: 4, duration: 1.5 }}
          whileHover="hover"
        >
          <HeroButtonText variants={textScale}>Learn now</HeroButtonText>
        </HeroButton>
      </HeaderContainer>
      <Image1
        initial={{ width: "0%", opacity: "0%" }}
        animate={{
          width: "100%",
          opacity: "100%",
        }}
        transition={{ duration: 1, delay: 3 }}
      >
        <Image
          src={daisy}
          alt="Image of daisy flowers"
          objectFit="cover"
          layout={"fill"}
          quality={30}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image1>
      <Image2
        initial={{ height: "0%", opacity: "0%" }}
        animate={{ height: "100%", opacity: "100%" }}
        transition={{ duration: 2.5, delay: 2 }}
      >
        <Image
          src={growingPlants}
          alt="Image of growing plants"
          objectFit="cover"
          layout={"fill"}
          quality={30}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image2>
      <Image3
        initial={{ y: "-120%", opacity: "0%" }}
        animate={{ y: "0%", opacity: "100%" }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <Image
          src={rayFlower}
          alt="Image of a ray-flower"
          objectFit="cover"
          layout={"fill"}
          quality={30}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image3>
      <Image4
        initial={{ x: "120%", opacity: "0%" }}
        animate={{ x: "0%", opacity: "100%" }}
        transition={{ duration: 3, delay: 1.5 }}
      >
        <Image
          src={globeAmaranth}
          alt="Image of globe amaranth flowers"
          objectFit="cover"
          layout={"fill"}
          quality={30}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image4>
      <Image5
        initial={{ width: "0%", opacity: "0%" }}
        animate={{ width: "100%", opacity: "100%" }}
        transition={{ duration: 3, delay: 1 }}
      >
        <Image
          src={lotus}
          alt="Image of a lotus flower"
          objectFit="cover"
          layout={"fill"}
          quality={50}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image5>
      <Image6
        initial={{ y: "120%", opacity: "0%" }}
        animate={{ y: "0%", opacity: "100%" }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Image
          src={cherryBlossoms}
          alt="Image of cherry blossoms"
          objectFit="cover"
          layout={"fill"}
          quality={30}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image6>
      <Image7
        initial={{ x: "120%", opacity: "0%" }}
        animate={{ x: "0%", opacity: "100%" }}
        transition={{ duration: 2, delay: 2 }}
      >
        <Image
          src={sunFlower}
          alt="Image of sun flowers"
          objectFit="cover"
          layout={"fill"}
          quality={30}
          sizes={"30vw"}
          priority={true}
        />
        <Overlay />
      </Image7>
    </HeroGrid>
  );
};

export default Hero;
