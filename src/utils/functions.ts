import { validateCNPJ, validateCPF } from "validations-br";

export const generetePDF = (data: string) => {
	const url = window.URL.createObjectURL(
		new Blob([data], { type: "application/pdf" }),
	);
	const link = document.createElement("a");
	link.href = url;
	window.open(url, "_blank");

	// ? reserve
	// link.setAttribute("download", "lista_etiquetas.pdf");
	// document.body.appendChild(link);
	// link.click();
};

export const validationCPFAndCNPJ = {
	name: "cpf_cnpj",
	message: "CPF ou CNPJ invalido",
	test: (value: any) => {
		return value?.length > 13 ? validateCNPJ(value) : validateCPF(value)
	},
}
