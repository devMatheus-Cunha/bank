/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect } from "react";

// interface
import {
	IValuesDepostiProps,
	IValuesTransferProps,
	IValuesLoginProps,
} from "../interface";

// url api
const api = axios.create({
	baseURL: "http://ade5-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

export const PostDeposit = (id: string, data: IValuesDepostiProps) => {
	api.post(`/picpay/deposit/save/${id}`, data).then(() => {
		useEffect(() => {
			api.get(`/picpay/admin/user/${id}`)
		}, []);
	});
};

export const PostTransfer = (id: string, data: IValuesTransferProps) => {
	api.post(`/picpay/transactions/${id}`, data).then(() => {
		useEffect(() => {
			api.get(`/picpay/admin/user/${id}`)
		}, []);
	});
};

export const PostLogin = (data: IValuesLoginProps) => {
	api.post("/api/user/auth", data);
};
