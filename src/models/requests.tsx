import axios from "axios";

const api = axios.create({
  baseURL: "http://3b4a-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

export const PostDeposit = (data: any) => {
  api.post(`/picpay/deposit/save/615606414b0a0e1c84bf14a9`, data).then((response) => {
    window.location.reload();
  });
};
