// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.panNo) errors.panNo = 'PAN Number is required';
    if (!formData.aadharNo) errors.aadharNo = 'Aadhar Number is required';
    return errors;
  };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message if the field is filled
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
    // Re-validate the form whenever there's a change in the form data
    const errors = validateForm();
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/success', { state: formData });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {formErrors.firstName && <span>{formErrors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {formErrors.lastName && <span>{formErrors.lastName}</span>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {formErrors.username && <span>{formErrors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {formErrors.password && <span>{formErrors.password}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {formErrors.phone && <span>{formErrors.phone}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {formErrors.country && <span>{formErrors.country}</span>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="New York">New York</option>
        </select>
        {formErrors.city && <span>{formErrors.city}</span>}
      </div>
      <div>
        <label>PAN Number:</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {formErrors.panNo && <span>{formErrors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar Number:</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {formErrors.aadharNo && <span>{formErrors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={Object.keys(formErrors).length > 0}>Submit</button>
    </form>
  );
};

export default RegistrationForm;
