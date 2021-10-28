import styled from "styled-components";

export const Container = styled.div`
  > select {
    padding: 4px 10px;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.section};

    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;
