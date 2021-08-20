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
  font-family: slabo-13px;
  font-weight: 200;
  font-size: 1.2rem;
  color: white;
  margin: 15px;
  margin-bottom: 15px;
`;

export const CommentsContainer = styled.ul`
  height: 100%;
  overflow: auto;
  // max-height: 20%;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 0;
  list-style-type: none;

  // @media (max-width: 1000px) {
  //   max-height: 70vh;
  // }

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
