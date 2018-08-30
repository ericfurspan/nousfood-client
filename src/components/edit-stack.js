import React from 'react';
import { connect } from 'react-redux';
import ConfirmAction from './confirm-action';
import { reduxForm } from 'redux-form';
import { updateStack, createStack } from '../actions/user'
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
    completeFork = () => {
        return this.props
            .dispatch(createStack(this.state.tempStack))
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
        const noopData = this.props.nootropics.find(noop => noop.code === code)

        const updatedNoops = [...this.state.tempStack.contents, noopData]

        const updatedStack = Object.assign({}, this.state.tempStack, {contents: updatedNoops})

        this.setState({
            tempStack: updatedStack
        })
    }
    removeNoopFromTempStack = (code) => {
        const updatedNoops = this.state.tempStack.contents.filter(e => e.code !== code);
        
        const updatedStack = Object.assign({}, this.state.tempStack, {contents: updatedNoops})

        this.setState({
            tempStack: updatedStack
        })
    }
    render() {

        let saveButton, completeForkButton, cancelButton;

        if(this.props.mode === 'fork') {
            completeForkButton = ( <ConfirmAction
                children={<div className="pointer blue-hover"><i className="material-icons">call_split</i></div>}
                confirmTrue={() => this.completeFork()}
            /> )
        } 
        else if(this.props.mode === 'edit') {
            saveButton = ( <ConfirmAction
                children={<div className="pointer blue-hover"><i className="material-icons">save</i></div>}
                confirmTrue={() => this.updateStack()}
            /> )
        }

        cancelButton = <div onClick={() => this.switchMode('view')} className="pointer red-hover"><i className="material-icons">cancel</i></div>
        
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
                <h2 className="align-center">{this.props.mode} mode</h2>
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
                </div>
                <div className="modal-btn-container">
                    {saveButton}
                    {completeForkButton}
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