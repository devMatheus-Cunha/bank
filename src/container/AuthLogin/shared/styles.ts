import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContentTitleLogin = styled.div`
  h1 {
    font-weight: 40px;
    color: #11c76f;
    margin-bottom: 50px;
    text-align: center;
  }
`;
export const Form = styled.form`
margin: 5%;
`;
export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
  label{
      margin-bottom: 5px;
      color: #11c76f;
      font-size: 16px;
  }
  input {
      border-radius: 4px;
      border: 1px solid #11c76f;
      height: 36px;
      padding: 5px 10px;
  }
`;

export const ButtonLogin = styled.button`
  padding: 15px 100px;
  margin: 0 auto;
  margin-top: 9.5%;

  text-transform: uppercase;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: color 200ms;
  transition-property: background-color, color;
  border: 0;
  font-size: 16px;
  text-align: center !important;
  font-weight: 600;
  cursor: pointer;
  background-color: #11c76f;
  justify-content: center;
  display: flex;
  color: #fff;
`;
