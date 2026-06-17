import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  const { id, title, price, category } = product;

  const cardClass = `card ${category === "Electronics" ? "electronics-card" : "product-card"}`;

  return (
    <div className={cardClass}>
      <span>#{id}</span>
      <h2>{title}</h2>
      <p>price: {price}$</p>
      <p>category: {category}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}