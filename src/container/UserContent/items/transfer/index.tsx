import React, { useState } from "react";

// interface
import { ITransferProps, IValuesTransferProps } from "../../../../interface";

// styles
import { Container, ContentButton, ContentInput } from "../shared/styles";

const Transfer = ({ handleSubmit, onCloseModal }: ITransferProps) => {
	const [valuesTransfer, setValuesTransfer] = useState<IValuesTransferProps>({
		cpf_cnpj: "",
		value: 0,
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
				<input
					type="number"
					name="value"
					placeholder="ex: R$10,00"
					onChange={(event) =>
						setValuesTransfer({
							...valuesTransfer,
							value: parseFloat(event.target.value),
						})}
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
