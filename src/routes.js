import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "./store";

import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { Home } from "./pages/Home/Home"
import { AddSurvey } from "./pages/AddSurvey/AddSurvey"
import { EditSurvey } from "./pages/EditSurvey/EditSurvey"
import { GetSurvey } from "./pages/GetSurvey/GetSurvey"
import { Result } from "./pages/Result/Result"

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/home' component={Home} />
      <Route path='/addSurvey' component={AddSurvey} />
      <Route path='/editSurvey/:id' component={EditSurvey} />
      <Route path='/getSurvey/:id' component={GetSurvey} />
      <Route path='/results' component={Result} />
    </Switch>
  </Router>
);