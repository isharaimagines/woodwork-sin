// ProductCard.js
import "./service.css";
import React from "react";

const ProductCard = ({ imgSrc, productName, description, price, isNew }) => {
  return (
    <div className="product-thumb">
      <div className="product-img">
        <img src={imgSrc} alt="thumbnail-bg" />
      </div>

      <div className="product-top">
        {isNew && (
          <span className="product-alert">
            <i class="ri-bookmark-fill"></i> New Arrival
          </span>
        )}
      </div>

      <div className="product-info">
        <div className="align">
          <h5>{productName}</h5>
          <p>{description}</p>
        </div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
