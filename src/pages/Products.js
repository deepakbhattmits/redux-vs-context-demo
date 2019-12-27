/** @format */

import React from 'react';
import ShopContext from '../context/shop-context';
import './Products.css';

const ProductsPage = props => {
	// console.log('TEST props : ', props);
	return (
		<ShopContext.Consumer>
			{context => (
				<>
					<main className='products'>
						<ul>
							{context.products.map(product => (
								<li key={product.id}>
									<div>
										<img
											src='https://via.placeholder.com/150'
											alt={product.title}
										/>
									</div>
									<div>
										<strong>{product.title}</strong> - ${product.price}
									</div>
									<div>
										<button
											onClick={context.addProductToCart.bind(this, product)}
										>
											Add to Cart
										</button>
									</div>
								</li>
							))}
						</ul>
					</main>
				</>
			)}
		</ShopContext.Consumer>
	);
};
export default ProductsPage;
