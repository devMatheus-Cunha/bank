import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import InfoUserContent from "../../components/InfoUserContent";

// styles
import { Container } from "./styles";

const UserContent: React.FC = () => {
  const [state, setState] = useState<any>([]);
  const api = axios.create({
    baseURL: "http://7aa1-2804-14c-5b80-80b4-f050-4dc1-95a5-8c5e.ngrok.io",
  });

  useEffect(() => {
    api
      .get("/picpay/admin/user/614e2c38f49bb04a582ad344")
      .then((response) => setState(response.data)) 
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
  return (
    <Container>
      <InfoUserContent name={state?.complete_name} wallet={state?.wallet} />
    </Container>
  );
};

export default UserContent;
