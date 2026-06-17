import './App.css'
import ProductCard from './assets/Components/ProductCard'
import { products } from "./Products"
import { useState } from "react";

function App() {

  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
  setCartCount(cartCount + 1);
 }

  return (
    <>
      <h1>Product List</h1>
      <h2 className='CartItems'>Cart Items: {cartCount}</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </>
  );
}

export default App;