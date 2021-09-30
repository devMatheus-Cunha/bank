/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GetIdContext = createContext({} as any);

const api = axios.create({
  baseURL: "http://506e-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

const GetIdProvider = (props: any) => {
  const [userData, setUserData] = useState<any>({
    data: {},
    id: "6156223abe4fe81d80da773d",
  });
  // const { id } = useParams<any>();

  useEffect(() => {
    api.get(`/picpay/admin/user/${userData.id}`).then((response) => {
      setUserData({
        ...userData,
        data: response.data,
      });
    });
  }, [userData.id]);

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

export default GetIdProvider;
