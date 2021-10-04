import React, { useState } from "react";

// interface
import { IDepositProps } from "../../../../interface";

// styles
import { Container, Content, ContentButton } from "../shared/styles";

const Deposit = ({ onCloseModal, handleSubmit }: IDepositProps) => {
	const [valueDeposit, setValueDeposit] = useState<number>(0);

	return (
		<Container>
			<Content>
				<input
					type="number"
					name="value"
					placeholder="Valor..."
					onChange={(event) => setValueDeposit(parseFloat(event.target.value))}
				/>
				<ContentButton>
					<button type="button" onClick={() => onCloseModal()}>Cancelar</button>
					<button type="submit" onClick={() => handleSubmit(valueDeposit)}>Depositar</button>
				</ContentButton>
			</Content>
		</Container>
	);
};

export default Deposit;
