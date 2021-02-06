import { Box, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="product__rating">
          {/* just a simple example of how we can use material ui start rating as read only */}
          <Box component="fieldset" borderColor="transparent">
            <Rating name="read-only" value={2} readOnly />
          </Box>
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/51-wsV9iCqL._AC_SY200_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
