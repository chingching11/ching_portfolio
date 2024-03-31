import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bottom-box">
      <p className="copyright text-sm">&copy; {currentYear} Ching Ching Kao</p>
    </div>
  );
};

export default Footer;
