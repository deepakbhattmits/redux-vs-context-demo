/** @format */

import { shopConstants } from '../constants/type';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const addProductToCart = (product, state) => {
	// console.log('TEST : ', product);
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex(
		item => item.id === product.id
	);

	if (updatedItemIndex < 0) {
		updatedCart.push({ ...product, quantity: 1 });
	} else {
		const updatedItem = {
			...updatedCart[updatedItemIndex]
		};
		updatedItem.quantity += 1;
		updatedCart[updatedItemIndex] = updatedItem;
	}
	toast.success(`Added Product: ${product.title}`);
	return { ...state, cart: updatedCart };
};
const removeProductFromCart = (productId, state) => {
	// console.log('TEST Removing ProductId ', productId);
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);
	const updatedItemTitle = updatedCart.find(item => item.id === productId);
	const updatedItem = {
		...updatedCart[updatedItemIndex]
	};
	updatedItem.quantity -= 1;
	if (updatedItem.quantity <= 0) {
		updatedCart.splice(updatedItemIndex, 1);
	} else {
		updatedCart[updatedItemIndex] = updatedItem;
	}
	toast.warning(`Removed Product: ${updatedItemTitle.title}`);
	return { ...state, cart: updatedCart };
};
export const shopReducer = (state, action) => {
	switch (action.type) {
		case shopConstants.ADD_PRODUCT_TO_CART:
			return addProductToCart(action.product, state);
		case shopConstants.REMOVE_PRODUCT_FROM_CART:
			return removeProductFromCart(action.productId, state);
		default:
			return state;
	}
};
