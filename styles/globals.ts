import { motion } from "framer-motion";
import styled from "styled-components";

export const RoundedButton = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 5px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export const SquareButton = styled.div`
  position: relative;
  width: 100%;
  height: 83px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
