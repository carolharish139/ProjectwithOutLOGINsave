import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetails from './components/CarDetails';
import AddCarForm from './components/AddCarForm';
import EditCarForm from './components/EditCarForm';
import axios from 'axios';

import './App.css';



function App() {

  const [cars, setCars] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3001/cars/cars')
    .then(response => {
      setCars(response.data);
    })
    .catch(error => {
      console.error('There was an error adding the car!', error);
    });
  
  },[])

  const addCar = (car) => {
    setCars((prevCars) => [...prevCars, car]); // מוסיף רכב חדש לרשימה
  };

  const updateCar = (updatedCar) => {
    setCars((prevCars) => prevCars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<CarDetails cars={cars} />} />
          <Route path="/add-car" element={<AddCarForm addCar={addCar} />} />
          <Route path="/edit/:id" element={<EditCarForm cars={cars} updateCar={updateCar} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;