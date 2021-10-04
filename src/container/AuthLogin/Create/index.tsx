import React, { useState } from "react";

//
import { Container, Form, ContentInput, ContentTitleLogin, ButtonLogin, CreateAccount } from "../shared/styles";

function initalState() {
  return { user: "", password: "" };
}

const UserCreate = () => {
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
          <h1 className="user-login-title">Criar Conta</h1>
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
            <label htmlFor="user">Cpf/Cnpj</label>
            <input
              type="text"
              name="cpf_cnpj"
              placeholder="Cpf/Cnpj"
              onChange={onChange}
              value={values.password}
              required
            />
          </ContentInput>
          <ContentInput>
            <label htmlFor="user">Email</label>
            <input
              type="text"
              name="email"
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
        <ButtonLogin>Criar conta</ButtonLogin>
        <CreateAccount>Login</CreateAccount>
      </Container>
    </>
  );
};
export default UserCreate;
