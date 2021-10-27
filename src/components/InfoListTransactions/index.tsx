import React, { useState } from "react";
import Modal from "react-modal";

// icons
import { BiDetail } from "react-icons/bi";

// items
import ContainerModalDetails from "./items";

// interfaces
import { TransactionsDatasProps } from "../../interface";

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
	const [isModal, setisModal] = useState(false);

	// handle open modal
	const handleOpenModaDetails = async () => {
		setisModal(true);
	};

	// handle close modal
	const handleCloseModalDetails = () => {
		setisModal(false);
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
									{new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(data.value as unknown as number)}
								</Wallet>
							</ContentFirst>
							<ContentSecond>
								<DateTransaction>
									{new Intl.DateTimeFormat("pt-BR", {
										day: "numeric",
										month: "numeric",
									}).format(new Date(data.date))}
								</DateTransaction>
								<Details>
									<button type="button" onClick={() => handleOpenModaDetails()}>
										<BiDetail />
									</button>
									<Modal
										isOpen={isModal}
										onRequestClose={handleCloseModalDetails}
										overlayClassName="react-modal-overlay"
										className="react-modal-content"
									>
										<ContainerModalDetails
											onCloseModal={handleCloseModalDetails}
											loading={loading}
											data={data}
										/>
									</Modal>
								</Details>
							</ContentSecond>
						</Container>
					</>
				))
			) : (
				<LoaderComponent />
			)}
		</>
	);
};

export default InfoListTransactionsAndDeposit;
