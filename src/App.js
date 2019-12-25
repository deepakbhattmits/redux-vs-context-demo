/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import GlobalState from './context/GlobalState';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
const App = props => {
  return (
    <GlobalState>
      <ToastContainer autoClose={2000} />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ProductsPage} exact />
          <Route path='/cart' component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
