import React from "react";

// components
import LoaderExampleLoader from "../Loading";

// styles
import { Container, ContentInfo, ContentBalance } from "./styles";

// interface
interface IInfoUserContent {
  name?: string,
  wallet?: number,
	loading: boolean,
}

const InfoUserContent = ({ name, wallet, loading }: IInfoUserContent) => {
	return (
		<Container>
			{
				loading ? (
					<>
						<ContentInfo>
							<h2>
								Olá,
								{" "}
								<strong>{name || "Usurario"}</strong>
								{" "}
							</h2>
						</ContentInfo>
						<ContentBalance>
							<h1>Saldo</h1>
							<h2>
								{new Intl.NumberFormat("pt-BR", {	style: "currency",	currency: "BRL"	}).format((wallet?.toFixed(2) || 0)as unknown as number)}
							</h2>
						</ContentBalance>
					</>
				)
					: (
						<LoaderExampleLoader />
					)
			}
		</Container>
	);
};

export default InfoUserContent;
