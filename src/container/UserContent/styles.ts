import styled from "styled-components";

export const ContainerActionsButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.8rem;
  justify-content: center;
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 70px;
  border-radius: 2rem;
  background-color: var(--blue-light);
  margin-top: 1rem;

  svg {
    width: 23px;
    height: 23px;
  }

  > button {
    outline: none;
    border: none;
    color: var(--white);
  }

  p {
    font-size: 15px;
    letter-spacing: 0.1rem;
    font-family: 'Poppins', sans-serif;
    color: var(--white);
  }
`;
