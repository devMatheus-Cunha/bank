import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-toastify";

// icons
import { BiTransfer } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";

// models
import { Model } from "../../models";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// utils
import {
	dataMockTransactions, generetePDF, mensageErrorDefault, pdfConfig,
} from "../../utils";

// components
import ToastContent from "../../components/ToastContent";
import InfoUserContent from "../../components/InfoUserContent";
import ButtonComponent from "../../components/Button";
import InfoListTransactions from "../../components/InfoListTransactions";

// interface
import { IDataProps, IValuesTransferProps } from "../../interface";

// styles
import {
	Contaienr, ContainerActionsButtons, ContentButton, Title,
} from "./styles";

const UserContent = () => {
	// states
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState<IDataProps>();

	// state modal
	const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] = useState(false);
	const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] = useState(false);

	// hooks
	const { id } = useParams<{ id: string }>();

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

	// request get data
	const responseRequest = useCallback(async () => {
		const request = await Model({
			route: `/picpay/admin/user/${id}`,
			request: "GET",
		});
		setTimeout(() => {
			if (request?.data) {
				setLoading(true);
				setUserData(request?.data);
			} else {
				toast.error(<ToastContent content={mensageErrorDefault} />);
				setLoading(true);
			}
		}, 750);
	}, [id]);

	// handle actions modal
	const handleDepositWallet = useCallback(
		async (data: number) => {
			const formated = {
				value: data,
			};

			const request = await Model({
				request: "POST",
				route: `/picpay/deposit/save/${id}`,
				body: formated,
			});

			if (request?.data) {
				await toast.success(<ToastContent content="Deposito feito" />);
				responseRequest();
				handleOnCloseModal();
				setLoading(false);
			} else {
				toast.error(<ToastContent content={request?.response?.data} />);
			}
		},
		[id, responseRequest],
	);

	const handleTransferWallet = useCallback(
		async (data: IValuesTransferProps) => {
			const formated = {
				cpf_cnpj: data.cpf_cnpj,
				value: data.value,
			};

			const request = await Model({
				request: "POST",
				route: `/picpay/transactions/${id}`,
				body: formated,
			});

			const handleGetPDF = async () => {
				const request = await Model({
					route: "/picpay/admin/user/report",
					request: "GET",
					pdf: pdfConfig,
				});
				generetePDF(request.data);
			};

			if (request?.data) {
				await toast.success(<ToastContent content="Transação feita" />);
				responseRequest();
				handleOnCloseModal();
				handleGetPDF()
				setLoading(false);
			} else {
				toast.error(<ToastContent content={request?.response?.data} />);
			}
		},
		[id, responseRequest],
	);

	useEffect(() => {
		responseRequest();
	}, [responseRequest]);

	return (
		<Contaienr>
			<InfoUserContent
				name={userData?.complete_name}
				wallet={userData?.wallet}
				loading={loading}
			/>
			<ContainerActionsButtons>
				<ContentButton>
					<ButtonComponent onClick={() => handleOpenModaTransfer()}>
						<BiTransfer />
						<p>Transferir</p>
					</ButtonComponent>
					<ButtonComponent onClick={() => handleOpenModalDeposit()}>
						<IoWalletOutline />
						<p>Depositar</p>
					</ButtonComponent>
				</ContentButton>
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
			</ContainerActionsButtons>
			<Title>Ultimas Transações:</Title>
			<InfoListTransactions
				loading={loading}
				datas={dataMockTransactions}
			/>
		</Contaienr>
	);
};

export default UserContent;
