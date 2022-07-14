import styled from "styled-components";
import { Colors } from "../../color/colors";

export const Loader = styled.div`
  margin: 0 auto;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px dashed ${Colors.BLACK};
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
