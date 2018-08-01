import React from 'react';
import { saveStack, deleteStack, createPublicStack, deletePublicStack } from '../actions/user';
import { connect } from 'react-redux';

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
        let saveButton, deleteButton, forkButton, makePublicButton, deleteFromPublicButton;
        if(this.props.saved && this.props.env === 'user') {
            deleteButton = (
                <button onClick={() => this.deleteStack(code)} className="btn-red">Delete</button>
            )
        }
        if(this.props.data.author === this.props.user.account.username && this.props.public) {
            deleteFromPublicButton = (
                <button onClick={() => this.deletePublicStack(code)} className="btn-red">Delete from Public</button>
            )
        }
        if(!this.props.saved && this.props.env === 'global') {
            saveButton = (
                <button onClick={() => this.saveStack(code)} className="btn-green">Save</button>
            )
        }
        if(!this.props.public && this.props.env === 'user') {
            makePublicButton = (
                <button onClick={() => this.publicizeStack(code)} className="btn-green">Make public</button>
            )
        }
        /*
        forkButton = (
            <button onClick={() => this.forkStack(code)} id="fork-stack-btn">Fork</button>
        )*/
        
        
        return (
            <div className="stack">
                <h3>{this.props.data.name}</h3><br/>
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
                    {forkButton}
                    {deleteButton}
                    {deleteFromPublicButton}
                    {saveButton}
                    {makePublicButton}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
})

export default connect(mapStateToProps)(Stack);

