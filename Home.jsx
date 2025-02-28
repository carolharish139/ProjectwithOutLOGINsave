import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarList from '../components/CarList';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // שליחת בקשה לשרת Node.js כדי להביא את כל הרכבים
    axios.get('http://localhost:3001/cars/cars')
      .then(response => {
        setCars(response.data);  // עדכון רשימת הרכבים
      })
      .catch(error => {
        console.error('There was an error fetching the car data!', error);
      });
  }, []);  // הפעולה תתבצע פעם אחת בזמן טעינת העמוד

  return (
    <div className="home">
      <h1>Car Rental</h1>
      <div className="add-car-button">
        <Link to="/add-car">
          <button>Add Car</button>
        </Link>
      </div>
      <CarList cars={cars} />
    </div>
  );
}

export default Home;
