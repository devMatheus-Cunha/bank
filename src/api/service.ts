import axios from "axios";
import Cookies from "js-cookie";

// cookies
const { paypicToken } = Cookies.get()

export const api = axios.create({
	baseURL: "http://71e9-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
	headers: {
		Authorization: `Bearer ${paypicToken}`,
		Accept: "application/json",
		"Content-Type": "application/json",
	},
})
