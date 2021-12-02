import React, { useEffect } from "react";
import { AboutPage } from "../pages/AboutPage";
import { CalibratePage } from "../pages/CalibratePage";
import { HomePage } from "../pages/HomePage";
import { ChanelPage } from "../pages/ChanelPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  // useEffect(() => {
  //   localStorage.removeItem("user");
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <PrivateRoute exact path={"/about"}>
          <AboutPage />
        </PrivateRoute>

        <Route exact path={"/chanel"}>
          <ChanelPage />
        </Route>

        <Route exact path={"/calibrate"}>
          <CalibratePage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
