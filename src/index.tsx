import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// global styles
import { GlobalStyle } from "./assets/styles/global";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<GlobalStyle />
	</React.StrictMode>,
	document.getElementById("root"),
);
