// services
import { api } from "../api/service";

// interface
import { IModelRequest } from "../../interface";

export const Model = async ({
	route, request, body, responseType,
}: IModelRequest) => {
	const response = await api({
		method: request,
		url: route,
		data: body,
		responseType,
	}).catch((err) => err);

	const userData = await response;
	return userData;
};
