export const url = "http://4f52-2804-14c-5b80-80b4-c84f-b841-cfec-b2a6.ngrok.io"

export const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

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
