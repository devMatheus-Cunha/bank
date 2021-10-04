import React, { useState } from "react";
import { useHistory } from "react-router";

//
import {
  Container,
  Form,
  ContentInput,
  ContentTitleLogin,
  ButtonLogin,
  CreateAccount,
} from "./shared/styles";

const UserLogin = () => {
  // states
  const [values, setvalues] = useState({ complete_name: "", password: "" });
  console.log(values);

  // hooks
  const history = useHistory();

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
              name="uscomplete_nameer"
              placeholder="Name"
              onChange={(event) => {
                setvalues({
                  ...values,
                  complete_name: event.target.value,
                });
              }}
              value={values.complete_name}
              required
            />
          </ContentInput>
          <ContentInput>
            <label htmlFor="user">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setvalues({
                  ...values,
                  password: event.target.value,
                });
              }}
              value={values.password}
              required
            />
          </ContentInput>
        </Form>
        <ButtonLogin>Logar</ButtonLogin>
        <CreateAccount onClick={() => history.push("./create")}>
          Criar conta
        </CreateAccount>
      </Container>
    </>
  );
};
export default UserLogin;
