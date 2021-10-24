import React, { useState } from "react";

// icons
import { BsEyeSlash, BsEye } from "react-icons/bs";

// components
import LoaderExampleLoader from "../Loading";

// styles
import {
	Container, ContentInfo, Balance, NameUser, ViewBalance,
} from "./styles";

// interface
interface IInfoUserContent {
  name?: string;
  wallet?: number;
  loading: boolean;
}

const InfoUserContent = ({ name, wallet, loading }: IInfoUserContent) => {
	// states
	const [show, setShow] = useState(false)

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
									{
										show ? (
											<div />
										) : (
											new Intl.NumberFormat("pt-BR", {
												style: "currency",
												currency: "BRL",
											}).format((wallet?.toFixed(2) || 0) as unknown as number)
										)
									}
								</span>
							</p>
						</Balance>
					</ContentInfo>
					<ViewBalance onClick={() => setShow(!show)}>
						{show ? <BsEyeSlash /> : <BsEye />}
					</ViewBalance>
				</>
			) : (
				<LoaderExampleLoader />
			)}
		</Container>
	);
};

export default InfoUserContent;
