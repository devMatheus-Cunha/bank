import React from "react";

// components
import LoaderExampleLoader from "../Loading";

// styles
import {
	Container,
	Content,
	InfoData,
} from "./styles";

type InfoListTransactionsAndDepositProps = {
	loading: boolean,
	data: any
}

const InfoListTransactionsAndDeposit = ({
	loading, data,
}: InfoListTransactionsAndDepositProps) => {
	return (
		<Container>
			{
				loading ? (
					data.map(({
						fromWho, toSend, date, value,
					}: any) => (
						<>
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
						</>
					))
				) : (
					<LoaderExampleLoader />
				)
			}
		</Container>
	);
};

export default InfoListTransactionsAndDeposit;
