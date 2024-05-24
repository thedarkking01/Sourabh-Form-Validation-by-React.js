// src/components/SuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <h2>Submitted Data:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default SuccessPage;
