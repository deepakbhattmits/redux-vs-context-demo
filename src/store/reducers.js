/** @format */
import { shopConstants } from '../constants/type';
// import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';
import { toast } from 'react-toastify';

const initialState = {
  products: [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ],
  cart: [],
  cartSum: 0
};

const shopReducer = (state = initialState, action) => {
  // const options = {
  //   onOpen: props => console.log('open'),
  //   onClose: props => console.log('close'),
  //   autoClose: 6000,
  //   // closeButton: <FontAwesomeCloseButton />,
  //   type: toast.TYPE.INFO,
  //   hideProgressBar: false,
  //   position: toast.POSITION.TOP_RIGHT,
  //   pauseOnHover: true,
  //   // transition: MyCustomTransition,
  //   progress: 0.2
  //   // and so on ...
  // };
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case shopConstants.ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity += 1;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      toast.success(`Added Product: ${action.payload.title}`);
      return { ...state, cart: updatedCart };
    case shopConstants.REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity -= 1;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      toast.error(`Removed Product: ${action.payload.title}`);
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
