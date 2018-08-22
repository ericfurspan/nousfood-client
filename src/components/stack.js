import React from 'react';
import { saveStack, deleteStack, createPublicStack, deletePublicStack } from '../actions/user';
import { connect } from 'react-redux';
import './styles/tooltip.css';
import Tooltip from './tooltip';

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
        console.log(this.state)
        const { code } = this.props.data;
        let saveButton, deleteButton, forkButton, makePublicButton, deleteFromPublicButton, closeModalBtn;
        if(this.props.saved && this.props.env === 'user') {
            deleteButton = (
                <i className="material-icons red" onClick={() => this.deleteStack(code)}>delete_forever</i>
            )
        }
        if(this.props.data.author === this.props.user.account.username && this.props.public) {
            deleteFromPublicButton = (
                <i className="material-icons red" onClick={() => this.deletePublicStack(code)}>cloud_off</i>
            )
        }
        if(!this.props.saved && this.props.env === 'global') {
            saveButton = (
                <button onClick={() => this.saveStack(code)}>Save</button>
            )
        }
        if(!this.props.public && this.props.env === 'user') {
            makePublicButton = (
                <i className="material-icons blue" onClick={() => this.publicizeStack(code)}>share</i>
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
                    <Tooltip message={'Fork'} position={'top'}>{forkButton}</Tooltip>
                    <Tooltip message={'Share with public'} position={'top'}>{makePublicButton}</Tooltip>
                    <Tooltip message={'Delete'} position={'top'}>{deleteButton}</Tooltip>
                    <Tooltip message={'Unshare with public'} position={'top'}>{deleteFromPublicButton}</Tooltip>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
})

export default connect(mapStateToProps)(Stack);

