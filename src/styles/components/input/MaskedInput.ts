import styled from "styled-components";
import MaskedInput from "react-input-mask";

export const InputForm = styled(MaskedInput)`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 100%;
  font-size: 24px;
  border: 1px solid #000;
  padding: 0 10px 0 10px;
  margin: 15px 0 15px 0;

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
    font-size: 1vw;
    height: 60px;
    margin: 30px 0 30px 0;
  }

  @media (max-width: 900px) {
    min-width: 80%;
    height: 30px;
    font-size: 7.5px;
  }
`;
