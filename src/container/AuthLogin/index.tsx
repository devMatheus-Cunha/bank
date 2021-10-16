import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import {
	Button,
	Input,
	FormLabel,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";

// icons
import { BsEyeSlash, BsEye } from "react-icons/bs";

// models
import { Model } from "../../models";

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
	ContentInputPassword,
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
	const [show, setShow] = useState(false);

	// hooks
	const history = useHistory();

	// url api
	// functions
	const handleSubmitLogin = async (datas: IValuesLoginProps) => {
		const formated = {
			email: datas.email,
			password: datas.password,
		};

		const request = await Model({
			method: "POST",
			route: "/picpay/user/auth",
			body: formated,
		});

		if (request.data?.validUser?.id) {
			await history.push(`/home/${request.data?.validUser?.id}`);
			toast.success(<ToastContent content="Login feito!" />);
		} else {
			toast.error(<ToastContent content={request?.response?.data} />);
		}
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
						<ContentInputPassword>
							<FormLabel>Senha</FormLabel>
							<InputGroup size="md">
								<Input
									type={show ? "text" : "password"}
									placeholder="Senha"
									name="password"
									pr="4.5rem"
									width="100%"
									errorBorderColor="red"
									onChange={(event) => {
										setStatesLogin({
											...statesLogin,
											password: event.target.value,
										});
									}}
								/>
								<InputRightElement>
									<Button h="2.5rem" onClick={() => setShow(!show)}>
										{show ? <BsEyeSlash /> : <BsEye />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</ContentInputPassword>
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
