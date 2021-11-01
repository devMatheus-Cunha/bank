import * as Yup from "yup";

// utils
import { validationCPFAndCNPJ } from "../../../utils";

export default Yup.object().shape({
	complete_name: Yup
		.string()
		.required("Preencha com seu nome."),
	cpf_cnpj:	Yup
		.string()
		.required("Preencha com um CPF ou CNPJ valido.")
		.test(validationCPFAndCNPJ),
	email: Yup
		.string()
		.email("Email invalido.")
		.required("Preencha com seu email."),
	password: Yup
		.number()
		.min(123456, "Sua senha deve ter pelo menos 6 caracteres.")
		.required("Preencha com sua senha."),
});
