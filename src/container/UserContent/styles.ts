import styled from "styled-components";

export const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerActionsButtons = styled.div`
  margin: 0.8rem;
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  width: 100%;
`;

export const ContainerTransactions = styled.div`

  max-height: 61vh;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.section};
  }
`;

export const Title = styled.h3`
  margin: 2.1rem 0.7rem 1rem 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;
