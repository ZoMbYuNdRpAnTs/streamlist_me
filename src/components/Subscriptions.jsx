// src/components/Subscriptions.jsx
import React from 'react';
import products from '../Data';

function Subscriptions({ addToCart }) {
  return (
    <div>
      <h2>Available Subscriptions and Accessories</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subscriptions; 