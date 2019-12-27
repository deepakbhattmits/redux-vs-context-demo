/** @format */

// import React from 'react';
import React, { useContext } from 'react';

import ShopContext from '../context/shop-context';

import MainNavigation from '../components/MainNavigation';
const Header = props => {
	// console.log('TEST :',props)
	const context = useContext(ShopContext);
	return (
		<div className='header'>
			<MainNavigation
				cartItemNumber={context.cart.reduce((count, curItem) => {
					return count + curItem.quantity;
				}, 0)}
			/>
		</div>
	);
};
export default Header;
