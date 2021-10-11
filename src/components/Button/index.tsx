import React, { ReactNode } from "react";

import { Container, ContentButton } from "./styles";

interface IButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const Button = ({ onClick, children }: IButtonProps) => {
	return (
		<Container>
			<ContentButton>
				<button type="button" onClick={onClick}>
					{children}
				</button>
			</ContentButton>
		</Container>
	);
}; 

export default Button;
