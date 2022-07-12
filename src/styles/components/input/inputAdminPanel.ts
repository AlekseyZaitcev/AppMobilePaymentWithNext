import styled from "styled-components";
import { Colors } from "../../color/colors";

export const InputAdminPanel = styled.input`
  display: flex;
  flex-direction: column;
  font-size: calc(16px + 16 * (100vw / 1280));
  padding-left: 15px;
  margin: 30px 0 15px 0;
  border: 2px solid ${Colors.GREY} @media (max-width: 768px) {
    width: 210px;
    height: 30px;
    font-size: 12px;
  }

  :hover,
  :focus {
    color: ${Colors.BLACK};
    background: white;
    border: 2px solid ${Colors.BLACK};
    ::placeholder {
      color: ${Colors.BLACK};
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
