import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#8D6F64',
      backgroundImage: `linear-gradient(rgba(228, 231, 220, 0.6), rgba(111, 155, 216, 0.6)),url('/images/back.jpg')`,
      padding: '15px 30px',
    },
    logo: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '22px',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
    }
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>YumBasket</Link>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/restaurants" style={styles.link}>Restaurants</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/signin" style={styles.link}>Sign In</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
