import React, { useState } from "react";
import { useHistory } from "react-router";

// toast
import { toast } from "react-toastify";

// formik
import { Formik, Form } from "formik";

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

// validation
import validation from "./validation";

// styles
import {
	Container,
	Content,
	ContentForm,
	ContentTitle,
	HandleSubmitButton,
	IsBackButton,
} from "./shared/styles";
import InputComponent from "../../components/InputComponent";

const UserLogin = () => {
	// states
	const [show, setShow] = useState(false);

	// hooks
	const history = useHistory();

	// functions
	const handleSubmitLogin = async (datas: IValuesLoginProps) => {
		const formated = {
			email: datas.email,
			password: datas.password,
		};

		const request = await Model({
			request: "POST",
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

	/// //////////////////////
	// render
	/// //////////////////////
	return (
		<>
			<Container>
				<Content>
					<ContentTitle>
						<img
							width="120"
							height="40"
							src={logoPicPay}
							alt="Logo do PicPay"
							loading="lazy"
							decoding="async"
						/>
						<h1 className="user-login-title">Login</h1>
					</ContentTitle>
					<Formik
						initialValues={{
							complete_name: "",
							cpf_cnpj: "",
							email: "",
							password: "",
							wallet: 0,
						}}
						onSubmit={(values: any) => handleSubmitLogin(values)}
						validationSchema={validation}
					>
						{({ isValid }) => (
							<Form>
								<ContentForm>
									<InputComponent
										name="email"
										placeholder="teste@teste.com"
										label="Email"
										type="email"
										required
									/>
									<InputComponent
										name="password"
										placeholder="*********"
										label="Senha"
										type="password"
										required
									/>
									<HandleSubmitButton type="submit" disabled={!isValid}>
										Logar
									</HandleSubmitButton>
								</ContentForm>
							</Form>
						)}
					</Formik>
					<IsBackButton onClick={() => history.push("/create")}>
						Criar conta
					</IsBackButton>
				</Content>
			</Container>
		</>
	);
};
export default UserLogin;
