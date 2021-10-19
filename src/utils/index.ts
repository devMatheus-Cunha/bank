export const url = "http://d0a9-201-17-210-95.ngrok.io";

export const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

export const mensageErrorDefault = "Erro! Tente novamente mais tarde...";

export const generetePDF = (data: any) => {
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

export const pdfConfig = "arraybuffer";

export const dataMockTransactions = [
	{
		fromWho: "MAtheus",
		toSend: "Andre",
		date: new Date(),
		value: 100,
	},
	{
		fromWho: "Pedro",
		toSend: "Marcos",
		date: new Date(),
		value: 100,
	},
	{
		fromWho: "Websiter",
		toSend: "Andre",
		date: new Date(),
		value: 100,
	},
];
