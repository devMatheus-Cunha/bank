import axios from "axios";

// interface
import { IValuesDepostiProps, IValuesTransferProps } from "../interface";

// url api
const api = axios.create({
  baseURL: "http://d266-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

export const PostDeposit = (id: string, data: IValuesDepostiProps) => {
  api.post(`/picpay/deposit/save/${id}`, data).then((response) => {
  });
};

export const PostTransfer = (id: string, data: IValuesTransferProps) => {
  api.post(`/picpay/transactions/${id}`, data).then((response) => {
  });
};
