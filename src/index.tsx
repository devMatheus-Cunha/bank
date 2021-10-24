import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

// App
import App from "./App";

// global styles
import { GlobalStyle } from "./assets/styles/global";

// themes
import dark from "./assets/styles/themes/dark";
import light from "./assets/styles/themes/light";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={dark}>
			<App />
			<GlobalStyle />
		</ThemeProvider>

	</React.StrictMode>,
	document.getElementById("root"),
);
