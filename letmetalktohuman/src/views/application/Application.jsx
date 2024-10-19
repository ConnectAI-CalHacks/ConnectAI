import React, { useState } from 'react';
import './AppStyles.css';

export default function Component() {
  const [formData, setFormData] = useState({
    myName: '',
    myPhoneNum: '',
    callerName: '',
    callerPhoneNum: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div>
      <h1>Welcome to the application page!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>My Name:</label>
          <input
            type="text"
            name="myName"
            value={formData.myName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>My Phone Number:</label>
          <input
            type="text"
            name="myPhoneNum"
            value={formData.myPhoneNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Caller Name:</label>
          <input
            type="text"
            name="callerName"
            value={formData.callerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Caller Phone Number:</label>
          <input
            type="text"
            name="callerPhoneNum"
            value={formData.callerPhoneNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
