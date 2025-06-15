// src/pages/Restaurants.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const restaurants = [
  {
    id: 1,
    name: "Indian Spices",
    cuisine: "Indian",
    rating: 4.5,
    image: '/images/indian.jpg',
    menu: ['Butter Chicken: Rs.230', 'Paneer Tikka: Rs.190', 'Mix Veg: Rs.210', 'Pav Bhaji: Rs.110', 'Biryani: Rs.240', 'Chole Bhature: Rs.125', 'Misal Pav: Rs.100'],
  },
  {
    id: 2,
    name: "Flavours Of Italy",
    cuisine: "Italian",
    rating: 4.2,
    image: '/images/italy.jpg',
    menu: ['Pasta: $23', 'Pizza: $31', 'Lasagna: $10', 'Tiramisu: $18', 'Burrata: $24', 'Neapolitan Pizza: $12', 'Carbonara: $21'],
  },
  {
    id: 3,
    name: "Sushi House",
    cuisine: "Japanese",
    rating: 4.8,
    image: '/images/japnese.jpg',
    menu: ['Sushi Roll: $54', 'Tempura: $23', 'Ramen: $12', 'Miso Soup: $20', 'Dumpling: $28', 'Takoyaki: $18', 'Japanese Cheesecake: $30'],
  },
  {
    id: 4,
    name: "Burger Barn",
    cuisine: "American",
    rating: 4.3,
    image: '/images/america.jpg',
    menu: ['Cheeseburger: $38', 'Fries: $12', 'Chicken Wings: $34', 'Milkshake: $21', 'Chicken Nuggets: $32', 'Southern Fried Chicken: $38', 'Bagels: $23'],
  },
  {
    id: 5,
    name: "Taco Town",
    cuisine: "Mexican",
    rating: 4.4,
    image: '/images/mexican.jpg',
    menu: ['Tacos: $32', 'Burritos: $72', 'Nachos: $53', 'Quesadillas: $62', 'Pozole: $63', 'Mexican Rice: $61', 'Baked Beans: $37'],
  },
  {
    id: 6,
    name: "Green Delight",
    cuisine: "Korean",
    rating: 4.6,
    image: '/images/korian.jpg',
    menu: ['Kimchi: $61', 'Bibimbap: $29', 'Korean BBQ: $17', 'Tteokbokki: $62', 'Korean Fried Chicken: $18', 'Samyun: $72'],
  }
];

function NearbyRestaurants() {
  const navigate = useNavigate();

  const handleCardClick = (restaurant) => {
    navigate(`/restaurants/${restaurant.id}`, { state: { restaurant } });
  };

  return (
    <div style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Nearby Restaurants</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        {restaurants.map((res) => (
          <div
            key={res.id}
            style={{
              border: '1px solid #ddd',
              padding: '16px',
              borderRadius: '16px',
              width: '260px',
              textAlign: 'center',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              background: '#fff'
            }}
            onClick={() => handleCardClick(res)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={res.image}
              alt={res.name}
              style={{ width: '100%', height: '160px', borderRadius: '10px', objectFit: 'cover' }}
            />
            <h3 style={{ marginTop: '10px' }}>{res.name}</h3>
            <p style={{ color: '#777' }}>{res.cuisine}</p>
            <p style={{ fontWeight: 'bold' }}>⭐ {res.rating}</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevents triggering card click
                handleCardClick(res);
              }}
              style={{
                marginTop: '12px',
                padding: '10px 18px',
                borderRadius: '8px',
                background: '#000',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Check More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyRestaurants;
