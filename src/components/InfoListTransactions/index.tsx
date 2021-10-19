import React from "react";

// components
import LoaderExampleLoader from "../Loading";

// styles
import { Container, Content, InfoData } from "./styles";

type DatasProps = {
  fromWho: string;
  toSend: string;
  value: number;
  date: any;
};

type InfoListTransactionsAndDepositProps = {
  loading: boolean;
  data: DatasProps[];
};

const InfoListTransactionsAndDeposit = ({
	loading,
	data,
}: InfoListTransactionsAndDepositProps) => {
	return (
		<Container>
			{loading ? (
				data.map((datas: DatasProps) => (
					<>
						<Content>
							<InfoData>
								<h4>De quem:</h4>
								<p>{datas.fromWho}</p>
							</InfoData>
							<InfoData>
								<h4>Para quem:</h4>
								<p>{datas.toSend}</p>
							</InfoData>
							<InfoData>
								<h4>Data:</h4>
								<p>
									{new Intl.DateTimeFormat("pt-BR").format(
										new Date(datas.date),
									)}
								</p>
							</InfoData>
							<InfoData>
								<h4>Valor:</h4>
								<p>
									{new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(datas.value as unknown as number)}
								</p>
							</InfoData>
						</Content>
					</>
				))
			) : (
				<LoaderExampleLoader />
			)}
		</Container>
	);
};

export default InfoListTransactionsAndDeposit;
