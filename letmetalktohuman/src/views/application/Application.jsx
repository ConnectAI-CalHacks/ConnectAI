import React, { useState } from 'react';
import './AppStyles.css';
import NavBar from '../navbar/NavBar';

export default function IVRAgentComponent() {
  const [formData, setFormData] = useState({
    myName: '',
    myPhoneNum: '',
    callerName: '',
    callerPhoneNum: '',
    description:''
  });
  const [response, setResponse] = useState(''); // To store the assistant's response

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { callerPhoneNum, description, myPhoneNum, callerName } = formData;

    // Ensure the phone number has a country code
    const formattedCallerPhoneNum = callerPhoneNum.startsWith('+')
      ? callerPhoneNum
      : `+1${callerPhoneNum}`; // Assuming US country code, replace if necessary

    const formattedMyPhoneNum = myPhoneNum.startsWith('+')
      ? myPhoneNum
      : `+1${myPhoneNum}`; // Assuming US country code, replace if necessary

    const callPayload = {
      phoneNumberId: 'fcc60a94-7078-4d08-9084-589ae478e0c4',  // Replace with your actual phone number ID
      customer: {
        number: formattedCallerPhoneNum,  // Caller phone number from the form
      },
      type: 'outboundPhoneCall',
      assistant: {
        model: {
          provider: 'groq', // LLM provider to assist with IVR
          model: 'llama3-groq-8b-8192-tool-use-preview', // Replace with a valid model name
          messages: [
            {
              role: 'user',
              content: `" You are a customer. Your role is to act as the customer during the call, helping them resolve their issue with the customer service representative. You will simulate the customer's voice responses while navigating the call, and you are not an actual customer service representative. Customer Profile: You are a customer calling ${callerName}. The customer issue is as follows: '${description}'. Respond naturally to prompts as if you are the customer experiencing the issue. How to Handle Questions: Always respond directly and succinctly to any questions asked by the customer service representative. If they ask for account numbers, product IDs, or other specific details, refer to the provided customer data or issue as appropriate. Example responses: 'I’m having an issue with ${description}. Can you help with that?' If they ask for further details or clarifications: 'I’m not sure what’s causing the problem, but it’s affecting ssomethign something. Can you assist?' Listening for Specific Phrases: Pay close attention to the customer service representative's dialogue. As soon as you hear the phrase 'Thank you for calling' (or a similar end-of-call statement), immediately stop interacting and say: 'PLEASE HOLD.' Once this phrase is detected, initiate the following function: transferCall()e and Focus: Maintain a polite and calm tone throughout the call, mirroring typical customer interactions. Avoid answering questions that were not asked, and do not introduce unrelated information. Stick to the issue description and avoid providing excessive details unless requested. Error Handling: In case of confusion or ambiguity, always respond with: 'I’m not sure, could you clarify that for me?' to prompt the customer service representative to repeat or explain further. If the representative asks a question you don’t have information for, say: 'I don’t have that information on hand right now, but the main issue is ${description}.' Final Transfer:. Ton Remember, only when you hear 'Thank you for calling' or similar phrases, immediately say: 'PLEASE HOLD' and execute transferCall().
              
              Also, do not interupt me when someone is speaking. let them finish before you reply"
`,
            },
          ],
          
          
        },
        startSpeakingPlan: {
          "waitSeconds": 1.5,
          "smartEndpointingEnabled": true,
          "transcriptionEndpointingPlan": {
            "onPunctuationSeconds": 1.5,
            "onNoPunctuationSeconds": 1.8,
            "onNumberSeconds": 1.5
          }
        },
        forwardingPhoneNumber: formattedMyPhoneNum,  // My phone number from the form
      },
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
