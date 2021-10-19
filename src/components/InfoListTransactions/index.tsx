import React from "react";

// components
import LoaderExampleLoader from "../Loading";

// styles
import { Container, Content, InfoData } from "./styles";

type DatasProps = {
  from_who: string;
  to_who: string;
  value: number;
  date: Date;
};

type InfoListTransactionsAndDepositProps = {
  loading: boolean;
  datas: DatasProps[];
};

const InfoListTransactionsAndDeposit = ({
	loading,
	datas,
}: InfoListTransactionsAndDepositProps) => {
	console.log("====================================");
	console.log(datas);
	console.log("====================================");
	return (
		<Container>
			{loading ? (
				datas.map((data: DatasProps) => (
					<>
						<Content>
							<InfoData>
								<h4>De quem:</h4>
								<p>{data.from_who}</p>
							</InfoData>
							<InfoData>
								<h4>Para quem:</h4>
								<p>{data.to_who}</p>
							</InfoData>
							<InfoData>
								<h4>Data:</h4>
								<p>
									{new Intl.DateTimeFormat("pt-BR").format(
										new Date(data.date),
									)}
								</p>
							</InfoData>
							<InfoData>
								<h4>Valor:</h4>
								<p>
									{new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(data.value as unknown as number)}
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
