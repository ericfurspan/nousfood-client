import React from 'react';
import { connect } from 'react-redux';
//import { withRouter, Redirect } from 'react-router-dom';
import CreateStackForm from './create-stack-form/create-stack-form';

export class CreateStackPage extends React.Component {
    addNoopToTempStack(code) {
        console.log(`adding ${code} to temp stack`);
        // add nootropic code to 'create-stack-contents' array
        // highlight nootropic card green to show as selected
        //this.props.dispatch(this.addNoopToTempStack(code))
    }
    removeNoopFromTempStack(code) {
        console.log(`removed ${code} from temp stack`);
    }
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

const mapStateToProps = state => ({
    tempStack: state.user.tempStack
});
  
export default connect(mapStateToProps)(CreateStackPage);



