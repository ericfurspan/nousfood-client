import React from 'react';
import logo from '../assets/images/blue-brain.png'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo" onClick={this.props.onDrawerToggle(true)}/>
            </div>
        )
    }
}
      
export default Logo;

