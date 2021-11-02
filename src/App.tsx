import React from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

// routes
import Routes from "./routes/routes";

// contexts
import { AuthProvider } from "./contexts/AuthContext";

// themes
import dark from "./assets/styles/themes/dark";

// global styles
import { GlobalStyle } from "./assets/styles/global";

Modal.setAppElement("#root");

function App() {
	// styles to Toast
	const stylesToast = {
		background: "#2c2c2e",
	};
	return (
		<>
			<AuthProvider>
				<ThemeProvider theme={dark}>
					<Routes />
					<GlobalStyle />
				</ThemeProvider>
			</AuthProvider>

			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				closeOnClick
				theme="dark"
				draggable
				toastStyle={stylesToast}
			/>
		</>
	);
}
export default App;
