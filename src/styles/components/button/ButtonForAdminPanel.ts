import styled from "styled-components";

export const ButtonForAdminPanel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background: #fff;
  min-width: 400px;
  width: 100%;
  margin: 15px 0 0 0;
  padding: 20px;
  font-size: 1.5vw;

  :hover {
    color: white;
    background: rgba(51, 48, 48, 1);
  }

  @media (max-width: 900px) {
    min-width: 170px;
    height: 30px;
    width: 100px;
    font-size: 10px;
    padding: 0;
  }
`;
