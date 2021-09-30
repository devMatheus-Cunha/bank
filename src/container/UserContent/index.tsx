import React, { useState, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

// contexts
import { GetIdContext } from "../../contexts/getIdProvider";

// requisition
import { PostDeposit } from "../../models/requests";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// icons
import { FcMoneyTransfer } from "react-icons/fc";
import { FiSend } from "react-icons/fi";

// components
import InfoUserContent from "../../components/InfoUserContent";

// styles
import { ContainerActionsButtons, ContentButton } from "./styles";

const UserContent = () => {
  // hooks
  const { userData } = useContext(GetIdContext)

  // state modal
  const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] =
    useState(false);
  const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] =
    useState(false);

    // handle actions modal
  const handleDepositWallet = (values: any) => {
    const formatedData = {
      value: parseFloat(values),
    };
    PostDeposit(userData.id, formatedData);
    handleOnCloseModal();
  };

  const handleTransferWallet = useCallback(() => {
    setIsTransferWalletModalOpen(false);
  }, []);

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
        name={userData.data?.complete_name}
        wallet={userData.data?.wallet}
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
            handleDepositWallet={handleDepositWallet}
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
