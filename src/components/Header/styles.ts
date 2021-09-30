import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--green-picpay);
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
  font-family: 'Inter', sans-serif;
  color: var(--white);

  background-color: var(--blue-light);
  border: none;
`;
