import styled from "styled-components";
import MaskedInput from "react-input-mask";
import { Colors } from "../../color/colors";

export const InputForm = styled(MaskedInput)`
  display: flex;
  flex-direction: column;
  font-size: calc(14px + 16 * (100vw / 1280));
  padding-left: 15px;
  margin: 20px 0 20px 0;
  border: 2px solid ${Colors.GREY};
  transition: 0.3s;

  :hover,
  :focus {
    transform: scale(1.05);
    color: ${Colors.BLACK};
    background: ${Colors.WHITE};
    border: 2px solid ${Colors.BLACK};
    ::placeholder {
      color: ${Colors.BLACK};
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 30px;
    font-size: 12px;
    margin: 10px 0 10px 0;
  }
`;
