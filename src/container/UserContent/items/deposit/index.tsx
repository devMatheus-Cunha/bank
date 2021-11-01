import React from "react";

// formik
import { Formik, Form } from "formik";

// components
import InputComponent from "../../../../components/InputComponent";

// interface
import { IDepositProps } from "../../../../interface";

// validation
import validation from "./validation";

// styles
import { Container, ContentInput, ContentButton } from "../shared/styles";

const Deposit = ({ onCloseModal, handleSubmit }: IDepositProps) => {
	return (
		<Container>
			<Formik
				initialValues={{
					value: 0,
				}}
				onSubmit={(values: any) => handleSubmit(values)}
				validationSchema={validation}
			>
				{({ isValid }) => (
					<Form>
						<ContentInput>
							<InputComponent
								name="value"
								placeholder="R$1,234,567"
								label="Valor a transferir:"
								type="number"
								required
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
						<ContentButton>
							<button type="button" onClick={() => onCloseModal()}>Cancelar</button>
							<button type="submit">Depositar</button>
						</ContentButton>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default Deposit;
