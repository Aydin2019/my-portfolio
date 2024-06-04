/* Contact.js
 * File name: Contact.js
 * Student's Name: Ajmal Afzalzada
 * StudentID: 301413451
 * Date: June/4th/2024
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    history.push('/');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
