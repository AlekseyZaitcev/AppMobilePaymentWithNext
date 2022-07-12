import styled from "styled-components";

export const FormButton = styled.button`
  border: 1px solid #000;
  background: #fff;
  width: 120px;
  height: 40px;
  margin: 30px 15px 0 0;

  :hover {
    color: white;
    background: rgba(51, 48, 48, 1);
  }

  @media (min-width: 2000px) {
    min-width: 450px;
    min-height: 100px;
    font-size: 1vw;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;
