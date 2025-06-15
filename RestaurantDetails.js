// src/pages/RestaurantDetails.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RestaurantDetails.css';


function RestaurantDetails() {
  const { state } = useLocation();
  const restaurant = state?.restaurant;
  const [selectedItems, setSelectedItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showFinalConfirmation, setShowFinalConfirmation] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [address, setAddress] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!restaurant) return <p style={{ textAlign: 'center' }}>Restaurant not found.</p>;

  const handleCheckboxChange = (item) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleOrderClick = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one menu item to order.');
      return;
    }
    setShowConfirmation(true);
  };

  const confirmOrder = () => {
    if (!address.trim()) {
      alert('Please enter your address.');
      return;
    }
    setShowConfirmation(false);
    setOrderConfirmed(true);
    setShowFinalConfirmation(true);
  };

  const handleTrackOrder = () => {
    if (!orderConfirmed) {
      alert('Please confirm your order first.');
      return;
    }
    setShowTracking(true);
    setTimeout(() => {
      alert("Your order is on the Way....");
      setShowTracking(false);
    }, 100);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} />
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>

      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((item, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              /> {item}
            </label>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleOrderClick}
          style={{
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Order Now
        </button>
      </div>

      {showConfirmation && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h4>Confirm Your Order</h4>
          <ul>
            {selectedItems.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <button
            onClick={confirmOrder}
            style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Confirm
          </button>

          <button
            onClick={() => setShowConfirmation(false)}
            style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Final Confirmation Modal with Blur and Animation */}
      {showFinalConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 style={{ marginBottom: '10px' }}>Order confirmed for:</h4>
            <ul style={{ textAlign: 'left', marginBottom: '10px' }}>
              {selectedItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p><strong>Address:</strong> {address}</p>

            <button
              onClick={handleTrackOrder}
              style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', marginRight: '10px', marginTop: '10px' }}
            >
              Track Your Order
            </button>

            <button
              onClick={() => setShowFinalConfirmation(false)}
              style={{ padding: '8px 16px', backgroundColor: '#aaa', color: '#fff', border: 'none', borderRadius: '6px', marginTop: '10px' }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantDetails;
