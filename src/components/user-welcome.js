import React from 'react';
import './user-welcome.css';

export class UserWelcome extends React.Component {

    render(props) {
        return (
            <div className="user-welcome">
                <p>Welcome, {this.props.firstname}</p>
            </div>
        );
    }
}

export default UserWelcome;