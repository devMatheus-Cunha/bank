import React from "react";

import { Container, Button } from "./styles";

// type
type IActionsBoxProps = {
  handleTranferWallet: () => void;
  handleDepositWallet: () => void;
};

const ActionsBox = ({ handleTranferWallet, handleDepositWallet }: IActionsBoxProps) => {
  return (
    <Container>
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
