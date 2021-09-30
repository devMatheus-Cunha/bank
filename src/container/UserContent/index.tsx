import React, { useState, useCallback, useContext } from "react";
import Modal from "react-modal";

// contexts
import { GetIdContext } from "../../contexts/getIdProvider";

// requisition
import { PostDeposit, PostTransfer } from "../../models/requests";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// icons
import { FcMoneyTransfer } from "react-icons/fc";
import { FiSend } from "react-icons/fi";

// components
import InfoUserContent from "../../components/InfoUserContent";

// interface
import { IUserDataProps, IValuesTransferProps } from "../../interface";

// styles
import { ContainerActionsButtons, ContentButton } from "./styles";

const UserContent = () => {
  // hooks
  const { userData, userId } = useContext<IUserDataProps>(GetIdContext);

  // state modal
  const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] =
    useState(false);
  const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] =
    useState(false);

  // handle actions modal
  const handleDepositWallet = useCallback((data: number) => {
    PostDeposit(userId, data);
    handleOnCloseModal();
  }, [userId]);

  const handleTransferWallet = useCallback(
    (data: IValuesTransferProps) => {
      const formatedData = {
        sendId: data.sendId,
        value: data.value,
      };
      PostTransfer(userId, formatedData);
      handleOnCloseModal();
    },
    [userId]
  );

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
