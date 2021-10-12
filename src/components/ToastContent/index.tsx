import React from "react";

// utils
import { mensageErrorDefault } from "../../utils";

// styles
import { Container } from "./styles";

// interface
interface IToastProps {
	content: string
}

const ToastContent = ({ content }: IToastProps) => {
	return (
		<>
			<Container>
				<div>{content || mensageErrorDefault}</div>
			</Container>
		</>
	);
};

export default ToastContent;
