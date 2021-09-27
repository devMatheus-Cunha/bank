import React from "react";

// styles
import { Container, Content, ContentButton } from "../shared/styles";

interface ITransferProps {
  handleSubmit: () => void;
  onCloseModal: () => void;
}

const Deposit = ({ handleSubmit, onCloseModal }: ITransferProps) => {
  return (
    <Container>
      <Content>
        <input type="number" placeholder="Valor..." />
        <ContentButton>
          <button onClick={() => onCloseModal()}>Cancelar</button>
          <button onClick={() => handleSubmit()}>Depositar</button>
        </ContentButton>
      </Content>
    </Container>
  );
};

export default Deposit;
