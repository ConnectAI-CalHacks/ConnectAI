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
    <div className='container'>
        <div className="form-container">
      <h1 className="form-title">Lemme talk to a HUMAN!</h1>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="myName" className="form-label">My Name:</label>
          <input
            type="text"
            id="myName"
            name="myName"
            className="form-input"
            value={formData.myName}
            onChange={handleChange}
            placeholder='John Doe'
          />
        </div>
        <div className="form-group">
          <label htmlFor="myPhoneNum" className="form-label">My Phone Number:</label>
          <input
            type="text"
            id="myPhoneNum"
            name="myPhoneNum"
            className="form-input"
            value={formData.myPhoneNum}
            onChange={handleChange}
            placeholder='1234567890'
          />
        </div>
        <div className="form-group">
          <label htmlFor="callerName" className="form-label">Caller Name:</label>
          <input
            type="text"
            id="callerName"
            name="callerName"
            className="form-input"
            value={formData.callerName}
            onChange={handleChange}
            placeholder='Chase Bank'
          />
        </div>
        <div className="form-group">
          <label htmlFor="callerPhoneNum" className="form-label">Caller Phone Number:</label>
          <input
            type="text"
            id="callerPhoneNum"
            name="callerPhoneNum"
            className="form-input"
            value={formData.callerPhoneNum}
            onChange={handleChange}
            placeholder='1234567890'
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder='Ex: I need help with creating a new checkings account!'
          />
        </div>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}
