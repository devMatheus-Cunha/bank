import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

// contexts
import { FcMoneyTransfer } from "react-icons/fc";
import { FiSend } from "react-icons/fi";

// requisition
import { PostDeposit, PostTransfer } from "../../models/requests";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

import InfoUserContent from "../../components/InfoUserContent";
import useDataUser from "../../hooks/useDataUser";

// interface
import { IValuesTransferProps } from "../../interface";

// styles
import { ContainerActionsButtons, ContentButton } from "./styles";

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
			PostDeposit(id, formatedData);
			handleOnCloseModal();
		},
		[id],
	);

	const handleTransferWallet = useCallback(
		(data: IValuesTransferProps) => {
			const formatedData = {
				sendId: data.sendId,
				value: data.value,
			};
			PostTransfer(id, formatedData);
			handleOnCloseModal();
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
					<button type="button" onClick={() => handleOpenModaTransfer()}>
						<FiSend />
					</button>

					<p>Transferir</p>
				</ContentButton>
				<ContentButton>
					<button type="button" onClick={() => handleOpenModalDeposit()}>
						<FcMoneyTransfer />
					</button>
					<p>Depositar</p>
				</ContentButton>
			</ContainerActionsButtons>
		</>
	);
};

export default UserContent;
