import styled from "styled-components";

export const InputAdminPanel = styled.input`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 100%;
  font-size: calc(24px + 16 (100 vw / 1280));
  border: 1px solid #000;
  padding: 10px;

  :hover,
  :focus {
    color: black;
    background: white;
    border: 2px solid black;
    ::placeholder {
      color: black;
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  @media (min-width: 2000px) {
    font-size: 1.5vw;
  }

  @media (max-width: 900px) {
    min-width: 170px;
    width: 100px;
    height: 50px;
    font-size: 14px;
  }
`;
