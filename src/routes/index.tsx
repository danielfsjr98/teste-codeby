import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Content from "../components/template";
import publicRoutes from "./public.routes";

export interface IRoutes {
  path: string;
  name: string;
  component: React.FC;
}

const Routes = () => {
  return (
    <Switch>
      <Content>
        { publicRoutes.map((route) => (
          <Route key={route.name} path={route.path} component={route.component} exact/>
        ))}
        <Redirect from="*" to="/" />
      </Content>
    </Switch>
  );
};
export default Routes;
