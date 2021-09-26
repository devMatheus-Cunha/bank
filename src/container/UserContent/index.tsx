import React, { useCallback } from "react";

// components
import InfoUserContent from "../../components/InfoUserContent";
import ActionsBox from "../../components/ActionsBox";

// styles
import { Container } from "./styles";

const UserContent: React.FC = () => {
  // function handle
  const handleTranferWallet = useCallback(() => {
    console.log("Transefeir");
  }, []);

  const handleDepositWallet = useCallback(() => {
    console.log("Depositar");
  }, []);

  return (
    <Container>
      <InfoUserContent />
      <ActionsBox
        handleTranferWallet={handleTranferWallet}
        handleDepositWallet={handleDepositWallet}
      />
    </Container>
  );
};

export default UserContent;
