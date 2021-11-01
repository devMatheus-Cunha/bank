import * as Yup from "yup";

export default Yup.object().shape({
	email: Yup
		.string()
		.email("Email invalido.")
		.required("Preencha com seu email."),
	password: Yup
		.number()
		.min(123456, "Sua senha deve ter pelo menos 6 caracteres.")
		.required("Preencha com sua senha."),
});
