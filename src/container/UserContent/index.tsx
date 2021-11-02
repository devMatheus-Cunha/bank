import React, {
	useState, useCallback, useEffect, useContext,
} from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

// toast
import { toast } from "react-toastify";

// icons
import { BiTransfer } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";

// models
import { Model } from "../../models/request";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// utils
import { dropdownOptions } from "./utils";

// components
import ButtonComponent from "../../components/Button";
import ToastContent from "../../components/ToastContent";
import DropDownOptions from "../../components/SelectInput";
import InfoUserContent from "../../components/InfoUserContent";
import InfoListTransactions from "../../components/InfoListTransactions";

// interface
import { IValuesTransferProps } from "../../interface";

// styles
import {
	Contaienr,
	ContainerActionsButtons,
	ContentButton,
	Title,
	ContainerTransactions,
	ContainerFilter,
} from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetDataUser } from "../../hooks/useGetDataUser";

const UserContent = () => {
	// state modal
	const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] = useState(false);
	const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] = useState(false);

	// hooks
	const { id } = useParams<{ id: string }>();
	const { user } = useContext(AuthContext);
	const {
		responseRequestUserData,
		loadingDataInfoUser,
		loadingDataTransactios,
		setLoadingDataTransactios,
		setLoadingDataInfoUser,
		typeFilterTransactions,
		setTypeFilterTransactions,
		trasactionsDatas,
	} = useGetDataUser(id);

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
		async (data: string) => {
			const request = await Model({
				request: "POST",
				route: `/picpay/deposit/save/${id}`,
				body: data,
			});

			if (request?.data) {
				toast.success(<ToastContent content="Deposito feito" />);
				responseRequestUserData();
				handleOnCloseModal();
				setLoadingDataInfoUser(false);
				setLoadingDataTransactios(false);
			} else {
				toast.error(<ToastContent content={request?.response?.data} />);
			}
		},
		[id, responseRequestUserData, setLoadingDataInfoUser, setLoadingDataTransactios],
	);

	const handleTransferWallet = useCallback(
		async (data: IValuesTransferProps) => {
			const formated = {
				cpf_cnpj: String(data.cpf_cnpj),
				value: parseFloat(data.value),
			};

			const request = await Model({
				request: "POST",
				route: `/picpay/transactions/${id}`,
				body: formated,
			});

			if (request?.data) {
				toast.success(<ToastContent content="Transação feita" />);
				responseRequestUserData();
				handleOnCloseModal();
				setLoadingDataInfoUser(false);
				setLoadingDataTransactios(false);
			} else {
				toast.error(<ToastContent content={request?.response?.data} />);
			}
		},
		[id, responseRequestUserData, setLoadingDataInfoUser, setLoadingDataTransactios],
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
				name={user?.complete_name}
				wallet={user?.wallet}
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
						setTypeFilterTransactions(event.target.value);
						setLoadingDataTransactios(false);
					}}
				/>
			</ContainerFilter>
			<ContainerTransactions>
				<InfoListTransactions
					loading={loadingDataTransactios}
					datas={trasactionsDatas}
				/>
			</ContainerTransactions>
		</Contaienr>
	);
};

export default UserContent;
