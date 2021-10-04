import React, { useState } from "react";

//
import { Container, Form, ContentInput, ContentTitleLogin, ButtonLogin } from "./styles";

function initalState() {
  return { user: "", password: "" };
}

const UserLogin = () => {
  const [values, setvalues] = useState(initalState);

  function onChange(event: any) {
    const { value, name } = event.target;

    setvalues({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <Container>
        <ContentTitleLogin>
          <h1 className="user-login-title">Login</h1>
        </ContentTitleLogin>
        <Form>
          <ContentInput>
            <label htmlFor="user">User</label>
            <input
              type="text"
              name="user"
              placeholder="E-mail"
              onChange={onChange}
              value={values.user}
              required
            />
          </ContentInput>

          <ContentInput>
            <label htmlFor="user">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={values.password}
              required
            />
          </ContentInput>
        </Form>

        <ButtonLogin>Log in</ButtonLogin>
      </Container>
    </>
  );
};
export default UserLogin;
