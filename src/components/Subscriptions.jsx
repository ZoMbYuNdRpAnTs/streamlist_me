import React from 'react';
import products from '../Data';

function Subscriptions({ addToCart }) {
    return (
        <div className="subscriptions-page">
            <h2 className="subscriptions-title">Available Subscriptions and Accessories</h2>
            <div className="subscriptions-grid">
                {products.map(product => (
                    <div key={product.id} className="subscription-card">
                        <img src={product.image} alt={product.name} className="product-image"/>
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Subscriptions;