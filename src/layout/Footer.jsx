/** @format */

// import React from 'react';
import React, { useContext } from 'react';

import ShopContext from '../context/shop-context';

import MainNavigation from '../components/MainNavigation';
const Footer = props => {
	// console.log('props :',props)
	const context = useContext(ShopContext);
	return (
		<div className='footer'>
			<MainNavigation
				cartItemNumber={context.cart.reduce((count, curItem) => {
					return count + curItem.quantity;
				}, 0)}
			/>
		</div>
	);
};
export default Footer;
