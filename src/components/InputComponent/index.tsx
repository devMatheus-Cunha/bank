import React from "react";

// formki
import { Field } from "formik";

import { ContentInput } from "./styles";

// interface
interface IInputComponentProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

const InputComponent = ({
	name, placeholder, type, label,
}: IInputComponentProps) => {
	return (
		<ContentInput>
			<label htmlFor={name}>{label}</label>
			<Field name={name} placeholder={placeholder} type={type} />
		</ContentInput>
	);
};

export default InputComponent;
