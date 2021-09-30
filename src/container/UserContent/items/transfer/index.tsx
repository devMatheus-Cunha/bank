import React, { useState } from "react";

// styles
import { Container, Content, ContentButton } from "../shared/styles";

interface ITransferProps {
  handleSubmit: (values: IValuesTransferProps) => void;
  onCloseModal: () => void;
}

interface IValuesTransferProps {
  toId: string;
  value: string;
}

const Transfer = ({ handleSubmit, onCloseModal }: ITransferProps) => {
  const [valuesTransfer, setValuesTransfer] = useState<IValuesTransferProps>({
    toId: "",
    value: "",
  });

  return (
    <Container>
      <Content>
        <input
          type="text"
          name="id"
          placeholder="Digite o pix..."
          onChange={(event) =>
            setValuesTransfer({
              ...valuesTransfer,
              toId: event.target.value,
            })
          }
        />
        <input
          type="number"
          name="value"
          placeholder="Valor..."
          onChange={(event) =>
            setValuesTransfer({
              ...valuesTransfer,
              value: event.target.value,
            })
          }
        />
        <ContentButton>
          <button onClick={() => onCloseModal()}>Cancelar</button>
          <button onClick={() => handleSubmit(valuesTransfer)}>Transferir</button>
        </ContentButton>
      </Content>
    </Container>
  );
};

export default Transfer;
