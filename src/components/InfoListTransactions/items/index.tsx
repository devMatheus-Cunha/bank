import React from "react";

// icons
import { VscClose } from "react-icons/vsc";

// import { Container } from './styles';

const ContainerModalDetails = ({ onCloseModal }: any) => {
	return (
		<div>
			<button
				type="button"
				onClick={onCloseModal}
				className="react-modal-close"
			>
				<VscClose />
			</button>
			<h4>Detalhes Transação</h4>
		</div>
	);
};

export default ContainerModalDetails;
