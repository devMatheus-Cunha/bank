import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Button = styled.button`
  width: 20%;
  height:28px;
  border-radius: 2rem;

  font-size: 14px;
  letter-spacing: 0.1rem;
  font-family: 'Poppins', sans-serif;
  color:  ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.green200};
  border: none;
`;
