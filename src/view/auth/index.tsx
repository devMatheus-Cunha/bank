import React from "react";
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

const Auth: React.FC = () => {
  const history = useHistory();
  const id = "615606414b0a0e1c84bf14a9";
  return (
    <button type="button" onClick={() => history.push(`home/${id}`)}>
      Logar
    </button>
  );
};

export default Auth;