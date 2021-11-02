import {
	createContext, ReactNode, useEffect, useState,
} from "react";
import Cookies from "js-cookie";

// models
import { Model } from "../models";

type UserProps = {
    id: string;
    complete_name: string;
    cpf_cnpj: string;
    email: string;
    password: string;
    isSeller: boolean;
    update_at: string;
    wallet: number;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextProps = {
  signIn(credentials: SignInCredentials): Promise<any>;
  isAuthemticated: boolean;
  user: UserProps | undefined;
  setUser: any
  paypicToken: any
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserProps>();
	const isAuthemticated = !!user;
	const { paypicToken } = Cookies.get()

	async function signIn(valuesBody: SignInCredentials) {
		const response = await Model({
			request: "POST",
			route: "/picpay/user/auth",
			body: valuesBody,
		});

		const { validUser, token } = response.data;

		Cookies.set("paypicToken", token, {
			expires: 60 * 60 * 24 * 30, // 30 days
			path: "/",
		});

		setUser(validUser);
		return response;
	}

	// useEffect(() => {
	// 	if (!paypicToken) {
	// 		 Model({
	// 			route: `/picpay/admin/user/${user?.id}`,
	// 			request: "GET",
	// 		})
	// 	}
	// }, [paypicToken, user?.id])

	return (
		<AuthContext.Provider
			value={{
				signIn,
				isAuthemticated,
				user,
				setUser,
				paypicToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
