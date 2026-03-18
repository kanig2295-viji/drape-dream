import React from 'react'
import './Kidswear.css'
import { Kids, boys, womens } from '../Constant/Data' // சுருக்கமாக இம்போர்ட் செய்யலாம்
import { addItem, removeFromCart } from '../redux/cardSlice'
import { addToFav } from '../redux/favSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Kidwear = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addItem(item))
  }
  const deleteCart = (id) => {
    dispatch(removeFromCart(id))
  }
  const addFav = (item) => {
    dispatch(addToFav(item));
  };

  return (
    <div className='container'>
      <div className='row6'>
        <h1> Elegant Kids & Womens Collection({cartProducts.length}) </h1>
      </div>

      <div className='row7'>
        {/* Kids Section */}
        {Kids.map((item) => (
          <div className="col8" key={item.id}>
            <img src={item.img} alt="kids" />
            <div className='but'>
              <h5 className="card-title">{item.title} </h5>
              <p className="card-text">₹{item.price} </p>
              <button onClick={() => addCart(item)}>Add to cart</button>
              <button onClick={() => deleteCart(item.id)}> Delete from cart</button>
              <button className="addfav" onClick={() => addFav(item)}>❤️ Favorite</button>
            </div>
          </div>
        ))}

        {/* Boys Section */}
        {boys.map((item) => (
          <div className="col8" key={item.id}>
            <img src={item.img} alt="boys" />
            <div className='but'>
              <h5 className="card-title">{item.title} </h5>
              <p className="card-text">₹{item.price} </p>
              <button onClick={() => addCart(item)}>Add to Cart</button>
              <button onClick={() => deleteCart(item.id)}>Delete from cart</button>
              <button onClick={() => addFav(item)}>❤️ Favorite</button>
            </div>
          </div>
        ))}

        {/* Womens Section */}
        {womens.map((item) => (
          <div className="col8" key={item.id}>
            <img src={item.img} alt="womens" />
            <div className='but'>
              <h5 className="card-title">{item.title} </h5>
              <p className="card-text">₹{item.price} </p>
              <button onClick={() => addCart(item)}>Add to Cart</button>
              <button onClick={() => deleteCart(item.id)}>Delete from cart</button>
              <button onClick={() => addFav(item)}>❤️ Favorite</button>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Kidwear;
