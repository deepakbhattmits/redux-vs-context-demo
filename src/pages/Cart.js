/** @format */

import React, { useContext } from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/shop-context';
import './Cart.css';

const CartPage = props => {
	const context = useContext(ShopContext);
	return (
		<>
			<main className='cart'>
				{context.cart.length <= 0 && <p>No Item in the Cart!</p>}
				<ul>
					{context.cart.map(cartItem => (
						<li key={cartItem.id}>
							<div>
								<strong>{cartItem.title}</strong> - ${cartItem.price} (
								{cartItem.quantity})
							</div>
							<div>
								<button
									onClick={context.removeProductFromCart.bind(
										this,
										cartItem.id,
										cartItem.title
									)}
								>
									Remove from Cart
								</button>
							</div>
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default CartPage;
