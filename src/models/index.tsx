import axios from "axios";

// interface
import { IModelRequest } from "../interface";

// utils
import { url, headers } from "../utils";

export const Model = async ({
	route, request, body, pdf,
}: IModelRequest) => {
	const response = await axios({
		method: request,
		url: `${url}${route}`,
		data: body,
		headers,
		responseType: pdf,
	}).catch((err) => err);

	const userData = await response;
	return userData;
};
