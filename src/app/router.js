import React from "react";
import { routerRedux, Route, Switch, Link, Redirect } from "dva/router";
import App from "./components/App";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          {/* 只渲染第一个满足条件的route组件 */}
          <Route path="/" exact component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default RouterConfig;
