import React from 'react';
import './SemiCircleIcon.css'; // Make sure to import the CSS file for styling

const SemiCircleIcon = ({  icon }) => {
  return (
    <div className='semi-circle-container'>
      <div className="semi-circle">
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default SemiCircleIcon;
