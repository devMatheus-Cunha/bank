// utils
import { url } from "../utils";

// interface
interface IModelsProps {
  route: any;
}

export const ModelGet = async ({ route }: IModelsProps) => {
	const api = `${url}${route}`;

	return fetch(api, {
		method: "GET",
	}).then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.log("Erro Get:", err))
}
