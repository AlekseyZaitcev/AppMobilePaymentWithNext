import styled from "styled-components";
import { Colors } from "../../color/colors";

export const ButtonForAdminPanel = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  font-size: calc(14px + 16 * (100vw / 1280));
  border: 1px solid ${Colors.BLACK};
  border-radius: 10px;
  background: none;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
    color: ${Colors.WHITE};
    background: ${Colors.BLACK};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`;
