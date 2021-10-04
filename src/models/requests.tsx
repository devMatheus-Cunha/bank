import axios from "axios";

// interface
import { IValuesDepostiProps, IValuesTransferProps, IValuesLoginProps } from "../interface";

// url api
const api = axios.create({
	baseURL: "http://e59d-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

export const PostDeposit = (id: string, data: IValuesDepostiProps) => {
	api.post(`/picpay/deposit/save/${id}`, data).then(() => {
		window.location.reload();
	});
};

export const PostTransfer = (id: string, data: IValuesTransferProps) => {
	api.post(`/picpay/transactions/${id}`, data).then(() => {
		window.location.reload();
	});
};

export const PostLogin = (data: IValuesLoginProps) => {
	api.post("/api/user/auth", data);
};
