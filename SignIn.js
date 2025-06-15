import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const styles = {
    background: {
      backgroundImage: `linear-gradient(rgba(232, 225, 234, 0.6), rgba(129, 169, 224, 0.6)),url('/images/picture.png')`, // You can change this URL to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Full viewport height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      maxWidth: '400px',
      padding: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent for better readability
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '6px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#000001',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    text: {
      marginTop: '15px',
    },
    link: {
      color: '#ff6b5c',
      textDecoration: 'none',
    },
    message: {
      marginTop: '10px',
      color: 'green',
    },
    error: {
      color: 'red',
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign In</button>
          <p style={styles.text}>
            Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
          </p>
          {message && <p style={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
