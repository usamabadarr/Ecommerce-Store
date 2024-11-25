import React, { SyntheticEvent } from "react";
import Item from "../../interfaces/Item";
import { useMutation } from "@apollo/client";
import { ADD_CARTITEM } from "../../utils/mutations";
import "./ProductCard.css";

const ProductCard: React.FC<Item> = (product) => {
  const { id, itemName, itemImg, price, description } = product;

  const [addItem] = useMutation(ADD_CARTITEM);

  const handleAddToCart = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await addItem({ variables: { id } });
      alert("Item added to cart!");
    } catch (e) {
      console.error(e);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div className="product-card">
      <img src={itemImg} alt={itemName} className="product-card-image" />
      <div className="product-card-body">
        <h3 className="product-card-title">{itemName}</h3>
        <p className="product-card-description">{description}</p>
        <p className="product-card-price">${price.toFixed(2)}</p>
        <button className="product-card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
