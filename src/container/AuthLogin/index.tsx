import React, { useContext } from "react";
import { useHistory } from "react-router";

// toast
import { toast } from "react-toastify";

// formik
import { Formik, Form } from "formik";

// components
import InputComponent from "../../components/InputComponent";

// toast
import ToastContent from "../../components/ToastContent";

// interface
import { IValuesLoginProps } from "../../interface";

// context
import { AuthContext } from "../../contexts/AuthContext";

// validation
import validation from "./validation";

// images
import logoBank from "../../assets/img/logo.svg";

// styles
import {
	Container,
	Content,
	ContentForm,
	ContentTitle,
	HandleSubmitButton,
	IsBackButton,
} from "./shared/styles";

const UserLogin = () => {
	// hooks
	const history = useHistory();

	// context
	const { signIn } = useContext(AuthContext);

	// functions
	async function handleSubmitLogin(datas: IValuesLoginProps) {
		const request = await signIn(datas);

		if (request?.data?.validUser?.id) {
			history.push(`/home/${request?.data?.validUser?.id}`);
			toast.success(<ToastContent content="Login feito!" />);
		} else {
			toast.error(<ToastContent content="Error ao fazer o login!" />);
		}
	}

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
							src={logoBank}
							alt="Logo do Bank"
							loading="lazy"
							decoding="async"
						/>
						<h1 className="user-login-title">Login</h1>
					</ContentTitle>
					<Formik
						initialValues={{
							email: "",
							password: "",
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
