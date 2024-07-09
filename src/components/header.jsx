import React from 'react';
import icon from './Icon.png'; // Adjust the path as necessary

function Header() {
  return (
    <header className="bg-custom-gray text-white h-16 flex items-center justify-between">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex items-center">
        <img src={icon} alt="Icon" className="h-16 w-auto" />
      </div>
    </header>
  );
}

export default Header;