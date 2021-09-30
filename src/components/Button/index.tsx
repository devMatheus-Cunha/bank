import React from 'react';

import { Container, ContentButton } from './styles';

interface IButtonProps {
    name: string;
    onClick: () => void;
}
const Button = (props: IButtonProps) => {
  return (
      <Container>
          <ContentButton type="submit" onClick={props.onClick} >
              {props.name} 
          </ContentButton>
      </Container>
  )
}

export default Button;