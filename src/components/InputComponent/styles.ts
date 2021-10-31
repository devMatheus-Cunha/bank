import styled from "styled-components";

export const ContentInput = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem 0;

label{
  color: ${({ theme }) => theme.colors.textSecond};
}

input {
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-radius:6px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.section};
  color: ${({ theme }) => theme.colors.text}
}

`;
