import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// formik
import { Form, Formik } from "formik";

// toast
import { toast } from "react-toastify";

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
} from "../shared/styles";
import InputComponent from "../../../components/InputComponent";

const UserCreate = () => {
	// hooks
	const history = useHistory();

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
					<ContentTitle>
						<img
							width="120"
							height="40"
							src={logoPicPay}
							alt="Logo do PicPay"
							loading="lazy"
							decoding="async"
						/>
						<h1 className="user-login-title">Criar Conta</h1>
					</ContentTitle>
					<Formik
						initialValues={{
							complete_name: "",
							cpf_cnpj: "",
							email: "",
							password: "",
							wallet: 0,
						}}
						onSubmit={(values: any) => handleSubmitCreateAccount(values)}
						validationSchema={validation}
					>
						{({ isValid }) => (
							<Form>
								<ContentForm>
									<InputComponent
										name="complete_name"
										type="text"
										placeholder="Matheus..."
										label="Nome"
										required
									/>
									<InputComponent
										name="cpf_cnpj"
										placeholder="ex: 980.897.470-86"
										label="CPF ou CNPJ"
										type="number"
										required
									/>
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
										type="number"
										required
									/>
									<HandleSubmitButton
										type="submit"
										disabled={!isValid}
									>
										Criar conta
									</HandleSubmitButton>
								</ContentForm>
							</Form>
						)}
					</Formik>
					<IsBackButton onClick={() => history.push("/")}>Login</IsBackButton>
				</Content>
			</Container>
		</>
	);
};
export default UserCreate;
