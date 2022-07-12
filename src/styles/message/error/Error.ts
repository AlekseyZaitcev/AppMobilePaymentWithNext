import styled from "styled-components";

const Error = styled.p`
  margin: 10px 0 0 0;
  color: #ff0000;
  font-size: calc(10px + 8 * (100vw / 1280));

  @media (max-width: 1920px) {
    font-size: calc(10px + 2 * (100vw / 1280));
  }

  @media (max-width: 1440px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 8.5px;
  }
`;

export default Error;
