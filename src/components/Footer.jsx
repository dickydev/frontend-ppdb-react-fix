import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-2xl text-gray-900 py-4 rounded-xl left-0 right-0 mx-4">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright Text */}
        <p className="text-md">
          Copyright © 2025. All rights reserved LEO Group.
        </p>
        {/* Version Info */}
        <p className="text-sm mt-1">
          Versi 1.0.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;