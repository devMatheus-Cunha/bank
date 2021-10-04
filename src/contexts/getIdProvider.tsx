/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// interface
import { useParams } from "react-router";
import { IDataProps, IGetIdProvider, IUserDataProps } from "../interface";

// context
export const GetIdContext = createContext({} as IUserDataProps);

// url api
const api = axios.create({
	baseURL: "http://e59d-2804-14c-5b80-80b4-a1f6-7d66-967e-642.ngrok.io",
});

const GetIdProvider = ({ children }: IGetIdProvider) => {
	const [userData, setUserData] = useState<IDataProps>();
	const { id } = useParams<{ id: string }>();
	
	useEffect(() => {
		api.get(`/picpay/admin/user/${id}`).then((response) => {
			setUserData(response.data);
		});
	}, [id]);

	return (
		<GetIdContext.Provider value={{ userData, id } as IUserDataProps}>
			{children}
		</GetIdContext.Provider>
	);
};

export default GetIdProvider;
