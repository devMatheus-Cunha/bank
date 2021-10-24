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
  align-items: center;

  label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    margin-bottom: 5px;
  }


  input {
    height: 36px;
    border-radius: 4px;
    border: none;
    outline: 0;
    padding: 5px 10px;
    background: ${({ theme }) => theme.colors.section};
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    width: 140px;
    height: 130px;
  }
`;

export const ContentTitle = styled.div`
  h1 {
    font-weight: 37px;
    color: white;
    text-align: center;
    font-size: 27px;
    transform: translate(5.5%, -70%);
  }
`;
export const Form = styled.form`
  margin: 3% 0;
  width: 90%;
  padding: 2.5%;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }
`;

export const ContentInputPassword = styled.div`
  margin-bottom: 13px;
  border-radius: 4px;

  button {
    background: transparent;
    border: none;
    outline: 0;
    padding-right: 0.2rem;

    & > svg {
      height: 18px;
      width: 18px;
      margin-right: 0.3rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const HandleSubmitButton = styled.button`
  padding: 15px 100px;
  margin: 10px auto 0 auto;
  border: 0;
  border-radius: 5px;

  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
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
