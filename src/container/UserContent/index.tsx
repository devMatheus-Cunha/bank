import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-toastify";

// contexts
import { BiTransfer } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";

// models
import { ModelPost } from "../../models/modelPost";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// components
import ToastContent from "../../components/ToastContent";
import InfoUserContent from "../../components/InfoUserContent";

// hooks
import useDataUser from "../../hooks/useDataUser";

// interface
import { IValuesTransferProps } from "../../interface";

// styles
import { ContainerActionsButtons, ContentButton } from "./styles";
import { Button } from "../../components/Header/styles";

const UserContent = () => {
	// hooks
	const { id } = useParams<{ id: string }>();
	const { userData } = useDataUser(id);

	// state modal
	const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] = useState(false);
	const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] = useState(false);

	// handle open modal
	const handleOpenModaTransfer = () => {
		setIsTransferWalletModalOpen(true);
	};

	const handleOpenModalDeposit = () => {
		setIsDepositWalletModalOpen(true);
	};
	// handle close modal
	const handleOnCloseModal = () => {
		setIsTransferWalletModalOpen(false);
		setIsDepositWalletModalOpen(false);
	};

	// handle actions modal
	const handleDepositWallet = useCallback(
		(data: number) => {
			const formatedData = {
				value: data,
			};
			const response = ModelPost({
				route: `/picpay/deposit/save/${id}`,
				body: formatedData,
			});

			response.then((response) => {
				if (response) {
					handleOnCloseModal();
					toast.success(<ToastContent content="Deposito feito" />);
				} else {
					toast.error(<ToastContent content="Erro ao fazer o Deposito" />);
				}
			});
		},
		[id],
	);

	const handleTransferWallet = useCallback(
		(data: IValuesTransferProps) => {
			const formatedData = {
				sendId: data.cpf_cnpj,
				value: data.value,
			};

			const response = ModelPost({
				route: `/picpay/transactions/${id}`,
				body: formatedData,
			});

			response.then((response) => {
				if (response) {
					handleOnCloseModal();
					toast.success(<ToastContent content="Transação feita" />);
				} else {
					toast.error(<ToastContent content="Erro ao fazer a Transação!" />);
				}
			});
		},
		[id],
	);
	return (
		<>
			<InfoUserContent
				name={userData?.complete_name}
				wallet={userData?.wallet}
			/>
			<ContainerActionsButtons>
				<Modal
					isOpen={isTransferWalletModalOpen}
					onRequestClose={handleOnCloseModal}
					overlayClassName="react-modal-overlay"
					className="react-modal-content"
				>
					<Transfer
						handleSubmit={handleTransferWallet}
						onCloseModal={handleOnCloseModal}
					/>
				</Modal>
				<Modal
					isOpen={isDepositWalletModalOpen}
					onRequestClose={handleOnCloseModal}
					overlayClassName="react-modal-overlay"
					className="react-modal-content"
				>
					<Deposit
						onCloseModal={handleOnCloseModal}
						handleSubmit={handleDepositWallet}
					/>
				</Modal>
				<ContentButton>
					<Button type="button" onClick={() => handleOpenModaTransfer()}>
						<BiTransfer />
					</Button>
					<p>Transferir</p>
				</ContentButton>
				<ContentButton>
					<Button type="button" onClick={() => handleOpenModalDeposit()}>
						<IoWalletOutline />
					</Button>
					<p>Depositar</p>
				</ContentButton>
			</ContainerActionsButtons>
		</>
	);
};

export default UserContent;
