import React from 'react'
import {useDispatch} from 'react-redux'
import iconHeart from "../../assets/img/icon-heart.svg"
import AddtoCart from "../../assets/img/cart.svg"


const Item = ({item, selected_count, setShowWriteReview, setShowReview, setSelectedItemId}) => {
    const dispatch= useDispatch();
    const clickAddCart=() => {
        dispatch(addCart(item));
    };
    const clickPlusCart= () => {
        dispatch(increaseCart(item));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(item));
    };
    const clickWriteReview = () => {
        setSelectedItemId(item.id);
        setShowWriteReview(true);
    };
    const clickCheckReview = () => {
        setSelectedItemId(item.id);
        setShowReview(true);
    };

}

function Items() {
  return (
      <>
        <ul>
        <li class="menu">
            <img
              class="itemImg"
              src={item.image}
              alt=""
              style="width: 100%"
            />
            <div class="item-info">
              <div class="likes-count">
                <img class="heartIcon" src={iconHeart} alt="" />
                <p class="likesCount">({item.total_like_count})</p>
              </div>
              <b>{item.name}</b>
              <button class="review" onClick={()=>clickWriteReview(true)}>Write Review</button>
              <button class="review" onClick={()=>clickCheckReview(true)}>Check Review</button>
              <div class="cartButtonall">
              {selected_count == 0 ? (
              <div class="add" onClick={clickAddCart}>
                <img src={AddtoCart} alt="" />
              </div> 
              ) : (<div class="number">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{selected_count}</span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>)}
                <p class="price">${item.price}</p>
           
          </div>
            </div>
          </li>
        </ul>
      </>
  );
};

export default Items