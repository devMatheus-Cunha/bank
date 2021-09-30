import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GetIdContext = createContext({} as any);

const api = axios.create({
  baseURL: "http://3b4a-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

const GetIdProvider = (props: any) => {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    api.get(`/picpay/admin/user/615606414b0a0e1c84bf14a9`).then((response) => {
      setUserData(response.data);
    });
  }, [props.id]);

  return (
    <GetIdContext.Provider
      value={{
        userData,
      }}
    >
      {props.children}
    </GetIdContext.Provider>
  );
};

export default GetIdProvider
