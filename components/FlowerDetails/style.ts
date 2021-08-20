import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 30px 20px 30px 20px;
`;

const Text = styled.p`
  font-family: slabo-13px;
  font-weight: 200;
  margin: 0;
  color: white;
`;

export const Title = styled(Text)`
  font-size: 1rem;

  margin-bottom: 5px;
`;

export const Content = styled(Text)`
  font-size: 1.2rem;
`;

export const Divider = styled.div`
  width: 50%;
  height: 1px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;
