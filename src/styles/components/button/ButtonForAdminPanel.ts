import styled from "styled-components";
import { Colors } from "../../color/colors";

export const ButtonForAdminPanel = styled.button`
  margin: 0 auto;
  display: block;
  padding: 10px;
  font-size: calc(14px + 16 * (100vw / 1280));
  border: 1px solid ${Colors.BLACK};
  background: none;

  :hover {
    color: #fff;
    background: ${Colors.BLACK};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`;
