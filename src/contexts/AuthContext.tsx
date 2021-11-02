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
  signIn: any;
  logOut(): void;
  isAuthemticated: boolean;
  user: UserProps | undefined;
  setUser: any;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	// states
	const [user, setUser] = useState<UserProps>();
	const [isAuthemticated, setIsAuthemticated] = useState(false);

	// useEffects
	useEffect(() => {
		const { paypicToken: token } = Cookies.get();

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${token}`;
			setIsAuthemticated(true);
		}
	}, []);

	// funcitons
	// eslint-disable-next-line consistent-return
	async function signIn(valuesBody: SignInCredentials) {
		const response = await Model({
			request: "POST",
			route: "/picpay/user/auth",
			body: valuesBody,
		});

		const { validUser, token } = response?.data;
		Cookies.set("paypicToken", token, {
			expires: 60 * 60 * 24 * 30, // 30 days
			path: "/",
		});

		api.defaults.headers.Authorization = `Bearer ${token}`;
		setUser(validUser);
		return response;
	}

	function logOut() {
		Cookies.remove("paypicToken");
		api.defaults.headers.Authorization = undefined;
		setIsAuthemticated(false);
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				logOut,
				isAuthemticated,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
