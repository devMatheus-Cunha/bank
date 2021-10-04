import { ReactNode } from "react";
/// //////////////////////
// interface for dataProps
/// //////////////////////
export interface IUserDataProps {
  userData: IDataProps;
  id: string;
}

export interface IDataProps {
      complete_name?: string;
      cpf_cnpj?: string;
      created_at?: string;
      email?: string;
      id: string;
      isSeller?: boolean;
      password?: string;
      update_at?: string;
      wallet?: number;
}

/// //////////////////////
// interface for Transfer
/// //////////////////////
export interface IValuesTransferProps {
  sendId: string;
  value: number;
}

export interface ITransferProps {
  handleSubmit: (values: IValuesTransferProps) => void;
  onCloseModal: () => void;
}

/// //////////////////////
// interface for Deposit
/// //////////////////////
export interface IValuesDepostiProps {
  value: number;
}

export interface IDepositProps {
  onCloseModal: () => void;
  handleSubmit: (data: number) => void
}

/// //////////////////////
// interface for Login
/// //////////////////////
export interface IValuesLoginProps {
  email: string;
  password: string;
}

/// //////////////////////
// interface for Create Account
/// //////////////////////
export interface IValuesCreateAccountProps {
  complete_name: string,
  cpf_cnpj: string,
  email: string,
  password: string,
  isSeller: boolean,
  wallet: number
}

/// //////////////////////
// interface  context
/// //////////////////////
export interface IGetIdProvider {
  children: ReactNode
}
