import React from 'react';
import './ErrorAlert.css'; // Create a CSS file for styling

const ErrorAlert = ({ message, onClose }) => {
  return (
    <div className="error-alert">
      <span>{message}</span>
      <button onClick={onClose} className="close-button">X</button>
    </div>
  );
};

export default ErrorAlert;