import styled from "styled-components";

export const Error = styled.p`
  text-align: center;
  margin: 15px 0 15px 0;
  color: #ff0000;
  font-size: calc(10px + 10 * (100vw / 1280));

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
