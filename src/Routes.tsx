import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Switch>
  );
}

export default Routes;
