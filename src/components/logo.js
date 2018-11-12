import React from 'react';
import logo from '../assets/images/blue-brain.png'

export function Logo(props) {
    return (
        <div className="cursor">
            <img src={logo} alt="logo" onClick={() => window.scrollTo(0, 0)} />
        </div>
    )  
}
      
export default Logo;

