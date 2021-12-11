import React from 'react';
import logo from '../assets/logo.svg';
export const LogoComponent = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='logo' className='logo-image' />
    </div>
  );
};
