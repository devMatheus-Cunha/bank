import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentButton = styled.button`
  background-color: #007aff;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 2px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #365AD6;
  }
`;
