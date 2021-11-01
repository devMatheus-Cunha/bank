import React from "react";

// components
import FormComponent from "../../../../components/Form";
import InputComponent from "../../../../components/InputComponent";

// validation
import validation from "./validation";

// interface
import { ITransferProps, IValuesTransferProps } from "../../../../interface";

// styles
import { Container, ContentButton, ContentInput } from "../shared/styles";

const Transfer = ({ handleSubmit, onCloseModal }: ITransferProps) => {
	return (
		<Container>
			<FormComponent
				initialValues={{
					cpf_cnpj: "",
					value: "",
				}}
				onSubmit={(values: IValuesTransferProps) => handleSubmit(values)}
				validation={validation}
			>
				<ContentInput>
					<InputComponent
						label="CPF ou CNPJ:"
						type="text"
						name="cpf_cnpj"
						placeholder="ex: 980.897.470-86"
					/>
					<InputComponent
						name="value"
						placeholder="R$1,234,567"
						label="Valor a transferir:"
						type="number"
					/>
				</ContentInput>
				<ContentButton>
					<button type="button" onClick={() => onCloseModal()}>
						Cancelar
					</button>
					<button type="submit">
						Transferir
					</button>
				</ContentButton>
			</FormComponent>
		</Container>
	);
};

export default Transfer;
