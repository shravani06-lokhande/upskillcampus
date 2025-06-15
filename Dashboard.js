/*import React, { useState } from 'react';

const Dashboard = ({menu, setMenu}) => {
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);
  const [dish, setDish] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const handleAddDish = (e) => {
    e.preventDefault();
    if (!dish.name || !dish.price) return;
    
    setMenu([...menu, { ...dish, id: Date.now() }]);
    setDish({ name: '', description: '', price: '', image: '' });
  };

  const handleOrder = (dishId) => {
    const orderedDish = menu.find(item => item.id === dishId);
    if (orderedDish && !orders.includes(dishId)) {
      setOrders([...orders, dishId]);
      alert(`Order placed for "${orderedDish.name}"`);
    }
  };

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginBottom: '2rem'
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px',
      backgroundColor: '#ff6f61',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    menuList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '1.5rem'
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    },
    cardImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    cardContent: {
      padding: '10px'
    },
    orderButton: {
      marginTop: '10px',
      padding: '8px 12px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    ordered: {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Restaurant Dashboard</h2>

      <form onSubmit={handleAddDish} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Dish Name"
          value={dish.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Dish Description"
          value={dish.description}
          onChange={handleChange}
          style={styles.input}
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={dish.price}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={dish.image}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Dish</button>
      </form>

      <h3>Menu Items</h3>
      <div style={styles.menuList}>
        {menu.map((item) => (
          <div style={styles.card} key={item.id}>
            <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>₹{item.price}</p>
              <button
                style={{
                  ...styles.orderButton,
                  ...(orders.includes(item.id) ? styles.ordered : {})
                }}
                onClick={() => handleOrder(item.id)}
                disabled={orders.includes(item.id)}
              >
                {orders.includes(item.id) ? 'Ordered' : 'Order Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;*/
