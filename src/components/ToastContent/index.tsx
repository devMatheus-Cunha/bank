import React from "react";

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
				<div>{content}</div>
			</Container>
		</>
	);
};

export default ToastContent;
