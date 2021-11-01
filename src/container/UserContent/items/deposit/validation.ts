import * as Yup from "yup";

export default Yup.object().shape({
	value: Yup
		.number()
		.min(1)
		.required("Preencha um valor."),
});
