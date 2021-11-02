import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// view
import Auth from "../view/auth";
import PageInfo from "../view/home";
import Create from "../view/auth/Create";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Auth} />
				<Route exact path="/home/:id" component={PageInfo} />
				<Route exact path="/create" component={Create} />
			</Switch>
		</BrowserRouter>
	);
}
