import React from "react";

// styles
import { Container, Content, ContentButton } from "../shared/styles";

interface ITransferProps {
  handleSubmit: () => void;
  onCloseModal: () => void;
}

const Transfer = ({ handleSubmit, onCloseModal }: ITransferProps) => {
  return (
    <Container>
      <Content>
        <input type="text" placeholder="Digite o pix..." />
        <input type="number" placeholder="Valor..." />
        <ContentButton>
          <button onClick={() => onCloseModal()}>Cancelar</button>
          <button onClick={() => handleSubmit()}>Transferir</button>
        </ContentButton>
      </Content>
    </Container>
  );
};

export default Transfer;
