/* eslint-disable max-len */
import React from "react";
import { useHistory } from "react-router-dom";

// utils
import logoPicPay from "../../assets/img/logo.svg";

// styles
import { Container, Button } from "./styles";

const Header = () => {
	// hooks
	const history = useHistory();

	return (
		<Container>
			<img
				width="80"
				height="30"
				src={logoPicPay}
				alt="Logo do PicPay"
				loading="lazy"
				decoding="async"
			/>
			<Button type="button" onClick={() => history.push("/")}>
				Sair
			</Button>
		</Container>
	);
};

export default Header;
