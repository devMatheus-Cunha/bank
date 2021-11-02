import React from "react";

// utils
import { formatDateAllValues } from "../../../utils/formated";

// compoenents
import LoaderComponent from "../../Loading";

// styles
import {
	Container, ContentButton, ContentTypeAndDate, Title, DateTransactin,
} from "./styles";

const ContainerModalDetails = ({ onCloseModal, data, loading }: any) => {
	// validate title
	function validationTitle(type: string) {
		switch (type) {
		case "transaction":
			return "Tranferencia enviada";
		case "deposit":
			return "Deposito feito";
		case "receivedTransaction":
			return "Tranferencia recebida";
		default:
			return "";
		}
	}
	return (
		<Container>
			{
				loading ? (
					<>
						<ContentTypeAndDate>
							<Title>{validationTitle(data.type)}</Title>
							<DateTransactin>{formatDateAllValues(data?.date)}</DateTransactin>
						</ContentTypeAndDate>
						<span>{data?.value}</span>
						<span>{data?.to_who}</span>
						<ContentButton>
							<button type="button" onClick={() => onCloseModal()}>Fechar</button>
						</ContentButton>

					</>
				) : (
					<LoaderComponent />
				)
			}
		</Container>
	);
};

export default ContainerModalDetails;
