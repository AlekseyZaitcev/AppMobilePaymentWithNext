import styled from "styled-components";

export const InputAdminPanel = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5vw;
  border: 1px solid #000;
  padding-left: 10px;

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

  @media (max-width: 768px) {
    width: 250px;
  }
`;
