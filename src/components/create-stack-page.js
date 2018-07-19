import React from 'react';
import { connect } from 'react-redux';
//import { withRouter, Redirect } from 'react-router-dom';
import CreateStackForm from './create-stack-form/create-stack-form';

export class CreateStackPage extends React.Component {
    render() {
        if (!this.props.loggedIn) {
            //return <Redirect to="/login" />;
        }
        return (
            <div className="create-stack"> 
                <header>
                    <h1>Create a stack!</h1>
                </header>
                
                <CreateStackForm />

            </div>
        );
    }
}


  
export default CreateStackPage;



