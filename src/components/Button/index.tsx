import React, { ReactNode } from "react";

import { Container } from "./styles";

interface IButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const Button = ({ onClick, children }: IButtonProps) => {
	return (
		<Container>
			<button type="button" onClick={onClick}>
				{children}
			</button>
		</Container>
	);
};

export default Button;
