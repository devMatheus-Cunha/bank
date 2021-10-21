import React, { useState } from "react";

// interface
import { IDepositProps } from "../../../../interface";

// styles
import { Container, ContentInput, ContentButton } from "../shared/styles";

const Deposit = ({ onCloseModal, handleSubmit }: IDepositProps) => {
	const [valueDeposit, setValueDeposit] = useState<number>(0);

	return (
		<Container>
			<ContentInput>
				<p>Valor a depositar:</p>
				<input
					type="number"
					name="value"
					placeholder="ex: R$10,00"
					onChange={(event) => setValueDeposit(parseFloat(event.target.value))}
				/>
			</ContentInput>
			<ContentButton>
				<button type="button" onClick={() => onCloseModal()}>Cancelar</button>
				<button type="submit" onClick={() => handleSubmit(valueDeposit)}>Depositar</button>
			</ContentButton>
		</Container>
	);
};

export default Deposit;
