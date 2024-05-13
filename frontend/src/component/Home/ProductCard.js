import React from 'react';
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';

const ProductCard = ({product}) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const imageUrl = product?.images[0]?.url;
  return (
    <div>
      <Link className='productCard' to={`/product/${product._id}`}>
        <img src={imageUrl} alt={product.name} />
        <p>{product.name}</p>
        <div>
        <Rating {...options} /> {" "}
        <span  className="productCardSpan">
        {" "}
        ({product.noOfReviews} Reviews)</span>
        </div>
        <span>{`₹${product.price}`}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
