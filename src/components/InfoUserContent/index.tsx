import React from "react";

// components
import LoaderExampleLoader from "../Loading";

// styles
import {
	Container, ContentInfo, Balance, NameUser,
} from "./styles";

// interface
interface IInfoUserContent {
  name?: string;
  wallet?: number;
  loading: boolean;
}

const InfoUserContent = ({ name, wallet, loading }: IInfoUserContent) => {
	return (
		<Container>
			{loading ? (
				<>
					<ContentInfo>
						<NameUser>
							Olá,
							{" "}
							<strong>{name || "Usurario"}</strong>
							{" "}
						</NameUser>
						<Balance>
							<p>
								Saldo:
								{" "}
								<span>
									{new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format((wallet?.toFixed(2) || 0) as unknown as number)}
								</span>
							</p>
						</Balance>
					</ContentInfo>
				</>
			) : (
				<LoaderExampleLoader />
			)}
		</Container>
	);
};

export default InfoUserContent;
