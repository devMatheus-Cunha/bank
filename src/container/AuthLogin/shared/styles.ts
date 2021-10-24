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
    color: #525151;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    height: 36px;
    border-radius: 4px;
    border: none;
    outline: 0;
    padding: 5px 10px;
  }

  img {
    width: 140px;
    height: 130px;
  }
`;

export const ContentTitle = styled.div`
  h1 {
    font-weight: 37px;
    color: #11c76f;
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
    color: #525151;
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
  }
  button > svg {
    height: 18px;
    width: 18px;
    margin-right: 0.3rem;
    color: #525151;
  }
`;

export const HandleSubmitButton = styled.button`
  padding: 15px 100px;
  margin: 10px auto 0 auto;
  text-transform: uppercase;
  border-radius: 6px;
  text-decoration: none;
  transition: color 200ms;
  transition-property: background-color, color;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: #11c76f;
  justify-content: center;
  display: flex;
  color: #fff;
`;

export const IsBackButton = styled.button`
  margin: 1.5rem auto;
  text-transform: uppercase;
  border-radius: 6px;
  text-decoration: underline;
  font-weight: 600;
  transition: color 200ms;
  border: 0;
  font-size: 14px;
  text-align: center !important;
  font-weight: 400;
  cursor: pointer;
  background-color: transparent;
  justify-content: center;
  display: flex;
  color: #525151;
`;

export const ContentFormControlLabel = styled.div`
  label {
    > span {
      color: #525151;
      &:first-child > span {
        color: #11c76f !important;
      }
      .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
        background-color: #11c76f !important;
      }
    }
  }
`;
