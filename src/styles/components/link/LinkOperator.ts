import styled from "styled-components";

export const LinkOperator = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  margin: 10% 0 10% 0;
  width: 100%;
  padding: 20px;
  font-size: calc(10px + 16 * (75vw / 1280));

  :hover {
    color: white;
    background: rgba(51, 48, 48, 1);
  }
`;
