import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem;
    margin-bottom: 0.6rem;
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

    font-size: 17px;
   &:last-child{
    background-color: var(--green-picpay);
    color: var(--white);

    &:hover{
      filter: brightness(0.9);
    }
   }
  }
`;
