import React from "react";
import "./product-card.scss";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ id, title, image, price, discount, rate }) => {
  const getStars = () => (
    <div className="stars">
      {[...new Array(5)].map((item, index) => <span key={index}>
      {  index < rate ? <AiFillStar /> : <AiOutlineStar />}</span>
      )}
    </div>
  );

  return (
    <div className="productCard">
      {discount > 0 && <span className="discount">{discount}%</span>}
      <img src={`assets/${image}`}  />
      {getStars()}

      <h3>{title}</h3>
      <div className="prices">
        {discount >0 && <span className="discounted-price">${price-price * discount/100}</span>  }
       
        <span className="standart-price">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
