import styled from "styled-components";

const SuccessMessage = styled.p`
  margin: 10px 0 0 0;
  color: #008000;
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

export default SuccessMessage;
