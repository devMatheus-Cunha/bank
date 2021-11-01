/* eslint-disable react/jsx-no-bind */
/* eslint-disable radix */
import React from "react";

// components
import { Form, Formik } from "formik";
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
			<Formik
				initialValues={{
					cpf_cnpj: "",
					value: "",
				}}
				onSubmit={(values: IValuesTransferProps) => handleSubmit(values)}
				validationSchema={validation}
			>
				{({ isValid }) => (
					<Form>
						<ContentInput>
							<InputComponent
								label="CPF ou CNPJ:"
								type="number"
								name="cpf_cnpj"
								placeholder="ex: 980.897.470-86"
								isError
							/>
							<InputComponent
								name="value"
								placeholder="R$1,234,567"
								label="Valor a transferir:"
								type="number"
								isError
							/>
						</ContentInput>
						<ContentButton>
							<button type="button" onClick={() => onCloseModal()}>
								Cancelar
							</button>
							<button type="submit" disabled={!isValid}>
								Transferir
							</button>
						</ContentButton>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default Transfer;
