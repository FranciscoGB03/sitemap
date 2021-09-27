import React from 'react';
import {Route, Switch} from 'react-router';
import {ROUTES} from "./routes";


export default (
	<Switch>
		{(ROUTES || []).map((route,idx)=>
			<Route key={idx} exact={route.exact} path={route.path} component={route.component}/>
		)}
	</Switch>
);