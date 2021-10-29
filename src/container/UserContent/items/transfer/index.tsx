import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

// interface
import { ITransferProps, IValuesTransferProps } from "../../../../interface";

// styles
import { Container, ContentButton, ContentInput } from "../shared/styles";

const Transfer = ({ handleSubmit, onCloseModal }: ITransferProps) => {
	const [valuesTransfer, setValuesTransfer] = useState<IValuesTransferProps>({
  	cpf_cnpj: "",
  	value: "",
	});

	return (
		<Container>
			<ContentInput>
				<p>CPF ou CNPJ:</p>
				<input
					type="text"
					name="id"
					placeholder="ex: 980.897.470-86"
					onChange={(event) =>
						setValuesTransfer({
							...valuesTransfer,
							cpf_cnpj: event.target.value,
						})}
				/>
			</ContentInput>
			<ContentInput>
				<p>Valor a transferir:</p>
				<CurrencyInput
					id="validation-example-2-field"
					name="value"
					placeholder="R$1,234,567"
					allowDecimals={false}
					className="form-control"
					onValueChange={(value) =>
						setValuesTransfer({
							...valuesTransfer,
							value,
						})}
					prefix="R$"
					step={10}
				/>
			</ContentInput>
			<ContentButton>
				<button type="button" onClick={() => onCloseModal()}>
					Cancelar
				</button>
				<button type="button" onClick={() => handleSubmit(valuesTransfer)}>
					Transferir
				</button>
			</ContentButton>
		</Container>
	);
};

export default Transfer;
