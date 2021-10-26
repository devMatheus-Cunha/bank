import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

// models
import { Model } from "../../../models";

// utils
import { mensageErrorDefault } from "../../../utils";

// compoenents
import LoaderComponent from "../../Loading";
import ToastContent from "../../ToastContent";

// styles
import { Container, ContentButton } from "./styles";

const ContainerModalDetails = ({ onCloseModal, data }: any) => {
	const [idDataTransaction, setIdDataTransaction] = useState<any>();
	const [loading, setLoading] = useState(false);

	const getTransactionsById = useCallback(async () => {
		const requestDatas = await Model({
			route: `/picpay/transactions/view/${data.id}`,
			request: "GET",
		});
		if (requestDatas?.data) {
			setIdDataTransaction(requestDatas.data);
			setLoading(true)
		} else {
			toast.error(<ToastContent content={mensageErrorDefault} />);
		}
	}, [data.id]);

	useEffect(() => {
		getTransactionsById()
	}, [getTransactionsById])

	return (
		<Container>
			{
				loading ? (
					<>
						<span>{idDataTransaction?.type}</span>
						<span>{idDataTransaction?.value}</span>
						<span>{idDataTransaction?.date}</span>
						<span>{idDataTransaction?.to_who}</span>
						<ContentButton>
							<button type="button" onClick={() => onCloseModal()}>Fechar</button>
						</ContentButton>

					</>
				) : (
					<LoaderComponent />
				)
			}
		</Container>
	);
};

export default ContainerModalDetails;
