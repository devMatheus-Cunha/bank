/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// interface
import { IDataProps, IGetIdProvider, IUserDataProps } from "../interface";

// context
export const GetIdContext = createContext({} as IUserDataProps);

// url api
const api = axios.create({
  baseURL: "http://506e-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

const GetIdProvider = ({ children }: IGetIdProvider) => {
  const [userData, setUserData] = useState<IDataProps>();
  const [userId] = useState("6156223abe4fe81d80da773d");
  // const { id } = useParams<any>();

  useEffect(() => {
    api.get(`/picpay/admin/user/${userId}`).then((response) => {
      setUserData(response.data);
    });
  }, [userId]);

  return (
    <GetIdContext.Provider value={{ userData, userId } as IUserDataProps}>
      {children}
    </GetIdContext.Provider>
  );
};

export default GetIdProvider;
