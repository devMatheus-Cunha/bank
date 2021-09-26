import React from "react";

// components
import InfoUserContent from "../../components/InfoUserContent";
import ActionsBox from "../../components/ActionsBox";

// styles
import { Container } from "./styles";

const UserContent: React.FC = () => {

  return (
    <Container>
      <InfoUserContent />
      <ActionsBox />
    </Container>
  );
};

export default UserContent;
