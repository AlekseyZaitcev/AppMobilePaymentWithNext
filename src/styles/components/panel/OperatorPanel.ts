import styled from "styled-components";

export const OperatorPanel = styled.div`
  margin: 30px 0 30px 0;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(209, 209, 209, 0.2);
  width: 100%;
  min-height: 400px;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
