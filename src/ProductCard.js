import React from "react";
import "./ProductCard.css";

const ProductCard = ({ productDetails }) => {
  const { productId, productPic, productName, brand, productDescription, price } = productDetails;

  const handleAddToCart = () => {
    alert(`Product ${productId}, which is ${productName} of brand ${brand} with price ${price} has been added to the cart. Please proceed to pay!`);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={productPic} alt={productName} />
      </div>
      <div className="card-body">
        <h2 className="product-name">{productName}</h2>
        <h3 className="brand">{brand}</h3>
        <p className="description">{productDescription}</p>
        <h3 className="price">{price}</h3>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
