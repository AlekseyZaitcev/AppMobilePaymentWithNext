import styled from "styled-components";

export const ButtonForAdminPanel = styled.button`
  border: 1px solid #000;
  background: #fff;
  width: 100%;
  margin: 15px 0 0 0;
  padding: 20px;
  font-size: 1.5vw;

  :hover {
    color: white;
    background: rgba(51, 48, 48, 1);
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;
