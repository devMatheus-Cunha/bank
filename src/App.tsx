import React from "react";
import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

// view
import Auth from "./view/auth";
import PageInfo from "./view/home";
import Create from "./view/auth/Create";

// contexts
import { AuthContext } from "./contexts/AuthContext";

Modal.setAppElement("#root");

function App() {
	// styles to Toast
	const stylesToast = {
		background: "#2c2c2e",
	};
	return (
		<>
			<BrowserRouter>
				<AuthContext.Provider value={[]}>
					<Switch>
						<Route path="/" exact component={Auth} />
						<Route path="/home/:id" component={PageInfo} />
						<Route path="/create" exact component={Create} />
					</Switch>
				</AuthContext.Provider>
			</BrowserRouter>

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
