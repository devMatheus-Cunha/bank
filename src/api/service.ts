import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

// cookies
const cookies = Cookies.get();

export const api = axios.create({
	baseURL: "http://980f-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
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
