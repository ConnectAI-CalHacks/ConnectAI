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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { callerPhoneNum } = formData;

    // Ensure the phone number has a country code
    const formattedCallerPhoneNum = callerPhoneNum.startsWith('+')
      ? callerPhoneNum
      : `+1${callerPhoneNum}`; // Assuming US country code, replace if necessary

    const callPayload = {
      phoneNumberId: 'fcc60a94-7078-4d08-9084-589ae478e0c4',  // Replace with your actual phone number ID
      assistantId: '5d379499-2f41-4120-89c5-2a73abc50570',  // Your correct assistant ID
      customer: {
        number: formattedCallerPhoneNum,  // Caller phone number from the form
      },
      type: 'outboundPhoneCall'
    };

    try {
      // Make the initial call to callerPhoneNum
      const callResponse = await fetch('https://api.vapi.ai/call', { // Full API URL
        method: 'POST',
        headers: {
          Authorization: 'Bearer 2ac772ff-5902-40bd-af27-cc01063b776e',  // Replace with your actual API key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(callPayload),
      });

      if (!callResponse.ok) {
        const errorDetails = await callResponse.json(); // Get error details
        console.error('Error Details:', errorDetails);
        throw new Error(`Error initiating the call: ${errorDetails.message}`);
      }

      const callData = await callResponse.json();
      console.log('Call initiated successfully:', callData);
      
    } catch (error) {
      console.error('Error handling the call:', error);
    }
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
