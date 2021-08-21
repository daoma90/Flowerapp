import styled from "styled-components";
import { Slabo } from "../../constants/text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  ${Slabo}
  font-size: 1.2rem;
  color: white;
  margin: 15px;
  margin-bottom: 15px;
`;

export const CommentsContainer = styled.ul`
  height: 100%;
  overflow: auto;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 0;
  padding-left: 0;
  list-style-type: none;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(7, 7, 7);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #009eb3;
  }
`;

export const NoComments = styled.p`
  ${Slabo}
  font-size: 1rem;
  margin: 0 auto;
  width: 80%;
  color: white;
`;
