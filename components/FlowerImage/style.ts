import styled from "styled-components";
import { colorGrey } from "../../constants/colors";
import { Oswald } from "../../constants/text";

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

export const MissingImage = styled(ImageContainer)`
  display: flex;
  border: 1px solid ${colorGrey};
  justify-content: center;
  align-items: center;
  font-size: 200%;
  text-align: center;
  color: ${colorGrey};
  ${Oswald}
`;
