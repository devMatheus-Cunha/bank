import React from "react";

// interfaces
import { TransactionsDatasProps } from "../../interface";

// components
import LoaderExampleLoader from "../Loading";

// styles
import { Container, Content, InfoData } from "./styles";

type InfoListTransactionsAndDepositProps = {
  loading: boolean;
  datas: TransactionsDatasProps[];
};

const InfoListTransactionsAndDeposit = ({
	loading,
	datas,
}: InfoListTransactionsAndDepositProps) => {
	return (
		<Container>
			{loading && datas && datas.length > 0 ? (
				datas?.map((data: TransactionsDatasProps) => (
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
									{new Intl.DateTimeFormat("pt-BR").format(new Date(data.date))}
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
							<InfoData>
								<h4>Tipo</h4>
								<p>
									{data.to_who ? "Transferencia" : "Deposito"}
								</p>
							</InfoData>
						</Content>
					</>
				))
			) : (
				<>
					<LoaderExampleLoader />
				</>
			)}
		</Container>
	);
};

export default InfoListTransactionsAndDeposit;