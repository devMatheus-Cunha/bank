import * as Yup from "yup";

// utils
import { validationCPFAndCNPJ } from "../../../utils";

export default Yup.object().shape({
	complete_name: Yup.string().required("Preencha com seu nome."),
	cpf_cnpj: Yup.string()
		.required("Preencha com um CPF ou CNPJ valido.")
		.test(validationCPFAndCNPJ),
	email: Yup.string()
		.required("Preencha com seu email.")
		.email("Email invalido."),
	password: Yup.string()
		.required("Preencha com sua senha.")
		.min(6, "Sua senha deve ter pelo menos 6 caracteres."),
});
