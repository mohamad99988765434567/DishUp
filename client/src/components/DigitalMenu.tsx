import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DigitalMenu.css';

const images = [
  '/pic1.jpg',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic4.jpg',
  '/pic5.jpg',
  '/pic6.jpg',
  '/pic7.jpg',
  '/pic8.jpg',
];

function DigitalMenu() {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleMenuClick = () => {
    navigate('/menu'); // 👉 move to /menu page when clicking "Our Menu"
  };

  return (
    <div className="digital-menu">
      {/* Header */}
      <header className="menu-header">
        <img src="/logo.png" alt="Restaurant Logo" className="menu-logo" />
        <h1 className="menu-title">DishUp</h1>
      </header>

      {/* Menu */}
      <main className="menu-section">
        {/* "Our Menu" is now clickable */}
        <h2 className="menu-title-clickable" onClick={handleMenuClick}>
          Our Menu
        </h2>

        <ul className="menu-list">
          <li>🍔 Signature Burger - $10</li>
          <li>🍝 Creamy Pasta - $15</li>
          <li>🥗 Fresh Salad - $12</li>
        </ul>
      </main>

      {/* Gallery with arrows */}
      <footer className="menu-footer">
        <h3>Gallery</h3>
        <div className="gallery-wrapper">
          <button className="arrow left" onClick={handlePrev} disabled={startIndex === 0}>
            &#10094;
          </button>

          <div className="menu-gallery">
            {images.slice(startIndex, startIndex + 3).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Dish ${i + 1}`}
                className="gallery-image"
              />
            ))}
          </div>

          <button
            className="arrow right"
            onClick={handleNext}
            disabled={startIndex + 3 >= images.length}
          >
            &#10095;
          </button>
        </div>
      </footer>
    </div>
  );
}

export default DigitalMenu;
