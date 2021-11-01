import React, { ReactNode } from "react";

// formikk
import { Form, Formik } from "formik";

// interface
interface IFormComponent {
  initialValues: Record<string, string>;
  onSubmit: (values: any) => void;
  children: ReactNode;
  validation?: any;
}
const FormComponent = ({
	initialValues,
	onSubmit,
	children,
	validation,
}: IFormComponent) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validation}
		>
			<Form>{children}</Form>
		</Formik>
	);
};

export default FormComponent;
