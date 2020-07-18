import React from "react";
import { Route, Switch } from "react-router";

import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

let routeList = [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/bikes/:type", name: "Catalog", Component: CatalogPage },
  { path: "/product/:id", name: "Product", Component: ProductPage },
  { path: "/checkout", name: "Checkout", Component: CheckoutPage },
];

export default (
  <Switch>
    {routeList.map(({ path, Component }) => (
      <Route exact path={path} component={Component} />
    ))}
  </Switch>
);
