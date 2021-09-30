import axios from "axios";

const api = axios.create({
  baseURL: "http://3d54-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

export const PostDeposit = (id: any, data: any) => {
  api.post(`/picpay/deposit/save/${id}`, data).then((response) => {
    window.location.reload();
  });
};
