import { ReactNode } from "react";
/// //////////////////////
// interface for dataProps
/// //////////////////////
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
  cpf_cnpj: string;
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
  handleSubmit: (data: number) => void;
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
  complete_name: string;
  cpf_cnpj: string;
  email: string;
  password: string;
  isSeller: boolean;
  wallet: number;
}

/// //////////////////////
// interface  context
/// //////////////////////
export interface IGetIdProvider {
  children: ReactNode;
}

/// //////////////////////
// interface  transactions datas
/// //////////////////////
export interface TransactionsDatasProps {
  from_who: string;
  to_who: string;
  value: number;
  date: Date;
}

/// //////////////////////
// interface  context
/// //////////////////////
export interface IModelRequest {
  route: string;
  request: "GET" | "POST" | "DELETE" | "PUT";
  body?: IValuesCreateAccountProps| IValuesLoginProps| IValuesDepostiProps | IValuesTransferProps | number
  pdf?: "arraybuffer" | "blob";
}
