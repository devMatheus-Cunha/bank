import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//
import {
  Container,
  Form,
  ContentInput,
  ContentTitleLogin,
  ButtonLogin,
  CreateAccount,
} from "../shared/styles";

const UserCreate = () => {
  // states
  const [values, setvalues] = useState({
    complete_name: "",
    cpf_cnpj: "",
    email: "",
    password: "",
  });

  // hooks
  const history = useHistory();

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
              name="complete_name"
              placeholder="Nome"
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
            <label htmlFor="user">Cpf/Cnpj</label>
            <input
              type="text"
              name="cpf_cnpj"
              placeholder="Cpf/Cnpj"
              onChange={(event) => {
                setvalues({
                  ...values,
                  cpf_cnpj: event.target.value,
                });
              }}
              value={values.cpf_cnpj}
              required
            />
          </ContentInput>
          <ContentInput>
            <label htmlFor="user">Email</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={(event) => {
                setvalues({
                  ...values,
                  email: event.target.value,
                });
              }}
              value={values.email}
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
        <ButtonLogin>Criar conta</ButtonLogin>
        <CreateAccount onClick={() => history.push("/")}>Login</CreateAccount>
      </Container>
    </>
  );
};
export default UserCreate;
