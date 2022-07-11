import styled from "styled-components";

export const InputAdminPanel = styled.input`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 40px;
  border: 1px solid #000;
  margin: 15px 0 15px 0;
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

  @media (max-width: 768px) {
    width: 250px;
  }
`;
