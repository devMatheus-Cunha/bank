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
import { mensageErrorDefault } from "../../utils";

// components
import ToastContent from "../../components/ToastContent";
import InfoUserContent from "../../components/InfoUserContent";
import ButtonComponent from "../../components/Button";
import InfoListTransactions from "../../components/InfoListTransactions";

// interface
import {
	IDataProps,
	IValuesTransferProps,
	TransactionsDatasProps,
} from "../../interface";

// styles
import {
	Contaienr,
	ContainerActionsButtons,
	ContentButton,
	Title,
	ContainerTransactions,
} from "./styles";

const UserContent = () => {
	// states
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState<IDataProps>();
	const [trasactionsDatas, setTrasactionsDatas] = useState<
    TransactionsDatasProps[]
  >([]);

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
	const responseRequestUserData = useCallback(async () => {
		const requestDatas = await Model({
			route: `/picpay/admin/user/${id}`,
			request: "GET",
		});

		const getSendAndReceive = (
			await Promise.all([
				Model({
					route: `/picpay/transactions/log/send/${requestDatas?.data?.cpf_cnpj}`,
					request: "GET",
					responseType: "stream",
				}),

				Model({
					route: `/picpay/transactions/log/receive/${requestDatas?.data?.cpf_cnpj}`,
					request: "GET",
					responseType: "stream",
				}),
			])
		).map(({ data }) => data);

		if (requestDatas?.data && getSendAndReceive) {
			const formatedResponse = getSendAndReceive.reduce((current, acc) => [
				...current,
				...acc.map((data: TransactionsDatasProps) => {
					return {
						...data,
						type: "receivedTransaction",
					};
				}),
			])

			setUserData(requestDatas?.data);
			setTrasactionsDatas(formatedResponse);
		} else {
			toast.error(<ToastContent content={mensageErrorDefault} />);
		}
		setLoading(true);
	}, [id]);

	// handle actions modal
	const handleDepositWallet = useCallback(
		async (data: string) => {
			const formated = {
				value: parseFloat(data),
			};

			const request = await Model({
				request: "POST",
				route: `/picpay/deposit/save/${id}`,
				body: formated,
			});

			if (request?.data) {
				toast.success(<ToastContent content="Deposito feito" />);
				responseRequestUserData();
				handleOnCloseModal();
				setLoading(false);
			} else {
				toast.error(<ToastContent content={request?.response?.data} />);
			}
		},
		[id, responseRequestUserData],
	);

	const handleTransferWallet = useCallback(
		async (data: IValuesTransferProps) => {
			const formated = {
				cpf_cnpj: data.cpf_cnpj,
				value: parseFloat(data.value),
			};

			const request = await Model({
				request: "POST",
				route: `/picpay/transactions/${id}`,
				body: formated,
			});

			// const handleGetPDF = async () => {
			// 	const request = await Model({
			// 		route: "/picpay/admin/user/report",
			// 		request: "GET",
			// 		pdf: "arraybuffer",
			// 	});
			// 	generetePDF(request.data);
			// };

			if (request?.data) {
				toast.success(<ToastContent content="Transação feita" />);
				responseRequestUserData();
				handleOnCloseModal();
				setLoading(false);
			} else {
				toast.error(<ToastContent content={request?.response?.data} />);
			}
		},
		[id, responseRequestUserData],
	);

	useEffect(() => {
		responseRequestUserData();
	}, [responseRequestUserData]);

	/// //////////////////////
	// render
	/// //////////////////////
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
			<Title>
				{trasactionsDatas && trasactionsDatas.length > 0
					? "Ultimas Transações:"
					: "Nenhuma transação efetuada"}
			</Title>
			<ContainerTransactions>
				<InfoListTransactions loading={loading} datas={trasactionsDatas} />
			</ContainerTransactions>
		</Contaienr>
	);
};

export default UserContent;
