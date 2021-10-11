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

  img{
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
  margin-bottom: 13px;
  label {
    margin-bottom: 5px;
    color: #ffff;
    font-size: 14px;
  }
  input {
    border-radius: 4px;
    border: 1px solid #11c76f;
    height: 36px;
    padding: 5px 10px;
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
  text-align: c enter;
  font-weight: 600;
  cursor: pointer;
  background-color: #11c76f;
  justify-content: center;
  display: flex;
  color: #fff;
`;

export const IsBackButton = styled.button`
  padding: 15px;
  margin: 0 auto;
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
  color: #ffff;
`;

export const ContentFormControlLabel = styled.div`
  label {
    > span {
      color: white;
      &:first-child > span {
        color: #11c76f !important;
      }
      .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
        background-color: #11c76f !important;
      }
    }
  }
`;
