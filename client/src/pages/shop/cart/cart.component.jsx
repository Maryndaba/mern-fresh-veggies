import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from 'pages/farmeradmin/wrapper/stock/node_modules/components/UI/custom-button/custom-button.component';

import './cart.styles.scss';
const Cart = ({ toggleModal }) => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const dispatch = useDispatch();
  const removeItemHandler = (cartItemToRemove) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartItemToRemove });
  };

  return (
    <div className="cart-edit">
      <Link to="/shop">
        <CustomButton onClick={() => toggleModal('SHOP_CART')}>
          <FontAwesomeIcon icon={['fas', 'angle-left']} className="fa-angle-left" />
          Back to shopping
        </CustomButton>
      </Link>
      <p className="cart-title">You have added the following articles:</p>
      <ul className="cart-list">
        <li>
          <span>Item: </span>
          <span>Quantity: </span>
          <span>Price </span>
          <span>{} </span>
        </li>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <li>
              <span>{cartItem.name}</span>
              <span>{cartItem.quantity}x</span>
              <span>Price </span>
              <span>
                <FontAwesomeIcon
                  icon={['fas', 'times']}
                  className="fa-times"
                  onClick={() => {
                    removeItemHandler(cartItem);
                  }}
                />
              </span>
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>

      <Link to={`/checkout`}>
        <CustomButton type="button" disabled={cartItems.length <= 0 && true}>
          Proceed to checkout
        </CustomButton>
      </Link>
    </div>
  );
};

export default Cart;
