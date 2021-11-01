import React, { useState } from "react";
import Modal from "react-modal";

// icons
import { BiDetail } from "react-icons/bi";

// toast
import { toast } from "react-toastify";
import ToastContent from "../ToastContent";

// models
import { Model } from "../../models";

// items
import ContainerModalDetails from "./items";

// interfaces
import { TransactionsDatasProps } from "../../interface";

// utils
import { formatDateTwoValues, formatMoney, mensageErrorDefault } from "../../utils";

// components
import LoaderComponent from "../Loading";

// styles
import {
	Container,
	DateTransaction,
	Title,
	Wallet,
	Destiny,
	Details,
	ContentSecond,
	ContentFirst,
} from "./styles";

type InfoListTransactionsAndDepositProps = {
  loading: boolean;
  datas: TransactionsDatasProps[];
};

const InfoListTransactionsAndDeposit = ({
	loading,
	datas,
}: InfoListTransactionsAndDepositProps) => {
	const [isModal, setIsModal] = useState(false);
	const [dataTransaction, setDataTransaction] = useState("");
	const [loadingModal, setLoadingModal] = useState(false);

	const handleOpenModaDetails = async (data: any) => {
		setIsModal(true);

		const requestDatas = await Model({
			route: `/picpay/transactions/view/${data.id}`,
			request: "GET",
		});

		if (requestDatas?.data) {
			setTimeout(() => {
				setDataTransaction(requestDatas.data);
				setLoadingModal(true)
			}, 500);
		} else {
			toast.error(<ToastContent content={mensageErrorDefault} />);
		}
	}

	// handle close modal
	const handleCloseModalDetails = () => {
		setIsModal(false);
		setLoadingModal(false)
	};

	function validationTitle(type: string) {
		switch (type) {
		case "transaction":
			return "Tranferencia enviada";
		case "deposit":
			return "Deposito feito";
		case "receivedTransaction":
			return "Tranferencia recebida";
		default:
			return "";
		}
	}

	return (
		<>
			{loading ? (
				datas?.map((data: TransactionsDatasProps) => (
					<>
						<Container key={data.id}>
							<ContentFirst>
								<Title>{validationTitle(data.type)}</Title>
								{data.type === "deposit" ? (
									<p style={{ marginTop: "10px" }} />
								) : (
									<Destiny>
										{data.type === "transaction" ? "Para:" : "De:"}
										<span>
											{" "}
											{data.type === "transaction" ? data.to_who : data.from_who}
										</span>
									</Destiny>
								)}
								<Wallet>
									{formatMoney(data.value)}
								</Wallet>
							</ContentFirst>
							<ContentSecond>
								<DateTransaction>
									{formatDateTwoValues(data.date)}
								</DateTransaction>
								<Details>
									<button type="button" onClick={() => handleOpenModaDetails(data)}>
										<BiDetail />
									</button>
								</Details>
							</ContentSecond>
						</Container>
					</>
				))
			) : (
				<div style={{ marginTop: "1.5rem" }}>
					<LoaderComponent />
				</div>
			)}
			<Modal
				isOpen={isModal}
				onRequestClose={handleCloseModalDetails}
				overlayClassName="react-modal-overlay"
				className="react-modal-content"
			>
				<ContainerModalDetails
					onCloseModal={handleCloseModalDetails}
					loading={loadingModal}
					data={dataTransaction}
				/>
			</Modal>
		</>
	);
};

export default InfoListTransactionsAndDeposit;
