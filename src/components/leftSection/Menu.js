import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.css';
const Menu = ({text,icon,active}) => {
    return (
        <div className={`menu ${active ? 'menu--active' : ''}`}>  
        {/* check */}
            <FontAwesomeIcon icon={icon} style={{padding:'20px'}}/>
            <h2>{text}</h2>
        </div>
    )
}

export default Menu