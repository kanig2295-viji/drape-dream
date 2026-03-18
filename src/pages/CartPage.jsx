import './CartPage.css'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart, 
  calculateTotal,
} from "../redux/cardSlice"; 
import "./CartPage.css"; 

const CartPage = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <button className="shop-now-btn" onClick={() => window.history.back()}>Shop Now</button>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
               <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} className="cart-image" alt={item.title} />
                  </td>
                 
                  <td className="product-title">{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="qty-controls">
                      <button 
                        className="qty-btn" 
                        onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}
                        disabled={item.quantity <= 1} 
                      > - </button>
                      <span className="qty-text">{item.quantity}</span>
                      <button 
                        className="qty-btn" 
                        onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}
                      > + </button>
                    </div>
                  </td>
                  <td className="item-total">₹{item.price * item.quantity}</td>
                  <td>
                    <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                       <span className="remove-text">Remove</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-section">
            <div className="total-card">
              <h3>Cart Summary</h3>
              <div className="total-row">
                <span>Subtotal:</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="total-row grand-total">
                <strong>Grand Total:</strong>
                <strong className="total-amount">₹{totalAmount}</strong>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
