import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ContentButton = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

  button{
  background-color: var(--blue-light);
  outline: none;
  border: none;
  color: var(--white);

  border: none;

  width: 100%;
  height: 70px;
  border-radius: 2rem;
  margin-top: 1rem;

    svg {
      width: 23px;
      height: 23px;
    }
  
    p {
      font-size: 15px;
      letter-spacing: 0.1rem;
      font-family: 'Poppins', sans-serif;
      color: var(--white);
    }
  }

`;
