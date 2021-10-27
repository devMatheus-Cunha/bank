import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

// interface
import { IDepositProps } from "../../../../interface";

// styles
import { Container, ContentInput, ContentButton } from "../shared/styles";

const Deposit = ({ onCloseModal, handleSubmit }: IDepositProps) => {
	const [valueDeposit, setValueDeposit] = useState<any>();

	return (
		<Container>
			<ContentInput>
				<p>Valor a depositar:</p>
				<CurrencyInput
					id="validation-example-2-field"
					placeholder="R$1,234,567"
					allowDecimals={false}
					className="form-control"
					onValueChange={(value) => setValueDeposit(value)}
					prefix="R$"
					step={10}
					name="value"
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
