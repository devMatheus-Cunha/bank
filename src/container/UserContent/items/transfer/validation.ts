import * as Yup from "yup";

export default Yup.object().shape({
	cpf_cnpj: Yup.string()
		.max(15, "Passou o limite de caracteres")
		.required("Preencha um CPF ou CNPJ valido"),
	value: Yup.number().min(1).required(),
});
