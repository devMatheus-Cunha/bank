// utils
import { headers, url } from "../utils";

interface IModelsProps {
  route: any;
  body?: any;
}

export const ModelPost = async ({ route, body }: IModelsProps) => {
	const api = `${url}${route}`;

	return fetch(api, {
		method: "POST",
		headers,
		body: JSON.stringify(body),
	})
		.then((response) => response.json())
		.catch((err) => console.log("Erro Post:", err))
};
