/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route path='/' component={ProductsPage} exact />
        <Route path='/cart' component={CartPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
