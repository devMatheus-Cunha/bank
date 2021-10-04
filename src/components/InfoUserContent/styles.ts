import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  padding: 1rem;
  margin: 0.8rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentInfo = styled.div`
  h2 {
    color: var(--text-title);
    margin-bottom: 1.4rem;
  }
`;
export const ContentBalance = styled.div`
  h1 {
    margin-bottom: 0.2rem;
    color: var(--text-title);
    font-size: 17px;
  }
  h2 {
    color: var(--text-title);
    font-size: 20px;
  }
`;
