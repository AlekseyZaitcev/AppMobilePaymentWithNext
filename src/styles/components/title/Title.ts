import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-size: calc(24px + 24 * (100vw / 1280));
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
