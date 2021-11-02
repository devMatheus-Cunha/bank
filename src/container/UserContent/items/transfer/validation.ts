import * as Yup from "yup";

// utils
import { validationCPFAndCNPJ } from "../../../../utils/functions";

export default Yup.object().shape({
	cpf_cnpj:	Yup
		.string()
		.required("Preencha com um CPF ou CNPJ valido.")
		.test(validationCPFAndCNPJ),
	value: Yup
		.number()
		.min(1)
		.required("Preencha um valor."),
});
