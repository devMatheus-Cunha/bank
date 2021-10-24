import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
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
import { Model } from "../../../models";

// compoenents
import ToastContent from "../../../components/ToastContent";

// interface
import { IValuesCreateAccountProps } from "../../../interface";

// utils
import logoPicPay from "../../../assets/img/logo.svg";

// styles
import {
	Container,
	Content,
	Form,
	ContentInput,
	ContentTitle,
	HandleSubmitButton,
	IsBackButton,
	ContentFormControlLabel,
	ContentInputPassword,
} from "../shared/styles";

const UserCreate = () => {
	// hooks
	const history = useHistory();

	// states
	const [statesCreateAccount, setStateCreateAccount] = useState({
		complete_name: "",
		cpf_cnpj: "",
		email: "",
		password: "",
		isSeller: false,
		wallet: 0,
	});
	const [show, setShow] = useState(false);

	const handleSubmitCreateAccount = async (
		datas: IValuesCreateAccountProps,
	) => {
		const formated = {
			email: datas.email,
			password: datas.password,
			complete_name: datas.complete_name,
			cpf_cnpj: datas.cpf_cnpj,
			isSeller: datas.isSeller,
			wallet: datas.wallet,
		};

		const validateValues = formated.complete_name.length && formated.email.length && formated.password.length && formated.cpf_cnpj.length > 0

		if (validateValues) {
			const request = await Model({
				request: "POST",
				route: "/picpay/user",
				body: formated,
			});

			if (request?.data?.id) {
				await history.push(`/home/${request?.data?.id}`);
				toast.success(<ToastContent content="Conta criada!" />);
			} else {
				toast.error(<ToastContent content={request?.data} />);
			}
		} else {
			toast.error(<ToastContent content="Preencha todos os campos abaixo!" />);
		}
	};

	/// //////////////////////
	// render
	/// //////////////////////
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
						<h1 className="user-login-title">Criar Conta</h1>
					</ContentTitle>
					<Form>
						<ContentInput>
							<label htmlFor="complete_name">User</label>
							<input
								type="text"
								id="complete_name"
								name="complete_name"
								placeholder="Nome"
								onChange={(event) => {
									setStateCreateAccount({
										...statesCreateAccount,
										complete_name: event.target.value,
									});
								}}
								value={statesCreateAccount.complete_name}
								required
							/>
						</ContentInput>
						<ContentInput>
							<label htmlFor="cpf_cnpj">Cpf/Cnpj</label>
							<input
								type="text"
								id="cpf_cnpj"
								name="cpf_cnpj"
								placeholder="Cpf/Cnpj"
								onChange={(event) => {
									setStateCreateAccount({
										...statesCreateAccount,
										cpf_cnpj: event.target.value,
									});
								}}
								value={statesCreateAccount.cpf_cnpj}
								required
							/>
						</ContentInput>
						<ContentInput>
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="E-mail"
								onChange={(event) => {
									setStateCreateAccount({
										...statesCreateAccount,
										email: event.target.value,
									});
								}}
								value={statesCreateAccount.email}
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
										setStateCreateAccount({
											...statesCreateAccount,
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
						<ContentFormControlLabel>
							<FormControlLabel
								control={(
									<Switch
										checked={statesCreateAccount.isSeller}
										onChange={(event) => {
											setStateCreateAccount({
												...statesCreateAccount,
												isSeller: event.target.checked,
											});
										}}
										color="primary"
									/>
								)}
								label="Lojista"
							/>
						</ContentFormControlLabel>
					</Form>
					<HandleSubmitButton
						onClick={() => handleSubmitCreateAccount(statesCreateAccount)}
					>
						Criar conta
					</HandleSubmitButton>
					<IsBackButton onClick={() => history.push("/")}>Login</IsBackButton>
				</Content>
			</Container>
		</>
	);
};
export default UserCreate;
