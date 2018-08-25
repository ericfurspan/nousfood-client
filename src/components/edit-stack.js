import React from 'react';
import { saveStack } from '../actions/user';
import { connect } from 'react-redux';
import ConfirmAction from './confirm-action';
import { Field, reduxForm, focus } from 'redux-form';
import { required, nonEmpty, isTrimmed } from '../validators';
import {updateStack} from '../actions/user'
import Input from './input';
import NootropicLibrary from './nootropic-library';

class EditStack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempStack: {
                name: this.props.stack.name,
                description: this.props.stack.description,
                contents: this.props.stack.contents
            },
            error: {
                message: null
            }
        }
    }
    switchMode = (type) => {
        this.props.switchMode('view')
    }
    updateStack = () => {
        return this.props
            .dispatch(updateStack(this.state.tempStack, this.props.stack.code))
    }
    handleChange = (e) => {
        const updatedStack = Object.assign({}, this.state.tempStack, {[e.target.name]: e.target.value})
        this.setState({
            tempStack: updatedStack
        })
    }
    addNoopToTempStack = (code) => {
        // add nootropic to 'contents' array
        // lookup nootropic data using code
        let noopData = this.props.nootropics.find(noop => noop.code === code)

        const updatedNoops = [...this.state.tempStack.contents, noopData]

        this.setState({
            tempStack: {contents: updatedNoops}
        })
    }
    removeNoopFromTempStack = (code) => {
        const updatedNoops = this.state.tempStack.contents.filter(e => e.code !== code);

        this.setState({
            tempStack: {contents: updatedNoops}
        })
    }
    render() {
        console.log(this.props)
        const saveButton = <div onClick={() => this.updateStack()} className="pointer blue-hover"><i className="material-icons">save</i><span>Save</span></div>
        const cancelButton = <div onClick={() => this.switchMode('view')} className="pointer red-hover"><i className="material-icons">cancel</i><span>Cancel</span></div>
        
        const selectedNoopCodes = this.state.tempStack.contents.map(x => x.code)

        let error;
        if (this.props.error) {
            error = (
                <div className="red" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        
        return (
            
            <div className="stack align-left">
                <h2 className="align-center">Edit mode</h2>
                <div className="stack-container">
                    <form 
                        className="form"
                        onSubmit={this.props.handleSubmit(values => this.updateStack(values))}
                    >
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            label="Name"
                            type="text"
                            name="name"
                            defaultValue={this.state.tempStack.name}
                        /><br/>
                        <label htmlFor="description">Description</label>
                        <textarea
                            onChange={(e) => this.handleChange(e)}
                            label="Description"
                            type="text"
                            name="description"
                            defaultValue={this.state.tempStack.description}
                        /><br/>
                        <p>Nootropics</p><br/>
                        <NootropicLibrary
                            show={true}
                            nootropics={this.props.nootropics}
                            selectable={true}
                            selectedNoopCodes={selectedNoopCodes}
                            selectNoop={(code) => {this.addNoopToTempStack(code)}} 
                            deSelectNoop={(code) => {this.removeNoopFromTempStack(code)}}
                        />
                        {error}
                    </form>  
                    {/*
                        <p><span className="stack-header">Contents:</span> </p><br/>
                        <ul>
                        {this.props.data.contents.map( (element, index) => 
                            <li key={index}>{element.name}</li>
                        )}
                        </ul> 
                    */}

                </div>
                <div className="modal-btn-container">
                    {saveButton}
                    {cancelButton}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    nootropics: state.global.nootropics,
})

EditStack = reduxForm({
    form: 'editStack'
})(EditStack);

export default connect(mapStateToProps)(EditStack);