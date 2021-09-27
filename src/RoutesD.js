import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {ROUTES} from "./routes";

const RoutesD = () => {
    return (
        <Router basename={process.env.REACT_APP_BASE_NAME}>
            <Switch>
                {ROUTES.map((route, idx) =>
                    <Route key={idx}
                           exact={route.exact}
                           path={route.path}
                           component={route.component}/>
                )}
            </Switch>
        </Router>
    );
};
export default RoutesD;