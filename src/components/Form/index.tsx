import React, { ReactNode } from "react";

// formikk
import { Form, Formik } from "formik";

// interface
interface IFormComponent {
  initialValues: Record<string, string>;
  onSubmit: (values: any) => void;
  children: ReactNode;
}
const FormComponent = ({ initialValues, onSubmit, children }: IFormComponent) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<Form>{children}</Form>
		</Formik>
	);
};

export default FormComponent;
