import React from "react";
import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// view
import Auth from "./view/auth";
import PageInfo from "./view/home";
import Create from "./view/auth/Create";

// contexts
import { GetIdProvider } from "./contexts/getIdProvider";

Modal.setAppElement("#root");

function App() {
	return (
		<>
			<BrowserRouter>
				<GetIdProvider.Provider value={[]}>
					<Switch>
						<Route path="/" exact component={Auth} />
						<Route path="/home/:id" component={PageInfo} />
						<Route path="/create" exact component={Create} />
					</Switch>
				</GetIdProvider.Provider>
			</BrowserRouter>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				draggable
			/>
		</>
	);
}
export default App;
