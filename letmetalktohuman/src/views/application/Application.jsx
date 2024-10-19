import React, { useState } from 'react';
import './AppStyles.css';

export default function IVRAgentComponent() {
  const [formData, setFormData] = useState({
    myName: '',
    myPhoneNum: '',
    callerName: '',
    callerPhoneNum: '',
    description: ''
  });
  const [response, setResponse] = useState(''); // To store the assistant's response

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { callerPhoneNum, description } = formData;

    // Ensure the phone number has a country code
    const formattedCallerPhoneNum = callerPhoneNum.startsWith('+')
      ? callerPhoneNum
      : `+1${callerPhoneNum}`; // Assuming US country code, replace if necessary

    const callPayload = {
      phoneNumberId: 'fcc60a94-7078-4d08-9084-589ae478e0c4',  // Replace with your actual phone number ID
      assistantId: '34393b9a-ac80-4661-9b9f-0634b7fd2aeb',  // Your IVR assistant ID
      customer: {
        number: formattedCallerPhoneNum,  // Caller phone number from the form
      },
      type: 'outboundPhoneCall',
      // assistant: {
      //   model: {
      //     provider: 'openai', // LLM provider to assist with IVR
      //     model: 'gpt-3.5-turbo', // Replace with a valid model name
      //     messages: [
      //       {
      //         role: 'system',
      //         content: `You are an agent assisting a caller in navigating a company's phone menu. You are helping the caller reach customer service to address the issue: ${description}. You will only respond with the correct number of the option they should press on the phone. Your goal is to wait until the caller has finished listening to the entire menu, and then respond with the correct option.`,
      //       },
      //     ],
      //   },
      //   dialKeypadFunctionEnabled: true,  // Enable DTMF tone dialing
      // },
    };

    try {
      // Make the call and send instructions to the assistant
      const callResponse = await fetch('/call', {
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
      setResponse(`Call initiated successfully: ${JSON.stringify(callData)}`);
      
    } catch (error) {
      console.error('Error handling the call:', error);
      setResponse('Error handling the call.');
    }
  };

  return (
    <div>
      <h1>Welcome to the IVR Assistant Page!</h1>
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
          <label>Caller Name (e.g., Best Buy):</label>
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
          <label>Description (What do you need?):</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display the assistant's response */}
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
