import React from "react";

// styles
import {
	Container,
	Content,
	InfoData,
} from "./styles";

type InfoListTransactionsAndDepositProps = {
  fromWho: string;
  toSend: string;
  value: number;
  date: any;
};

const InfoListTransactionsAndDeposit = ({
	fromWho,
	toSend,
	value,
	date,
}: InfoListTransactionsAndDepositProps) => {
	return (
		<Container>
			<Content>
				<InfoData>
					<h4>De quem:</h4>
					<p>
						{fromWho}
					</p>
				</InfoData>
				<InfoData>
					<h4>Para quem:</h4>
					<p>{toSend}</p>
				</InfoData>
				<InfoData>
					<h4>Data:</h4>
					<p>
						{new Intl.DateTimeFormat("pt-BR").format(new Date(date))}
					</p>
				</InfoData>
				<InfoData>
					<h4>Valor:</h4>
					<p>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(value as unknown as number)}
					</p>
				</InfoData>
			</Content>
		</Container>
	);
};

export default InfoListTransactionsAndDeposit;
