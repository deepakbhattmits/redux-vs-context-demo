/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ProductsPage} exact />
        <Route path='/cart' component={CartPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
