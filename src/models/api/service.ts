import axios from "axios";
import Cookies from "js-cookie";

// cookies
const cookies = Cookies.get();

export const api = axios.create({
	baseURL: "https://7c36-2804-14c-5b80-80b4-b0a4-4e5f-3f81-87b6.ngrok.io",
	headers: {
		Authorization: `Bearer ${cookies.paypicToken}`,
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
