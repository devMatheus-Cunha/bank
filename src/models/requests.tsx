import axios from "axios";

// interface
import { IValuesTransferProps } from "../interface";

// url api
const api = axios.create({
  baseURL: "http://506e-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

export const PostDeposit = (id: string, data: number) => {
  api.post(`/picpay/deposit/save/${id}`, data).then((response) => {
    window.location.reload();
  });
};

export const PostTransfer = (id: string, data: IValuesTransferProps) => {
  api.post(`/picpay/transactions/${id}`, data).then((response) => {
    window.location.reload();
  });
};
