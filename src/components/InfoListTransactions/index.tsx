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
	const handleOpenModaDetails = () => {
		setisModal(true);
	};

	// handle close modal
	const handleCloseModalDetails = () => {
		setisModal(false);
	};

	return (
		<>
			{
				loading && datas && datas.length > 0 ? (
					datas?.map((data: TransactionsDatasProps) => (
						<>
							<Container>
								<ContentFirst>
									<Title>
										{data.type === "transaction"
											? "	Transferencia enviada"
											: "Deposito feito"}
									</Title>
									{
										data.type !== "deposit" ? (
											<Destiny>
												Para:
												<span>
													{" "}
													{data.to_who}
												</span>
											</Destiny>
										) : <p style={{ marginTop: "10px" }} />
									}
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
											// handleSubmit={() => console.log("")}
												onCloseModal={handleCloseModalDetails}
											/>
										</Modal>
									</Details>
								</ContentSecond>
							</Container>
						</>
					))
				) : (
					<LoaderComponent />
				)
			}
		</>
	)
};

export default InfoListTransactionsAndDeposit;
