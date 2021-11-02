/* eslint-disable max-len */
import React from "react";

// utils
import CustomizedMenus from "../ToggleMenu";

// images
import logoImg from "../../assets/img/logo.svg"

// styles
import { Container } from "./styles";

const Header = () => {
	return (
		<Container>
			<img
				width="80"
				height="30"
				alt="Logo do Bank"
				loading="lazy"
				decoding="async"
				src={logoImg}
			/>
			<CustomizedMenus />
		</Container>
	);
};

export default Header;
