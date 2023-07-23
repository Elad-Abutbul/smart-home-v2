import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Home } from "./home";
import { Navigation } from "./navigation";
export const AppRouter = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path={ROUTES.HOME} Component={Home} />
    </Routes>
  </BrowserRouter>
);
