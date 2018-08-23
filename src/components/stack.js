import React from 'react';
import { saveStack, deleteStack, createPublicStack, deletePublicStack } from '../actions/user';
import { connect } from 'react-redux';
import './styles/tooltip.css';
import Tooltip from './tooltip';
import ConfirmAction from './confirm-action';

class Stack extends React.Component {
    deleteStack = (code) => {
        this.props.dispatch(deleteStack(this.props.data.code))
        this.props.exit()
    }
    saveStack = (code) => {
        this.props.dispatch(saveStack(this.props.data))
        this.props.exit()
    }
    forkStack = (code) => {
        console.log(`forking ${code}`);
        this.props.exit()
    }
    publicizeStack = (code) => {
        this.props.dispatch(createPublicStack(this.props.data))
        this.props.exit()
    }
    deletePublicStack = (code) => {
        this.props.dispatch(deletePublicStack(code, this.props.data.author))
        this.props.exit()
    }

    render() {
        const { code } = this.props.data;
        let saveButton, deleteButton, forkButton, makePublicButton, deleteFromPublicButton, closeModalBtn;
        if(this.props.saved && this.props.env === 'user') {
            deleteButton = (
                <ConfirmAction
                  children={<div className="pointer red-hover"><i className="material-icons">delete_forever</i><span>Delete</span></div>}
                  confirmTrue={() => this.deleteStack(code)}
                />
            )
        }
        if(this.props.data.author === this.props.user.account.username && this.props.public) {
            deleteFromPublicButton = (
                <div onClick={() => this.deletePublicStack(code)} className="pointer red-hover"><i className="material-icons">cloud_off</i><span>Unshare with public</span></div>
            )
        }
        if(!this.props.saved && this.props.env === 'global') {
            saveButton = (
                <div onClick={() => this.saveStack(code)} className="pointer blue-hover"><i className="material-icons">save</i><span>Save</span></div>
            )
        }
        if(!this.props.public && this.props.env === 'user') {
            makePublicButton = (
                <div onClick={() => this.publicizeStack(code)} className="pointer green-hover"><i className="material-icons">cloud_queue</i><span>Share with public</span></div>
            )
        }

        /*
        forkButton = (
            <button onClick={() => this.forkStack(code)} id="fork-stack-btn">Fork</button>
        )*/
        
        
        return (
            <div className="stack">
                <div className="stack-container">
                    <p><span className="stack-header">Author:</span> {this.props.data.author}</p><br/>
                    <p><span className="stack-header">Description:</span> {this.props.data.description}</p><br/>
                    <p><span className="stack-header">Recommendation:</span> {this.props.data.directive}</p><br/>
                    <p><span className="stack-header">Contents:</span> </p><br/>
                    <ul>
                        {this.props.data.contents.map( (element, index) => 
                            <li key={index}>{element.name}</li>
                        )}
                    </ul> 
                </div>
                <div className="modal-btn-container">
                    {saveButton}
                    {forkButton}
                    {makePublicButton}
                    {deleteFromPublicButton}
                    {deleteButton}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
})

export default connect(mapStateToProps)(Stack);

