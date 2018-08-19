import React from 'react';
import logo from '../assets/images/blue-brain.png'

export function Logo(props) {
    return (
        <div className="logo">
            <img src={logo} alt="logo" onClick={props.onDrawerToggle(true)}/>
        </div>
    )  
}
      
export default Logo;

