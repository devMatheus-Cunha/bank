import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--green-picpay);
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentButton = styled.button`
  background-color: #007aff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: #365AD6;
  }
`;
