import React from 'react';
import Spinner from '../assets/images/spinner.gif';

export default class LoadingPage extends React.Component {

    render() {
        return (
            <div className="full-width full-height br-blue">
                <p className="white bold force-center">NousFood...</p>
                <img src={Spinner} id="spinner" alt="spinner"/>
            </div>
        );
    }
}
