import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;
