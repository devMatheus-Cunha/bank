import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.text};

  padding: 0.8rem;
  margin: 1.5rem 1rem;

  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
`;

export const ContentFirst = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Wallet = styled.p``;

export const Destiny = styled.p`
  font-size: 13px;

  span {
    font-weight: 500;
  }
`;

export const ContentSecond = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem 0;
`;

export const DateTransaction = styled.p``;

export const Details = styled.div`
  margin: 0 auto;
  button {
    border: none;
    background-color: transparent;

    svg {
      height: 20px;
      width: 20px;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
