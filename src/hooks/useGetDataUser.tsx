import React, { useCallback, useContext, useState } from "react";

// toast
import { toast } from "react-toastify";
import ToastContent from "../components/ToastContent";

// context
import { AuthContext } from "../contexts/AuthContext";

// interface
import { TransactionsDatasProps } from "../interface";

// model
import { Model } from "../models/request";

// utils
import { mensageErrorDefault } from "../utils/mockData";

/// ////////////////////////
// export
/// ////////////////////////
export const useGetDataUser = (id: any) => {
	// states loading
	const [loadingDataInfoUser, setLoadingDataInfoUser] = useState(false);
	const [loadingDataTransactios, setLoadingDataTransactios] = useState(false);

	// states transactions
	const [trasactionsDatas, setTrasactionsDatas] = useState<
    TransactionsDatasProps[]
  >([]);

	// states filter
	const [typeFilterTransactions, setTypeFilterTransactions] = useState("all");

	// context
	const { setUser } = useContext(AuthContext);

	// functions get Data
	const responseRequestUserData = useCallback(async () => {
		const requestDatas = await Model({
			route: `/picpay/admin/user/${id}`,
			request: "GET",
		});

		if (requestDatas?.data) {
			setUser(requestDatas?.data);
			setLoadingDataInfoUser(true);

			const getTransactionsSendAndReceive = (
				await Promise.all([
					Model({
						route: `/picpay/transactions/log/send/${requestDatas.data?.cpf_cnpj}`,
						request: "GET",
					}),

					Model({
						route: `/picpay/transactions/log/receive/${requestDatas.data?.cpf_cnpj}`,
						request: "GET",
					}),
				])
			).map(({ data }) => data);

			if (getTransactionsSendAndReceive) {
				const formatedResponse = getTransactionsSendAndReceive.reduce(
					(current, acc) => [
						...current,
						...acc.map((data: TransactionsDatasProps) => {
							return {
								...data,
								type: "receivedTransaction",
							};
						}),
					],
				);

				const filter = formatedResponse.filter(
					(item: TransactionsDatasProps) => {
						return typeFilterTransactions === "all"
							? item
							: typeFilterTransactions === item.type;
					},
				);
				setTrasactionsDatas(filter);
			}
		} else {
			toast.error(<ToastContent content={mensageErrorDefault} />);
		}
		setLoadingDataTransactios(true);
		setLoadingDataInfoUser(true);
	}, [id, setUser, typeFilterTransactions]);

	/// ////////////////////////
	// return
	/// ////////////////////////
	return {
		loadingDataInfoUser,
		loadingDataTransactios,
		responseRequestUserData,
		setLoadingDataTransactios,
		setLoadingDataInfoUser,
		trasactionsDatas,
		setTypeFilterTransactions,
		typeFilterTransactions,
	};
};
