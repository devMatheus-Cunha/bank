import React, { useState } from "react";
import CountUp from "react-countup";

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
											<>
												<span>R$ </span>
												<CountUp
													end={wallet as number}
													duration={1.5}
													separator="."
													decimal=","
													decimals={2}
												/>
											</>
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
