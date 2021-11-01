import { validateCNPJ, validateCPF } from "validations-br";

export const mensageErrorDefault = "Erro! Tente novamente mais tarde...";

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

export const formatDateTwoValues = (date: Date): string => {
	const formated = new Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "numeric",
	}).format(new Date(date));

	return formated;
};

export const formatDateAllValues = (date: Date): string => {
	const formated = new Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
		hour: "numeric",
	}).format(new Date(date));

	return formated;
};

export const formatMoney = (money: number): string => {
	const formated = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(money);

	return formated;
};

export const dataMockTransactions = [
	{
		from_who: "Matheus",
		to_who: "Andre",
		date: new Date(),
		value: 100,
	},
	{
		from_who: "Pedro",
		to_who: "Marcos",
		date: new Date(),
		value: 100,
	},
	{
		from_who: "Websiter",
		to_who: "Andre",
		date: new Date(),
		value: 100,
	},
];

export const validationCPFAndCNPJ = {
	name: "cpf_cnpj",
	message: "CPF ou CNPJ invalido",
	test: (value: any) => {
		return value?.length > 13 ? validateCNPJ(value) : validateCPF(value)
	},
}
