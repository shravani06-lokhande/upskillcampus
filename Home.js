import React from 'react';

const Home = () => {
  const styles = {
    container: {
      padding: '40px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg,rgb(10, 7, 98) 0%,rgb(75, 113, 156) 100%)',
      minHeight: '90vh',
      color: '#333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundImage: `linear-gradient(rgba(232, 225, 234, 0.6), rgba(129, 169, 224, 0.6)),url('/images/bg.jpg')`,
      
    },
    title: {
      fontSize: '48px',
      marginBottom: '10px',
      color: '#000',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      
    },
    subtitle: {
      fontSize: '20px',
      marginBottom: '30px',
      color: '#000000'
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
      marginTop: '30px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      width: '280px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      
      
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    icon: {
      fontSize: '40px',
      color: '#ff6b6b',
      marginBottom: '10px'
    },
    featureTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '8px',
    },
    featureDesc: {
      fontSize: '14px',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to FoodExpress</h1>
      <p style={styles.subtitle}>Delicious food delivered to your doorstep from your favorite local restaurants!</p>
      
      <div style={styles.features}>
        <div style={styles.card}>
          <div style={styles.icon}>🍽️</div>
          <div style={styles.featureTitle}>Browse Restaurants</div>
          <div style={styles.featureDesc}>Find nearby restaurants and explore their menus in one place.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>🛒</div>
          <div style={styles.featureTitle}>Place Orders</div>
          <div style={styles.featureDesc}>Order your favorite dishes in just a few clicks.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>🚴‍♂️</div>
          <div style={styles.featureTitle}>Track Delivery</div>
          <div style={styles.featureDesc}>Stay updated with real-time delivery tracking.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
