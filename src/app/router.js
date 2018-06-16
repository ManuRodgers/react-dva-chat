import React from "react";
import { routerRedux, Route, Switch, Link, Redirect } from "dva/router";

import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import AuthRoute from "./components/AuthRoute/AuthRoute";

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <div>
        {/* 只渲染第一个满足条件的route组件 */}
        <AuthRoute />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
      </div>
    </ConnectedRouter>
  );
}

export default RouterConfig;
