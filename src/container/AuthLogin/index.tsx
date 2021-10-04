import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

// interface
import { IValuesLoginProps } from "../../interface";

// styles
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
	const [statesLogin, setStatesLogin] = useState({
		email: "",
		password: "",
	});

	// hooks
	const history = useHistory();

	// url api
	const api = "http://ade5-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io"
	// functions
	const handleSubmitLogin = (datas: IValuesLoginProps) => {
		const formated = {
			email: datas.email,
			password: datas.password,
		};

		axios.post(`${api}/picpay/user/auth`, formated).then((response) => {
			history.push(`/home/${response.data.validUser.id}`);
		});
	};

	return (
		<>
			<Container>
				<ContentTitleLogin>
					<h1 className="user-login-title">Login</h1>
				</ContentTitleLogin>
				<Form>
					<ContentInput>
						<label htmlFor="email">User</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Name"
							onChange={(event) => {
								setStatesLogin({
									...statesLogin,
									email: event.target.value,
								});
							}}
							value={statesLogin.email}
							required
						/>
					</ContentInput>
					<ContentInput>
						<label htmlFor="password">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							onChange={(event) => {
								setStatesLogin({
									...statesLogin,
									password: event.target.value,
								});
							}}
							value={statesLogin.password}
							required
						/>
					</ContentInput>
				</Form>
				<ButtonLogin onClick={() => handleSubmitLogin(statesLogin)}>
					Logar
				</ButtonLogin>
				<CreateAccount onClick={() => history.push("/create")}>
					Criar conta
				</CreateAccount>
			</Container>
		</>
	);
};
export default UserLogin;
