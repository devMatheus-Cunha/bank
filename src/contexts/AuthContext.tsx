import {
	createContext, ReactNode, useEffect, useState,
} from "react";
import Cookies from "js-cookie";

// models
import { Model } from "../models/request";
import { api } from "../models/api/service";

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
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	// states
	const [user, setUser] = useState<UserProps>();
	const [isAuthemticated, setIsAuthemticated] = useState(false)

	// funcitons
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
		api.defaults.headers.Authorization = `Bearer ${token}`

		return response;
	}

	// useEffects
	useEffect(() => {
		const { paypicToken: token } = Cookies.get()

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${token}`
			setIsAuthemticated(true)
		}
	}, [])

	console.log(isAuthemticated)

	return (
		<AuthContext.Provider
			value={{
				signIn,
				isAuthemticated,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
