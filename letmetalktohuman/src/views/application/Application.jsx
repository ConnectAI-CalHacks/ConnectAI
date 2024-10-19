import React, { useState } from 'react';
import './AppStyles.css';
import NavBar from '../navbar/NavBar';
import ErrorAlert from './ErrorAlert';

export default function Component() {
  const [formData, setFormData] = useState({
    myName: '',
    myPhoneNum: '',
    callerName: '',
    callerPhoneNum: '',
    description: ''
  });

  const [nameError, setNameError] = useState(false);  // To track validation error

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Reset the error if the user is typing in the myName field
    if (name === 'myName' && nameError) {
      setNameError(false);  // Clear error when typing starts again
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/i;

    // Validate myName using the regex
    if (!nameRegex.test(formData.myName)) {
      setNameError(true); // Set error if regex doesn't match
    } else {
      setNameError(false); // Clear error if regex matches
      console.log(formData);
      // Proceed with form submission logic here
    }
  };

  return (
    <><NavBar/>
    <div className='container'>
      <NavBar />
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
            {nameError && (
              <ErrorAlert 
                message="Please enter a valid name (Firstname Lastname)." 
                onClose={() => setNameError(false)} // Close button to clear error
              />
            )}
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
              placeholder='Ex: I need help with creating a new checking account!'
            />
          </div>
          <button type="submit" className="form-submit-button">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}