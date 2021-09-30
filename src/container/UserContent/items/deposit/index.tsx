import React, { useState } from "react";

// styles
import { Container, Content, ContentButton } from "../shared/styles";

interface ITransferProps {
  onCloseModal: () => void;
  handleDepositWallet: any
}

const Deposit = ({ onCloseModal, handleDepositWallet }: ITransferProps) => {
  const [valueDeposit, setValueDeposit] = useState("");

  return (
    <Container>
      <Content>
          <input
            type="number"
            name="value"
            placeholder="Valor..."
            onChange={(event) => setValueDeposit(event.target.value)}
          />
        <ContentButton>
          <button type="button" onClick={() => onCloseModal()}>Cancelar</button>
          <button type="submit" onClick={() => handleDepositWallet(valueDeposit)}>Depositar</button>
        </ContentButton>
      </Content>
    </Container>
  );
};

export default Deposit;
