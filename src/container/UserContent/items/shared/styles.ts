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
  color: var(--text-title);
  margin-bottom: .2rem;
}

input {
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-radius:6px;
  outline: none;
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
    background-color: var(--green-dark);
    color: var(--white);

    &:hover{
      filter: brightness(0.9);
    }
   }
  }
`;
