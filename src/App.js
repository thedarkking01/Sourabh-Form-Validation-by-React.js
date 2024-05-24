// src/App.js
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import SuccessPage from './components/SuccesPage';

const App = () => (
  <Routes>
    <Route path="/" element={<RegistrationForm />} />
    <Route path="/success" element={<SuccessPage />} />
  </Routes>
);

export default App;