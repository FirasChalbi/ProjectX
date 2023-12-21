import React from 'react';
import { Link } from 'react-router-dom';
import imgSvg from '../image/img.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import homeImage from '../image/home.png'; // Assuming you have the correct path to the home image
import './mobbar.css';

function MobBar() {
  return (
    <div className="action-bar">
      <Link to="/">
        <img src={homeImage} alt="Home Icon" style={{ height: "35px", width: "35px", marginTop:"7px" }} />
      </Link>
      <Link to="/lists">
        <FontAwesomeIcon icon={faHeart} size='lg' color='black' />
      </Link>
      <Link to="/Deals">
      <svg className="icon">
        <use xlinkHref={`${imgSvg}#svg_deals`} />
      </svg>
      </Link>
      <Link to="/Menu">
        <FontAwesomeIcon icon={faBars} color='black'/>
      </Link>
      
    </div>
  );
}

export default MobBar;
