import styled from "styled-components";

export const Container = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.green200};
  }
  `;

export const Button = styled.button`
  display: flex;
  align-items: center; 
  gap: 0.5rem;
  
  background-color: transparent;
  border: none;
  
  width: 100%;
  
  font-size: 14px;
  text-align: left;
  
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.green200};
  }
`;
