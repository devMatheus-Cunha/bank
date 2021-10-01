import React from "react";

import { Container, Form, ContentInput, ContentTitleLogin } from "./styles";

const AlthLogin: React.FC = () => {
  return (
    <>
      <Container>
        <ContentTitleLogin>
          <h1 className="user-login-title">Login</h1>
        </ContentTitleLogin>
        <Form>
          <ContentInput>
            <label htmlFor="user">User</label>
            <input type="text" name="user" placeholder="E-mail" />
          </ContentInput>
          
          <ContentInput>
            <label htmlFor="user">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </ContentInput>
        </Form>
      </Container>
    </>
  );
};

export default AlthLogin;
