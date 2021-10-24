import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  `;

export const ContentInput = styled.div`
p{
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecond};
  margin-bottom: .2rem;
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

export const ContentButton = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  
  margin-top: 1rem;
  
  button {
    height: 2.7rem;
    width: 40%;
    
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    
    background-color: transparent;
    text-decoration: underline;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.text};

   &:last-child{
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.green200};
      text-decoration: none;

    &:hover{
      filter: brightness(0.9);
    }
   }
  }
`;
