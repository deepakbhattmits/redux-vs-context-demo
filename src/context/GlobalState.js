/** @format */

import React, { useReducer } from 'react';
import ShopContext from './shop-context';
import { shopConstants } from '../constants/type';
import { shopReducer } from './reducers';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const GlobalState = props => {
	const products = [
		{ id: 'p1', title: 'Gaming Mouse', price: 29.99 },
		{ id: 'p2', title: 'Harry Potter 3', price: 9.99 },
		{ id: 'p3', title: 'Used plastic bottle', price: 0.99 },
		{ id: 'p4', title: 'Half-dried plant', price: 2.99 }
	];
	// const [cart, setCart] = useState([]);
	const [state, dispatch] = useReducer(shopReducer, { cart: [] });
	// const [cartSum, setCartSum] = useState(0);
	const addProductToCart = product => {
		// // console.log('test Adding Product ', product);

		// const updatedCart = [...cart];
		// const updatedItemIndex = updatedCart.findIndex(
		//   item => item.id === product.id
		// );

		// if (updatedItemIndex < 0) {
		//   updatedCart.push({ ...product, quantity: 1 });
		// } else {
		//   const updatedItem = {
		//     ...updatedCart[updatedItemIndex]
		//   };
		//   updatedItem.quantity += 1;
		//   updatedCart[updatedItemIndex] = updatedItem;
		// }
		// toast.success(`Added Product: ${product.title}`);
		setTimeout(() => {
			dispatch({ type: shopConstants.ADD_PRODUCT_TO_CART, product: product });
		}, 700);
		// setCart(updatedCart);
	};
	const removeProductFromCart = productId => {
		// console.log('TEST Removing ProductId ', productId);
		// const updatedCart = [...cart];
		// const updatedItemIndex = updatedCart.findIndex(
		//   item => item.id === productId
		// );

		// const updatedItem = {
		//   ...updatedCart[updatedItemIndex]
		// };
		// updatedItem.quantity -= 1;
		// if (updatedItem.quantity <= 0) {
		//   updatedCart.splice(updatedItemIndex, 1);
		// } else {
		//   updatedCart[updatedItemIndex] = updatedItem;
		// }
		// toast.warning(`Added Product: ${title}`);
		setTimeout(() => {
			dispatch({
				type: shopConstants.REMOVE_PRODUCT_FROM_CART,
				productId: productId
			});
		}, 700);
		// setCart(updatedCart);
	};
	return (
		<ShopContext.Provider
			value={{
				products: products,
				cart: state.cart,
				// cartSum: cartSum,
				addProductToCart: addProductToCart,
				removeProductFromCart: removeProductFromCart
			}}
		>
			{props.children}
		</ShopContext.Provider>
	);
};
export default GlobalState;
