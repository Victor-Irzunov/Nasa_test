import React from "react";  //, { useContext } 
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from "../routes";
import { LIST_ROUTE } from "../utils/consts";
// import { Context } from "../index";

const AppRouter = () => {
	// const { object } = useContext(Context)
	return (
		<Switch>
			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} component={Component} exact />
			)}
			<Redirect to={LIST_ROUTE} />
		</Switch>
	)
}

export default AppRouter;

// exact - the path must match
//#FF0562