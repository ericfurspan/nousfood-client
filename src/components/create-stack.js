import React from 'react';
import { connect } from 'react-redux';
import NootropicLibrary from './nootropic-library';
import { Redirect } from 'react-router-dom';
import { addNoopToTempStack } from '../actions/user';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class CreateStack extends React.Component {
    addNoopToTempStack(code) {
        console.log(`adding ${code} to stack`);
        // add nootropic code to 'create-stack-contents' array
        // highlight nootropic card green
        this.props.dispatch(this.addNoopToTempStack(code))
    }
    removeNoopFromTempStack(code) {
        console.log(`removed ${code} from stack`);
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
                <form className="create-stack-form">
                    <label htmlFor="stackName">Stack Name: </label>
                    <input
                        type="text"
                        name="stackName"
                        id="stackName"
                        placeholder="i.e: twilight zen, post-lunch punch"
                        validate={[required, nonEmpty]}
                    />
                </form><br/>
                <NootropicLibrary 
                  selectable={true} 
                  selectNoop={(code) => {this.addNoopToTempStack(code)}} 
                  deSelectNoop={(code) => {this.removeNoopFromTempStack(code)}}/>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    tempStack: state.user.user.tempStack
  });
  
export default connect(mapStateToProps)(CreateStack);



