import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  color: #525151;
  border-radius: 1rem;
  margin: 0.8rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameUser = styled.h3`
  font-weight: 500;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;

  p {
    display: flex;
    align-items: center;
    gap: 0 0.2rem;
    font-size: 13px;

    span {
      color: #525151;
      font-size: 14px;
      font-weight: bold;

      > div {
        background-color: #525151;
        border-radius: 5px;
        opacity: 0.4;
        width: 50px;
        height: 12px;
      }
    }
  }
`;

export const ViewBalance = styled.button`
  align-self: flex-start;
  border: none;
  outline: 0;
  background-color: transparent;

  svg {
    width: 21px;
    height: 21px;
    color: #525151;
  }
`;
