import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

// cookies
const cookies = Cookies.get();

export const api = axios.create({
	baseURL: "http://8758-2804-14c-5b80-80b4-b0a4-4e5f-3f81-87b6.ngrok.io",
	headers: {
		Authorization: `Bearer ${cookies.paypicToken}`,
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: AxiosError) => {
		if (error.response?.status === 401) {
			if (error.response.data?.code === "") {
				console.log(error.message)
			}
		}
	},
);
