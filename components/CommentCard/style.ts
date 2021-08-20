import { motion } from "framer-motion";
import styled from "styled-components";
import {
  colorBlueAccent,
  colorGrey,
  colorLightGrey,
  colorRedAccent,
} from "../../constants/colors";
import { Slabo } from "../../constants/text";

export const CommentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colorLightGrey};
  border-radius: 15px;
  padding: 15px;
  box-shadow: 2px 3px 8px 0.1px rgba(50, 50, 50, 0.65);
  margin: 15px;
  flex-grow: 1;
  overflow: hidden;
`;

export const Title = styled.p`
  ${Slabo}
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const Content = styled.p`
  max-width: 230px;

  ${Slabo}
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const CreatedDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreatedName = styled.p`
  ${Slabo}
  font-size: 1rem;
  color: ${colorGrey};
`;

export const CreatedDate = styled.p`
  ${Slabo}
  font-size: 1rem;
  color: ${colorGrey};
`;

export const CommentOptionsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  height: 98px;
`;

export const CommentOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const CommentOptionEdit = styled(CommentOption)`
  background-color: ${colorBlueAccent};
`;

export const CommentOptionDelete = styled(CommentOption)`
  background-color: ${colorRedAccent};
`;
