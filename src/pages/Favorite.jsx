import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFav, deleteAfterAddToCart } from '../redux/favSlice'; 
import { addItem } from '../redux/cardSlice';
import './Favorite.css';

const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorite.favItems);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));                
    dispatch(deleteAfterAddToCart(item.id)); 
  };

  return (
    <div className="container">
      <h2>My Favorites ❤️ ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p>No favorite items added yet!</p>
      ) : (
        <div className="row7">
          {favorites.map((item) => (
            <div className="col8" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="but">
                <h5>{item.title}</h5>
                <p>₹{item.price}</p>
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                <button onClick={() => dispatch(removeFromFav(item.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
