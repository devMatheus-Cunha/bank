import Cookies from "js-cookie";

// services
import { api } from "../api/service";

// interface
import { IModelRequest } from "../../interface";

// cookies
const { paypicToken } = Cookies.get();

export const Model = async ({
	route, request, body, responseType,
}: IModelRequest) => {
	const response = await api({
		method: request,
		url: route,
		data: body,
		responseType,
		headers: {
			Authorization: `Bearer ${paypicToken}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	}).catch((err) => err);

	const userData = await response;
	return userData;
};
