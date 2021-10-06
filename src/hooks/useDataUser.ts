import { createContext, useEffect, useState } from "react";

// interface
import { IDataProps, IUserDataProps } from "../interface";
import { ModelGet } from "../models/modelGet";

// context
export const GetIdContext = createContext({} as IUserDataProps);

const useDataUser = (id: string) => {
	const [userData, setUserData] = useState<IDataProps>();

	useEffect(() => {
		ModelGet({
			route: `/picpay/admin/user/${id}`,
		}).then((response) => setUserData(response))
	}, [id]);

	return { userData };
};

export default useDataUser;
