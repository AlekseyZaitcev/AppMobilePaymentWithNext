import styled from "styled-components";

export const Title = styled.h2`
  padding: 30px 0 30px 0;
  font-size: calc(30px + 16 * (75vw / 1280));
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 24px;
  }

  @media (max-width: 900px) {
    padding: 30px 0 30px 0;
    font-size: 16px;
  }
`;
