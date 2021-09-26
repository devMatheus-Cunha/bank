import React, { useState } from "react";
import Modal from "react-modal";
import { Container, Button } from "./styles";


const ActionsBox = () => {
    // states
    const [isTransferWalletModalOpen, setIsTransferWalletModalOpen] = useState(false);
    const [isDepositWalletModalOpen, setIsDepositWalletModalOpen] = useState(false);
    
    // handle actions modal
    const handleTranferWallet = () => {
      setIsTransferWalletModalOpen(true)
      console.log("Transefeir");
    };

    const handleDepositWallet = () => {
      setIsDepositWalletModalOpen(true)
      console.log("Depositar");
    };

    // handle close modal
    const handleCloseModalTranferWallet = () => {
      setIsTransferWalletModalOpen(false)
    };
    
    const handleCloseModalDepostiWallet = () => {
      setIsDepositWalletModalOpen(false)
    };
  
  return (
    <Container>
      <Modal
        isOpen={isTransferWalletModalOpen}
        onRequestClose={handleCloseModalTranferWallet}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        Transefeir
      </Modal>
      <Modal
        isOpen={isDepositWalletModalOpen}
        onRequestClose={handleCloseModalDepostiWallet}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        Depositar
      </Modal>
      <Button type="button" onClick={() => handleTranferWallet()}>
        Transferir
      </Button>
      <Button type="button" onClick={() => handleDepositWallet()}>
        Depositar
      </Button>
    </Container>
  );
};

export default ActionsBox;
