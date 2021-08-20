import { motion } from "framer-motion";
import styled from "styled-components";

export const GridItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 240px;
  position: relative;
  margin-bottom: 50px;
  cursor: pointer;
  border-radius: 20px;
`;

export const ImageContainer = styled(motion.div)`
  // width: 240px;
  width: 100%;
  height: 240px;
`;

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 88px;
  background-color: white;
  border-radius: 15px;
  position: absolute;
  bottom: -50px;
  box-shadow: 2px 3px 6px 1px rgba(50, 50, 50, 0.5);
`;

export const FlowerName = styled.p`
  margin: 0px;
  font-size: 1.2rem;
  font-family: Slabo-13px;
`;

export const FlowerNameLatin = styled(FlowerName)`
  font-size: 1rem;
`;
