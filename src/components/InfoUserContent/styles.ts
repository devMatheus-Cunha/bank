import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  padding: 1rem;
  margin: 0.8rem;
  border-radius: 1rem;
  min-height: 100px;

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
    color: var(--text-title);
    font-size: 17px;
    padding: 0;
    margin: 0;
  }
  h2 {
    margin: 0.4rem 0;
    color: var(--text-title);
    font-size: 20px;
  }
`;
