import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// icons
import { FcMoneyTransfer } from "react-icons/fc";
import { FiSend } from "react-icons/fi";

// styles
import { Container, ContentButton } from "./styles";

const ActionsBox = () => {
  // state modal
  const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] =
    useState(false);
  const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] =
    useState(false);

  const api = axios.create({
    baseURL: "http://7aa1-2804-14c-5b80-80b4-f050-4dc1-95a5-8c5e.ngrok.io",
  });

  // handle actions modal
  const handleTransferWallet = useCallback(() => {
    setIsTransferWalletModalOpen(false);
  }, []);

  const handleDepositWallet = () => {
    const formatedData = {
      value: 500,
    };
    api
      .post("/picpay/deposit/save/614e2c38f49bb04a582ad344", formatedData)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    setIsDepositWalletModalOpen(false);
  };

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
    <Container>
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
          handleSubmit={handleDepositWallet}
          onCloseModal={handleOnCloseModal}
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
    </Container>
  );
};

export default ActionsBox;
