import styled from "styled-components";

export const FormMobilePayment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background: rgba(209, 209, 209, 0.2);
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
