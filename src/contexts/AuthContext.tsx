import { createContext, ReactNode, useState } from "react";
import Cookies from "js-cookie";

// models
import { Model } from "../models";

type UserProps = {
  token: string;
  validUser: {
    id: string;
    complete_name: string;
    cpf_cnpj: string;
    email: string;
    password: string;
    isSeller: boolean;
    update_at: string;
    wallet: number;
  };
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextProps = {
  signIn(credentials: SignInCredentials): Promise<any>;
  isAuthemticated: boolean;
  user: UserProps | undefined;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserProps>();
	const isAuthemticated = !!user;

	async function signIn(valuesBody: SignInCredentials) {
		const response = await Model({
			request: "POST",
			route: "/picpay/user/auth",
			body: valuesBody,
		});

		const { validUser, token } = response.data;

		setUser(validUser);

		Cookies.set("paypicToken", token, {
			expires: 60 * 60 * 24 * 30, // 30 days
			path: "/",
		});

		return response;
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				isAuthemticated,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
