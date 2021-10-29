import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";

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
import { dropdownOptions } from "./utils";

// components
import ButtonComponent from "../../components/Button";
import ToastContent from "../../components/ToastContent";
import DropDownOptions from "../../components/SelectInput";
import InfoUserContent from "../../components/InfoUserContent";
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
	ContainerFilter,
} from "./styles";

const UserContent = () => {
	// states
	const [loadingDataInfoUser, setLoadingDataInfoUser] = useState(false);
	const [loadingDataTransactios, setLoadingDataTransactios] = useState(false);
	const [userData, setUserData] = useState<IDataProps>();
	const [typeFilterTransactions, setTypeFilterTransactions] = useState("all");
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

		if (requestDatas?.data) {
			setUserData(requestDatas?.data);
			setLoadingDataInfoUser(true);

			const getTransactionsSendAndReceive = (
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

			if (getTransactionsSendAndReceive) {
				const formatedResponse = getTransactionsSendAndReceive.reduce((current, acc) => [
					...current,
					...acc.map((data: TransactionsDatasProps) => {
						return {
							...data,
							type: "receivedTransaction",
						};
					}),
				]);

				const filter = formatedResponse.filter((item: TransactionsDatasProps) => {
					return typeFilterTransactions === "all"
						? item
						: typeFilterTransactions === item.type;
				});
				setTrasactionsDatas(filter);
				setLoadingDataTransactios(true);
			}
		} else {
			toast.error(<ToastContent content={mensageErrorDefault} />);
		}
	}, [id, typeFilterTransactions]);

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
				setLoadingDataInfoUser(false);
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
				setLoadingDataInfoUser(false);
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
				loading={loadingDataInfoUser}
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
			<ContainerFilter>
				<DropDownOptions
					options={dropdownOptions}
					defaultValue={typeFilterTransactions}
					onChange={(event) => {
						setTypeFilterTransactions(event.target.value)
						setLoadingDataTransactios(false)
					}}
				/>
			</ContainerFilter>
			<ContainerTransactions>
				<InfoListTransactions loading={loadingDataTransactios} datas={trasactionsDatas} />
			</ContainerTransactions>
		</Contaienr>
	);
};

export default UserContent;
