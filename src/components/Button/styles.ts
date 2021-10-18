import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  button {
    background-color: var(--blue-light);
    outline: none;
    border: none;
    color: var(--white);

    border: none;

    width: 100%;
    height: 70px;
    border-radius: 2rem;

    svg {
      width: 23px;
      height: 23px;
    }

    p {
      font-size: 15px;
      letter-spacing: 0.1rem;
      font-family: "Poppins", sans-serif;
      color: var(--white);
    }
  }
`;
