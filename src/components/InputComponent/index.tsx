import React from "react";

// formki
import { ErrorMessage, Field } from "formik";

import { ContentInput } from "./styles";

// interface
interface IInputComponentProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
  isError?: any;
}

const InputComponent = ({
	name,
	placeholder,
	type,
	label,
	isError = false,
}: IInputComponentProps) => {
	return (
		<ContentInput>
			<label htmlFor={name}>{label}</label>
			<Field name={name} placeholder={placeholder} type={type} />
			{isError ? (
				<>
					<span>
						<ErrorMessage
							name={name}
						/>
					</span>
				</>
			) : (
				""
			)}
		</ContentInput>
	);
};

export default InputComponent;
