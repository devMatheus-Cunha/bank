import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const Button = styled.button`
  width: 20%;
  height: 35px;
  border-radius: 2rem;

  font-size: 15px;
  letter-spacing: 0.1rem;
  font-family: "Inter", sans-serif;
  color: var(--white);

  background-color: var(--blue-light);
  border: none;
`;
