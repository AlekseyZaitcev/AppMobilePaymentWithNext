import styled from "styled-components";
import { Colors } from "../../color/colors";

export const Error = styled.p`
  text-align: center;
  margin: 15px 0 15px 0;
  color: ${Colors.RED};
  font-size: calc(10px + 10 * (100vw / 1280));

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
