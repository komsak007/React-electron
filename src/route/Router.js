import React, { useEffect } from "react";
import { CreateSitePage } from "../pages/CreateSitePage";
import { CalibratePage } from "../pages/CalibratePage";
import { HomePage } from "../pages/HomePage";
import { AddSensorPage } from "../pages/AddSensorPage";
import LoginPage from "../pages/LoginPage";
import { GetSitePage } from "../pages/GetSitePage";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GetSensorPage } from "../pages/GetSensorPage";

export const Router = () => {
  // useEffect(() => {
  //   localStorage.removeItem("user");
  // }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <PrivateRoute exact path={"/site/create"}>
          <CreateSitePage />
        </PrivateRoute>

        <PrivateRoute exact path={"/site/:site_name"}>
          <GetSitePage />
        </PrivateRoute>

        <Route exact path={"/:site_name/add"}>
          <AddSensorPage />
        </Route>

        <Route exact path={"/:site_name/sensor/:sensor_name"}>
          <GetSensorPage />
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
