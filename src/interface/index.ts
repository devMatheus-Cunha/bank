import { ReactNode } from "react";
/////////////////////////
// interface for dataProps
/////////////////////////
export interface IUserDataProps {
  userData: IDataProps;
  userId: string;
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

/////////////////////////
// interface for Transfer
/////////////////////////
export interface IValuesTransferProps {
  sendId: string;
  value: number;
}

export interface ITransferProps {
  handleSubmit: (values: IValuesTransferProps) => void;
  onCloseModal: () => void;
}
/////////////////////////
// interface  context
/////////////////////////
export interface IGetIdProvider {
  children: ReactNode
}