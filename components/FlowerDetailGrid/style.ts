import { motion } from "framer-motion";
import styled from "styled-components";
import {
  colorBlue,
  colorBlueGrey,
  colorFadedGreen,
  colorFadedRed,
  colorGreen,
  colorLightGrey,
  colorRed,
} from "../../constants/colors";

export const GridContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 10px 0 10px 0;
    max-height: none;
    height: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(5, 200px);
  grid-gap: 10px;
  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 220px);
    grid-template-rows: repeat(5, 170px);
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 100%;
    grid-gap: 0px;
  }
`;

export const CardContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  max-height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  @media (max-width: 1000px) {
    overflow: visible;
    margin: 10px 0 10px 0;
    // &:first-child {
    //   margin-top: 20px;
    // }
    // &:last-child {
    //   margin-bottom: 20px;
    // }
  }
`;

export const TitleCard = styled(CardContainer)`
  grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-content: center;
  background-color: ${colorFadedRed};
  padding: 20px;
`;

export const DetailCard = styled(CardContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 6;
  background-color: ${colorBlue};
`;

export const CommentsCard = styled(CardContainer)`
  grid-column-start: 4;
  grid-column-end: end;
  grid-row-start: 2;
  grid-row-end: 6;
  background-color: ${colorBlueGrey};
`;

export const AddCommentCard = styled(CardContainer)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 6;
  background-color: ${colorFadedGreen};
`;

export const ImageContainer = styled(CardContainer)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  @media (max-width: 1000px) {
    height: 50vh;
  }
`;

export const FlowerName = styled.h1`
  font-family: slabo-13px;
  font-weight: 200;
  // font-size: 4rem;
  font-size: 5vh;
  margin: 0;
  color: white;
`;

export const FlowerNameLatin = styled.h2`
  font-family: slabo-13px;
  font-weight: 200;
  font-size: 4vh;
  margin: 0;
  color: white;
`;
