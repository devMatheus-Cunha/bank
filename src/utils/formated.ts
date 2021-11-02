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
