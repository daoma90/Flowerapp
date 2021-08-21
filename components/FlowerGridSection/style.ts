import { motion } from "framer-motion";
import styled from "styled-components";
import { Oswald } from "../../constants/text";

export const GridSectionContainer = styled.section`
  padding: 120px 20vw 120px 20vw;
  min-height: 100vh;
  @media (max-width: 1400px) {
    padding: 120px 10vw 120px 10vw;
  }
  @media (max-width: 1000px) {
    padding: 30px 10vw 30px 10vw;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
  }
`;

export const Headline = styled(motion.h2)`
  font-size: 2.5rem;
  ${Oswald}
  margin-bottom: 5px;
  @media (max-width: 1000px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const LeftHeadlineContainer = styled.div`
  width: 15vw;
  @media (max-width: 1400px) {
    width: 300px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 80%;
    align-items: center;
  }
  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
  }
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 245px;
  }
`;

export const Grid = styled(motion.ul)`
  display: grid;
  grid-gap: 3vw;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 240px));
  list-style-type: none;
  padding: 0px;
`;
