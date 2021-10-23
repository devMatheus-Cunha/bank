import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  color: #525151;
  border-radius: 1rem;
  margin: 0.8rem;
  padding: 1rem;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameUser = styled.h3`
  font-weight: 500;
`;

export const Balance = styled.div`
  p {
    font-size: 13px;
    span {
      color: #525151;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
