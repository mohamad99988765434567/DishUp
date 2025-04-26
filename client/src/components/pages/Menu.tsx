import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Full Menu</h1>

      {/* Italian Section */}
      <section className="menu-section">
        <h2 className="section-title">🍝 Italian</h2>

        {/* Pizza Subsection */}
        <h3 className="subsection-title">🍕 Pizzas</h3>
        <div className="menu-items">
          <div className="menu-card">
            <img src="/margarita.jpg" alt="Margarita" className="menu-image" />
            <p>Margherita Pizza - $12</p>
          </div>
          <div className="menu-card">
            <img src="/pepperoni.jpg" alt="Pepperoni" className="menu-image" />
            <p>Pepperoni Pizza - $14</p>
          </div>
          <div className="menu-card">
            <img src="/vegetarian.jpg" alt="Vegetarian" className="menu-image" />
            <p>Vegetarian Pizza - $13</p>
          </div>
          <div className="menu-card">
            <img src="/fourcheese.jpg" alt="Four Cheese" className="menu-image" />
            <p>Four Cheese Pizza - $15</p>
          </div>
        </div>
      </section>

      {/* Burger Section */}
      <section className="menu-section">
        <h2 className="section-title">🍔 Burgers</h2>

        <div className="menu-items">
          <div className="menu-card">
            <img src="/smash.jpg" alt="Smash Burger" className="menu-image" />
            <p>Smash Burger - $11</p>
          </div>
          <div className="menu-card">
            <img src="/cheeseBurger.jpg" alt="Cheese Burger" className="menu-image" />
            <p>Cheese Burger - $12</p>
          </div>
          <div className="menu-card">
            <img src="/BBQ.jpg" alt="BBQ Burger" className="menu-image" />
            <p>BBQ Burger - $13</p>
          </div>
          <div className="menu-card">
            <img src="/bacon.jpg" alt="Bacon Burger" className="menu-image" />
            <p>Bacon Burger - $14</p>
          </div>
        </div>
      </section>

      {/* Salads Section */}
      <section className="menu-section">
        <h2 className="section-title">🥗 Salads</h2>

        <div className="menu-items">
          <div className="menu-card">
            <img src="/Caesar Salad.jpg" alt="Caesar Salad" className="menu-image" />
            <p>Caesar Salad - $10</p>
          </div>
          <div className="menu-card">
            <img src="/greeksalad.jpg" alt="Greek Salad" className="menu-image" />
            <p>Greek Salad - $11</p>
          </div>
          <div className="menu-card">
            <img src="/gardensalad.jpg" alt="Garden Salad" className="menu-image" />
            <p>Garden Salad - $9</p>
          </div>
          <div className="menu-card">
            <img src="/quinoasalad.jpg" alt="Quinoa Salad" className="menu-image" />
            <p>Quinoa Salad - $12</p>
          </div>
        </div>
      </section>

      <button className="back-button" onClick={handleBack}>
         Back to Home
      </button>
    </div>
  );
}

export default Menu;
