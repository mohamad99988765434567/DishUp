import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  const [isItalianOpen, setItalianOpen] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [isSaladOpen, setSaladOpen] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  const toggleItalian = () => setItalianOpen(!isItalianOpen);
  const toggleBurger = () => setBurgerOpen(!isBurgerOpen);
  const toggleSalad = () => setSaladOpen(!isSaladOpen);

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Full Menu</h1>

      {/* Italian Section */}
      <section className="menu-section">
        <div className="section-header" onClick={toggleItalian}>
          <h2 className="section-title">🍝 Italian</h2>
          <span className={`arrow ${isItalianOpen ? 'open' : ''}`}>&#9662;</span>
        </div>
        {isItalianOpen && (
          <>
            <h3 className="subsection-title">🍕 Pizzas</h3>
            <div className="menu-items">
              {[
                { name: "Margherita Pizza", price: 12, img: "/margarita.jpg", desc: "Classic tomato and mozzarella." },
                { name: "Pepperoni Pizza", price: 14, img: "/pepperoni.jpg", desc: "Spicy pepperoni with cheese." },
                { name: "Vegetarian Pizza", price: 13, img: "/vegetarian.jpg", desc: "Fresh vegetables and cheese." },
                { name: "Four Cheese Pizza", price: 15, img: "/fourcheese.jpg", desc: "Blend of four cheeses." },
                { name: "Truffle Mushroom Pizza", price: 17, img: "/TruffleMushroomPizza.jpg", desc: "Creamy blend of mushrooms and truffle oil.", badges: ["New", "Best Seller"] },
                { name: "Pesto Chicken Pizza", price: 16, img: "/PestoChickenPizza.jpg", desc: "Pesto sauce with grilled chicken.", badges: ["New"] },
              ].map((meal) => (
                <div className="menu-card" key={meal.name}>
                  <img src={meal.img} alt={meal.name} className="menu-image" />
                  <p>
                    <strong>{meal.name} - ${meal.price}</strong><br />
                    <span className="meal-description">{meal.desc}</span>
                  </p>
                  <div className="badges">
                    {meal.badges && meal.badges.map((badge) => (
                      <span key={badge} className={`badge ${badge === "New" ? "badge-new" : "badge-best-seller"}`}>{badge}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Burger Section */}
      <section className="menu-section">
        <div className="section-header" onClick={toggleBurger}>
          <h2 className="section-title">🍔 Burgers</h2>
          <span className={`arrow ${isBurgerOpen ? 'open' : ''}`}>&#9662;</span>
        </div>
        {isBurgerOpen && (
          <div className="menu-items">
            {[
              { name: "Smash Burger", price: 11, img: "/smash.jpg", desc: "Classic juicy smash burger." },
              { name: "Cheese Burger", price: 12, img: "/cheeseBurger.jpg", desc: "Cheddar cheese burger." },
              { name: "BBQ Burger", price: 13, img: "/BBQ.jpg", desc: "Smoky BBQ flavored burger." },
              { name: "Bacon Burger", price: 14, img: "/bacon.jpg", desc: "Crispy bacon with beef patty." },
              { name: "Spicy Jalapeño Burger", price: 13, img: "/SpicyJalapeñoBurger.jpg", desc: "Hot jalapeños and pepper jack cheese.", badges: ["New"] },
              { name: "Vegan Beyond Burger", price: 15, img: "/VeganBeyondBurger.jpg", desc: "Plant-based goodness.", badges: ["New"] },
            ].map((meal) => (
              <div className="menu-card" key={meal.name}>
                <img src={meal.img} alt={meal.name} className="menu-image" />
                <p>
                  <strong>{meal.name} - ${meal.price}</strong><br />
                  <span className="meal-description">{meal.desc}</span>
                </p>
                <div className="badges">
                  {meal.badges && meal.badges.map((badge) => (
                    <span key={badge} className={`badge ${badge === "New" ? "badge-new" : "badge-best-seller"}`}>{badge}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Salad Section */}
      <section className="menu-section">
        <div className="section-header" onClick={toggleSalad}>
          <h2 className="section-title">🥗 Salads</h2>
          <span className={`arrow ${isSaladOpen ? 'open' : ''}`}>&#9662;</span>
        </div>
        {isSaladOpen && (
          <div className="menu-items">
            {[
              { name: "Caesar Salad", price: 10, img: "/Caesar Salad.jpg", desc: "Crisp romaine, parmesan, and croutons." },
              { name: "Greek Salad", price: 11, img: "/GreekSalad.jpg", desc: "Tomato, cucumber, olives, feta cheese." },
              { name: "Garden Salad", price: 9, img: "/gardensalad.jpg", desc: "Fresh greens and veggies." },
              { name: "Quinoa Salad", price: 12, img: "/QuinoaSalad.jpg", desc: "Protein-packed quinoa mix." },
              { name: "Avocado Chicken Salad", price: 13, img: "/AvocadoChickenSalad.jpg", desc: "Avocado and grilled chicken.", badges: ["New"] },
              { name: "Superfood Salad", price: 14, img: "/superfood.jpg", desc: "Kale, quinoa, blueberries, almonds." },
            ].map((meal) => (
              <div className="menu-card" key={meal.name}>
                <img src={meal.img} alt={meal.name} className="menu-image" />
                <p>
                  <strong>{meal.name} - ${meal.price}</strong><br />
                  <span className="meal-description">{meal.desc}</span>
                </p>
                <div className="badges">
                  {meal.badges && meal.badges.map((badge) => (
                    <span key={badge} className={`badge ${badge === "New" ? "badge-new" : "badge-best-seller"}`}>{badge}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        Back to Home
      </button>
    </div>
  );
}

export default Menu;
