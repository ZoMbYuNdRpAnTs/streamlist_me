import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} × {item.quantity}</p>
              </div>

              <div className="cart-controls">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
