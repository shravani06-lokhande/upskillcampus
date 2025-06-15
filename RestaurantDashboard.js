// RestaurantDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const RestaurantDashboard = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>About Us</h1>

      <div style={styles.row}>
        <div style={styles.textBlock}>
          <h2 style={styles.subheading}>Who We Are</h2>
          <p style={styles.text}>YumBasket is a leading online food delivery platform connecting customers with their favorite restaurants.</p>
          <h2 style={styles.subheading}>Our Mission</h2>
          <p style={styles.text}>To revolutionize the way people experience food by offering convenient, reliable, and diverse dining options delivered straight to their doorsteps.</p>
        </div>
        <div style={styles.imageBox}>
          <img src="/images/food.jpg" alt="About Us" style={styles.image} />
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.imageBox}>
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80" alt="What We Offer" style={styles.image} />
        </div>
        <div style={styles.textBlock}>
          <h2 style={styles.subheading}>What We Offer</h2>
          <ul style={styles.list}>
            <li>Wide selection of cuisines: Indian, Italian, American, Japanese, and more.</li>
            <li>Real-time order tracking and dynamic ETA.</li>
            <li>Secure and easy payment methods.</li>
            <li>Personalized recommendations and offers.</li>
          </ul>
          <h2 style={styles.subheading}>Our Reach</h2>
          <p style={styles.text}>Currently operating in major cities, we're constantly expanding to bring great food to even more people.</p>
        </div>
      </div>

      <div style={styles.centerBlock}>
        <h2 style={styles.subheading}>Join Us</h2>
        <p style={styles.text}>Are you a restaurant? <Link to="/partner">Partner with us</Link></p>
        <p style={styles.text}>Looking to deliver? <Link to="/rider">Become a rider</Link></p>
      </div>

      <div style={styles.contactSection}>
        <h2 style={styles.subheading}>Contact Us</h2>
        <p style={styles.text}>Email: <a href="mailto:support@yumbasket.com" style={styles.link}>support@yumbasket.com</a></p>
        <p style={styles.text}>Phone: +1 (800) 123-4567</p>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTwitter /></a>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} YumBasket. All rights reserved.</p>
        <p>Enjoy delicious meals delivered to your door — fast, hot, and fresh!</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '2rem',
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  },
  textBlock: {
    flex: '1',
    minWidth: '300px',
    padding: '1rem'
    
  },
  imageBox: {
    flex: '1',
    minWidth: '50px',
    padding: '1rem'
    
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    objectFit: 'cover'
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#34495e',
    marginBottom: '0.5rem'
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  list: {
    paddingLeft: '1.5rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  centerBlock: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  contactSection: {
    textAlign: 'center',
    marginTop: '3rem',
    marginBottom: '3rem'
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem'
  },
  icon: {
    color: '#2c3e50',
    fontSize: '1.8rem',
    transition: 'transform 0.3s ease, color 0.3s ease'
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none'
  },
  footer: {
    textAlign: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid #ccc',
    fontSize: '0.9rem',
    color: '#555'
  }
};

export default RestaurantDashboard;
