import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { CatalogueProvider } from "../Providers/catalogue";
import { CartProvider } from "../Providers/cart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <CatalogueProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </CatalogueProvider>
      </Route>
      <Route exact path="/cart">
        <CatalogueProvider>
          <CartProvider>
            <Cart />
          </CartProvider>
        </CatalogueProvider>
      </Route>
    </Switch>
  );
}
export default Routes;
