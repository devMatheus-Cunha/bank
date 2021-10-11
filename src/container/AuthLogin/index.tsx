import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

// models
import { ModelPost } from "../../models/modelPost";

// toast
import ToastContent from "../../components/ToastContent";

// interface
import { IValuesLoginProps } from "../../interface";

// utils
import logoPicPay from "../../assets/img/logo.svg";

// styles
import {
	Container,
	Content,
	Form,
	ContentInput,
	ContentTitle,
	HandleSubmitButton,
	IsBackButton,
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
	// functions
	const handleSubmitLogin = (datas: IValuesLoginProps) => {
		const formated = {
			email: datas.email,
			password: datas.password,
		};
		const response =	ModelPost({
			route: "/picpay/user/auth",
			body: formated,
		})

		response.then(async (response) => {
			if (response?.validUser?.id) {
				await history.push(`/home/${response?.validUser?.id}`)
				toast.success(<ToastContent content="Login feito!" />);
			} else {
				toast.error(<ToastContent content="Email ou Senha invalido!" />);
			}
		})
	};

	return (
		<>
			<Container>
				<Content>
					<img
						width="120"
						height="40"
						src={logoPicPay}
						alt="Logo do PicPay"
						loading="lazy"
						decoding="async"
					/>
					<ContentTitle>
						<h1 className="user-login-title">Login</h1>
					</ContentTitle>
					<Form>
						<ContentInput>
							<label htmlFor="email">E-mail</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="E-mail"
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
							<label htmlFor="password">Password</label>
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
					<HandleSubmitButton onClick={() => handleSubmitLogin(statesLogin)}>
						Logar
					</HandleSubmitButton>
					<IsBackButton onClick={() => history.push("/create")}>
						Criar conta
					</IsBackButton>
				</Content>
			</Container>
		</>
	);
};
export default UserLogin;
