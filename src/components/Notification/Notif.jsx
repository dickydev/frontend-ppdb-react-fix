/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTimes } from "react-icons/fa";

const Notification = ({ type, message, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`mx-2 flex ${bgColor} px-4 py-2 rounded-lg text-white items-center justify-between`}>
      <p>{message}</p>
      {onClose && (
        <button onClick={onClose} className="ml-4">
          <FaTimes className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Notification;

