import React from "react";

// styles
import { Container, ContentButton } from "./styles";

const ContainerModalDetails = ({ onCloseModal, data }: any) => {
	return (
		<Container>
			<p>{data.type}</p>
			<p>{data.value}</p>
			<p>{data.date}</p>
			<ContentButton>
				<button type="button" onClick={() => onCloseModal()}>Fechar</button>
			</ContentButton>
		</Container>
	);
};

export default ContainerModalDetails;
