import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  margin:  0 auto;


  h1 {
    font-weight: 37px;
    color: white;
    text-align: center;
    font-size: 27px;
    transform: translate(1%, -110%);
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem 0;

  width: 85%;
`;

export const HandleSubmitButton = styled.button`
  padding: 10px 10px;
  margin: 10px auto 0 auto;
  border: 0;
  border-radius: 5px;
  width: 60%;

  text-transform: uppercase;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;

  background: ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.text};
`;

export const IsBackButton = styled.button`
  background-color: transparent;

  margin: 1.5rem auto;
  border: 0;

  text-transform: uppercase;
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 400;
`;

export const ContentFormControlLabel = styled.div`
  label {
    > span {
      color: ${({ theme }) => theme.colors.text};
      &:first-child > span {
        color: #11c76f !important;
      }
      .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
        background-color: #11c76f !important;
      }
    }
  }
`;
