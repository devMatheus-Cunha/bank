import axios from "axios";
// utils
import { url, headers } from "../utils";

export const Model = async ({
	route, method, body,
}: any) => {
	const response = await axios({
		method,
		url: `${url}${route}`,
		data: body,
		headers,
	}).catch((err) => err);

	const userData = await response;
	return userData;
};
