/** @format */

import { shopConstants } from '../constants/type';

export const addProductToCart = product => {
	// console.log('test :',product)
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type: shopConstants.ADD_PRODUCT_TO_CART,
				payload: product
			});
		}, 700);
	};
};

export const removeProductFromCart = (productId, productTitle) => {
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type: shopConstants.REMOVE_PRODUCT_FROM_CART,
				payload: { id: productId, title: productTitle }
			});
		}, 700);
	};
};
