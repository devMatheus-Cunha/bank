import axios from "axios";
// utils
import { url, headers } from "../utils";

export const Model = async ({
	route, method, body, pdf,
}: any) => {
	const response = await axios({
		method,
		url: `${url}${route}`,
		data: body,
		headers,
		responseType: pdf,
	}).catch((err) => err);

	const userData = await response;
	return userData;
};
