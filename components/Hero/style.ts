import { motion } from "framer-motion";
import styled from "styled-components";
import { colorLightGrey } from "../../constants/colors";
import { Oswald } from "../../constants/text";

export const HeroGrid = styled.section`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  min-height: 100vh;
  z-index: 1;
  padding: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 20px;
  background-color: ${colorLightGrey};
  overflow: hidden;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 0.5fr 1fr;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 0px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-column-start: 7;
  grid-column-end: 10;
  grid-row-start: 5;
  grid-row-end: 7;
  outline: 20px solid ${colorLightGrey};
  background-color: ${colorLightGrey};
  z-index: 10;

  @media (max-width: 855px) {
    grid-column-end: 11;
  }

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

export const HeroText = styled(motion.h1)`
  position: relative;
  font-size: 2rem;
  ${Oswald}
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;

export const HeroButton = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 70px;
  padding: 10px;
  border: 1px solid black;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 200px;
  }
`;

export const HeroButtonText = styled(motion.p)`
  ${Oswald}
  font-size: 1.5rem;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  outline: 20px solid ${colorLightGrey};

  @media (max-width: 700px) {
    visibility: hidden;
    outline: none;
  }
`;

export const Image1 = styled(ImageContainer)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 5;
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    visibility: visible;
  }
`;

export const Image2 = styled(ImageContainer)`
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 5;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    visibility: visible;
  }
`;

export const Image3 = styled(ImageContainer)`
  grid-column-start: 10;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 7;
  z-index: 5;
  outline: 20px solid ${colorLightGrey};
  @media (max-width: 855px) {
    grid-row-end: 5;
  }
`;

export const Image4 = styled(ImageContainer)`
  grid-column-start: 13;
  grid-column-end: end;
  grid-row-start: 1;
  grid-row-end: 5;
`;

export const Image5 = styled(ImageContainer)`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 5;
  grid-row-end: end;
`;

export const Image6 = styled(ImageContainer)`
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 7;
  grid-row-end: end;
`;
export const Image7 = styled(ImageContainer)`
  grid-column-start: 11;
  grid-column-end: end;
  grid-row-start: 5;
  grid-row-end: end;
  z-index: 1;
`;
