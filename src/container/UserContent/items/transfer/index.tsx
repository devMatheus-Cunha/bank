import React, { useState } from "react";

// interface
import { ITransferProps, IValuesTransferProps } from "../../../../interface";

// styles
import { Container, Content, ContentButton } from "../shared/styles";

const Transfer = ({ handleSubmit, onCloseModal }: ITransferProps) => {
	const [valuesTransfer, setValuesTransfer] = useState<IValuesTransferProps>({
		cpf_cnpj: "",
		value: 0,
	});

	return (
		<Container>
			<Content>
				<input
					type="text"
					name="id"
					placeholder="Digite o pix..."
					onChange={(event) =>
						setValuesTransfer({
							...valuesTransfer,
							cpf_cnpj: event.target.value,
						})}
				/>
				<input
					type="number"
					name="value"
					placeholder="Valor..."
					onChange={(event) =>
						setValuesTransfer({
							...valuesTransfer,
							value: parseFloat(event.target.value),
						})}
				/>
				<ContentButton>
					<button type="button" onClick={() => onCloseModal()}>
						Cancelar
					</button>
					<button type="button" onClick={() => handleSubmit(valuesTransfer)}>
						Transferir
					</button>
				</ContentButton>
			</Content>
		</Container>
	);
};

export default Transfer;
