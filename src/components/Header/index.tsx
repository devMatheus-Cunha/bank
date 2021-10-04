import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Button } from "./styles";

const Header = () => {
	// hooks
	const history = useHistory();

	return (
		<Container>
			<img
				width="120"
				height="40"
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgNDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOSA0NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTI4IDM0LjNoNS44VjE3LjRIMjh2MTYuOXptNy44LTI4LjRoLTMuOXYzLjloMy45VjUuOXpNMTMuOSA3LjhIOC4zdjQuOWg1LjJjMy4zIDAgNS4yIDEuNiA1LjIgNC42UzE2LjggMjIgMTMuNSAyMkg4LjN2LTkuMkgyLjV2MjEuNWg1Ljh2LTcuNGg1LjVjNi43IDAgMTAuNi0zLjYgMTAuNi05LjggMC01LjgtMy44LTkuMy0xMC41LTkuM3pNMzkuNyAySDI4djExLjdoMTEuN1Yyem0tMS45IDkuN0gzMFYzLjloNy44djcuOHptMzQtMy45aC01LjN2NC45aDVjMy4zIDAgNS4yIDEuNiA1LjIgNC42Uzc0LjggMjIgNzEuNSAyMmgtNXYtOS4yaC01Ljh2MjEuNWg1Ljh2LTcuNGg1LjNjNi43IDAgMTAuNi0zLjYgMTAuNi05LjggMC01LjgtMy45LTkuMy0xMC42LTkuM3ptNDguNyA2LjItNSAxMi42LTUtMTIuNmgtNmw4IDIwLjMtMy4xIDcuN2g2LjFsMTEtMjhoLTZ6bS0yNi0uMWMtMy41IDAtNi4yLjgtOS4yIDIuM2wxLjggNGMyLjEtMS4yIDQuMi0xLjggNi4xLTEuOCAyLjggMCA0LjIgMS4yIDQuMiAzLjR2LjRoLTUuNmMtNSAwLTcuNyAyLjMtNy43IDYuMSAwIDMuNyAyLjYgNi4zIDcgNi4zIDIuOCAwIDQuOC0xIDYuNC0yLjd2Mi4yaDUuN1YyMC45Yy0uMi00LjMtMy4zLTctOC43LTd6bTMuNCAxMy42Yy0uNiAxLjctMi4zIDMuMS00LjcgMy4xLTIgMC0zLjItMS0zLjItMi42czEuMS0yLjMgMy4zLTIuM2g0LjZ2MS44em0tNDkuMyAyLjRjLTIuOCAwLTQuOC0yLjItNC44LTUuNSAwLTMuMiAyLTUuNCA0LjgtNS40IDIgMCAzLjUuOCA0LjYgMi4ybDMuOS0yLjhjLTEuOC0yLjctNC45LTQuMy04LjgtNC4zQzQyLjIgMTQgMzggMTguMiAzOCAyNC40czQuMiAxMC4zIDEwLjMgMTAuM2M0LjIgMCA3LjMtMS43IDktNC41bC00LTIuN2MtMSAxLjYtMi42IDIuNC00LjcgMi40eiIgc3R5bGU9ImZpbGw6I2YwZjFlOCIvPjwvc3ZnPg=="
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
