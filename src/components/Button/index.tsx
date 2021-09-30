import React from "react";

import { Container, ContentButton } from "./styles";

interface IButtonProps {
  name: string;
  onClick: () => void;
}
const Button = ({ name, onClick }: IButtonProps) => {
  return (
    <Container>
      <ContentButton type="submit" onClick={onClick}>
        {name}
      </ContentButton>
    </Container>
  );
};

export default Button;
