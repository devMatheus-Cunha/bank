import React from "react";

// hooks
import DataUser from "../../hooks/userData";

// styles
import { Container, ContentInfo, ContentBalance } from "./styles";

const InfoUserContent: React.FC = () => {
  const {name, wallet} = DataUser()

  return (
    <Container>
      <ContentInfo>
        <h2>Olá, <strong>{name}</strong> </h2>
      </ContentInfo>
      <ContentBalance>
        <h1>Saldo</h1>
        <h2>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(wallet as unknown as number)}
        </h2>
      </ContentBalance>
    </Container>
  );
};

export default InfoUserContent;