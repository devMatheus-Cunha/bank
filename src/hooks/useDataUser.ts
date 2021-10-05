import { createContext, useEffect, useState } from "react";
import axios from "axios";

// interface
import { IDataProps, IUserDataProps } from "../interface";

// context
export const GetIdContext = createContext({} as IUserDataProps);

// url api
const api = axios.create({
	baseURL: "http://ade5-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

const useDataUser = (id: string) => {
	const [userData, setUserData] = useState<IDataProps>();

	useEffect(() => {
		api.get(`/picpay/admin/user/${id}`).then((response) => {
			setUserData(response.data);
		});
	}, [id]);

	return { userData };
};

export default useDataUser;
