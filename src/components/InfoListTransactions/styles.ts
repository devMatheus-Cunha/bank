import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: var(--background);

  margin: 0 auto 2rem 0;
  padding: 1rem;
  border-radius: 1rem;
`;

export const InfoData = styled.div`
  display: flex;
  gap: 0.3rem;
  text-align: right;

  h4 {
    margin: 0rem;
    padding: 0rem;
    font-size: 15px;
    font-family: "Poppins";
  }

  p {
    margin: 0rem;
    padding: 0rem;
  }
`;
