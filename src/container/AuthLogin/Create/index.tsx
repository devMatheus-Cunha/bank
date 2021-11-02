import React from "react";
import { useHistory } from "react-router-dom";

// formik
import { Form, Formik } from "formik";

// toast
import { toast } from "react-toastify";

// models
import { Model } from "../../../models/request";

// compoenents
import ToastContent from "../../../components/ToastContent";

// interface
import { IValuesCreateAccountProps } from "../../../interface";

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

	// functions
	const handleSubmitCreateAccount = async (
		datas: IValuesCreateAccountProps,
	) => {
		const formated = {
			email: datas.email,
			password: datas.password,
			complete_name: datas.complete_name,
			cpf_cnpj: String(datas.cpf_cnpj),
			isSeller: datas.isSeller,
			wallet: datas.wallet,
		};

		const request = await Model({
			request: "POST",
			route: "/picpay/user",
			body: formated,
		});

		if (request?.data?.id) {
			await history.push("/");
			toast.success(<ToastContent content="Conta criada!" />);
		} else {
			toast.error(<ToastContent content={request?.data} />);
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
							alt="Logo do Bank"
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
							isSeller: false,
						}}
						onSubmit={(values: IValuesCreateAccountProps) => handleSubmitCreateAccount(values)}
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
										type="password"
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
