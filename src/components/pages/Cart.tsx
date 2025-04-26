// Cart.tsx
import React, { useState } from 'react';
import './Cart.css';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
  onCheckout: (paymentMethod: 'cash' | 'visa') => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onQuantityChange, onCheckout }) => {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'visa'>('cash');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                {item.image && <img src={item.image} alt={item.name} className="item-image" />}
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                  <div className="quantity-control">
                    <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-button" onClick={() => onRemove(item.id)}>&times;</button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-summary">
              <span>Total:</span>
              <span className="cart-total">${total.toFixed(2)}</span>
            </div>

            <div className="payment-method">
              <h3>Select Payment Method:</h3>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                Cash
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="visa"
                  checked={paymentMethod === 'visa'}
                  onChange={() => setPaymentMethod('visa')}
                />
                Visa
              </label>
            </div>

            <button
              className="checkout-button"
              onClick={() => onCheckout(paymentMethod)}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
