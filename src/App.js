/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import NotFound from './pages/NotFound';
import Layout from './layout/Layout';
import { ToastContainer } from 'react-toastify';
import GlobalState from './context/GlobalState';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
const App = props => {
	// console.log('test :',props)
	return (
		<GlobalState>
			<ToastContainer autoClose={2000} />
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path='/' component={ProductsPage} exact />
						<Route path='/cart' component={CartPage} exact />
						<Route path='*' component={NotFound} exact />
					</Switch>
				</Layout>
			</BrowserRouter>
		</GlobalState>
	);
};

export default App;
