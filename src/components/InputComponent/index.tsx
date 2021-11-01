import React from "react";

// formki
import { ErrorMessage, Field } from "formik";

import { ContentInput } from "./styles";

// interface
interface IInputComponentProps {
  name: string;
  placeholder: string;
  type: string;
  label?: string;
	required?: boolean;
}

const InputComponent = ({
	name,
	placeholder,
	type,
	label,
	required,
}: IInputComponentProps) => {
	return (
		<ContentInput>
			<label htmlFor={name}>{required ? `${label} *` : `${label}`}</label>
			<Field
				name={name}
				placeholder={placeholder}
				type={type}
			/>
			{required ? (
				<>
					<span>
						<ErrorMessage name={name} />
					</span>
				</>
			) : (
				""
			)}
		</ContentInput>
	);
};

export default InputComponent;
