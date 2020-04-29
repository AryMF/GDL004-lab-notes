/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import {
	Route, Redirect, Switch,
	BrowserRouter as Router,
} from 'react-router-dom';
import { AuthContext } from './controller/Auth';
import * as View from './views';

function App() {
	const { currentUser } = useContext(AuthContext);

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={currentUser ? View.Home : View.LandingPage} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
