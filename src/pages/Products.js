/** @format */

import React from 'react';
// import { connect } from 'react-redux';
import ShopContext from '../context/shop-context';

import MainNavigation from '../components/MainNavigation';
// import { addProductToCart } from '../store/actions';
import './Products.css';

const ProductsPage = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
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

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export default ProductsPage;
