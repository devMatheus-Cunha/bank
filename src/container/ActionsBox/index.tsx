import React, { useState, useCallback } from "react";
import Modal from "react-modal";

// content modal
import Deposit from "./items/deposit";
import Transfer from "./items/transfer";

// styles
import { Container, Button } from "./styles";

const ActionsBox = () => {
  // state modal
  const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] =
    useState(false);
  const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] =
    useState(false);

  // handle actions modal
  const handleTransferWallet = useCallback(() => {
    console.log("Transefeir");
    setIsTransferWalletModalOpen(false);
  }, []);

  const handleDepositWallet = useCallback(() => {
    console.log("Depositar");
    setIsDepositWalletModalOpen(false);
  }, []);
  
  // handle open modal
  const handleOpenModaTransfer = () => {
    setIsTransferWalletModalOpen(true);
  }

  const handleOpenModalDeposit = () => {
    setIsDepositWalletModalOpen(true);
  }
  // handle close modal
  const handleOnCloseModal = () => {
    setIsTransferWalletModalOpen(false);
    setIsDepositWalletModalOpen(false);
  }

  return (
    <Container>
      <Modal
        isOpen={isTransferWalletModalOpen}
        onRequestClose={handleOnCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Transfer handleSubmit={handleTransferWallet} onCloseModal={handleOnCloseModal}/>
      </Modal>
      <Modal
        isOpen={isDepositWalletModalOpen}
        onRequestClose={handleOnCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Deposit handleSubmit={handleDepositWallet} onCloseModal={handleOnCloseModal}/>
      </Modal>
      <Button type="button" onClick={() => handleOpenModaTransfer()}>
        Transferir
      </Button>
      <Button type="button" onClick={() => handleOpenModalDeposit()}>
        Depositar
      </Button>
    </Container>
  );
};

export default ActionsBox;
