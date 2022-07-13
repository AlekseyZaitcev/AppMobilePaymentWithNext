import styled from "styled-components";
import { Colors } from "../../color/colors";

export const LinkOperator = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
  padding: 15px 5px 15px 5px;
  font-size: calc(14px + 16 * (100vw / 1280));
  border: 1px solid ${Colors.BLACK};
  border-radius: 10px;
  background: none;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
    color: #fff;
    background: ${Colors.BLACK};
  }

  @media (max-width: 768px) {
    margin: 15px 0 15px 0;
  }
`;
