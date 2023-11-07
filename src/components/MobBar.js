import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import './mobbar.css';

function MobBar() {
  return (
    <div className="action-bar">
      <FontAwesomeIcon icon={faHome} />
      <button className="btn-add">
        <FontAwesomeIcon icon={faHeart} size='lg' />
      </button>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default MobBar;
