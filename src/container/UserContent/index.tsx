import React  from "react";

// hooks
import DataUser from "../../hooks/userData";

// components
import InfoUserContent from "../../components/InfoUserContent";

// styles
import { Container } from "./styles";

const UserContent: React.FC = () => {
  const {name, wallet} = DataUser()

  return (
    <Container>
      <InfoUserContent name={name} wallet={wallet}/>
    </Container>
  );
};

export default UserContent;
