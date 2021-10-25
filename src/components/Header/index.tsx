/* eslint-disable max-len */
import React from "react";

// utils
import logoPicPay from "../../assets/img/logo.svg";
import CustomizedMenus from "../ToggleMenu";

// styles
import { Container } from "./styles";

const Header = () => {
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
			<CustomizedMenus />
		</Container>
	);
};

export default Header;
