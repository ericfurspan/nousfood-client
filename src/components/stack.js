import React from 'react';
import { saveStack, deleteStack, createPublicStack, deletePublicStack, copyShareUrl } from '../actions/user';
import { connect } from 'react-redux';
import ConfirmAction from './confirm-action';
import EditStack from './edit-stack';
import {Link} from 'react-router-dom';
import Clipboard from 'clipboard';
import Tooltip from './tooltip';
new Clipboard('div');

class Stack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'view'
        }
    }
    switchMode = (type) => {
        this.setState({mode: type})
    }
    // make 1 toggleSave instead of 2 funcs
    deleteStack = (code) => {
        this.props.dispatch(deleteStack(this.props.data.code))
        this.props.exit()
    }
    saveStack = (code) => {
        this.props.dispatch(saveStack(this.props.data))
        //this.props.exit()
    }
    togglePublic = (code) => {
        if(this.props.public) {
            this.props.dispatch(deletePublicStack(code, this.props.data.author))
        } else {
            this.props.dispatch(createPublicStack(this.props.data))
        }
    }

    render() {
        const { code } = this.props.data;
        let editButton, saveButton, deleteButton, forkButton, togglePublicButton, copyUrlButton, dashboardLink;
        let shareUrl = `${window.location.origin}/${this.props.data.author}/stacks/${code}`

        // User is logged in
        if(this.props.loggedIn) {
        
            if(this.state.mode === 'edit') {
                return (
                    <EditStack
                        mode="edit"
                        stack={this.props.data}
                        switchMode={() => this.switchMode()}
                    />
                )
            }
            if(this.state.mode === 'fork') {
                return (
                    <EditStack 
                        mode="fork"
                        stack={this.props.data}
                        switchMode={() => this.switchMode()}
                    />
                )
            }
            // if this.state.mode === 'view' 
            // ....

            if(this.props.saved && this.props.env === 'user') {
                deleteButton = (
                    <Tooltip
                        position={'top'}
                        message={'Delete'}
                    >
                        <ConfirmAction
                            children={<div className="pointer red-hover"><i className="material-icons">delete_forever</i><span></span></div>}
                            confirmTrue={() => this.deleteStack(code)}
                        />                   
                    </Tooltip>
                )
                if(this.props.data.author === this.props.user.account.username) {
                    editButton = (
                        <Tooltip
                            position={'top'}
                            message={'Edit'}
                        >
                            <div onClick={() => this.switchMode('edit')} className="pointer blue-hover"><i className="material-icons">edit</i><span></span></div>                   
                        </Tooltip>
                    )
                }
            }
            // If the user is the author
            if(this.props.data.author === this.props.user.account.username) {
                // If the stack is public, 
                if(this.props.public) {
                    togglePublicButton = (
                        <Tooltip
                            position={'top'}
                            message={'Unshare with public'}
                        >
                            <div onClick={() => this.togglePublic(code)} className="pointer red-hover"><i className="material-icons">public</i><span></span></div>
                        </Tooltip>
                    )
                } else {
                    togglePublicButton = (
                        <Tooltip
                            position={'top'}
                            message={'Share with public'}
                        >
                            <div onClick={() => this.togglePublic(code)} className="pointer green-hover"><i className="material-icons">public</i><span></span></div>
                        </Tooltip>
                    )
                }
            }
            if(!this.props.saved) {
                saveButton = (
                    <Tooltip
                        position={'top'}
                        message={'Save'}
                    >
                        <div onClick={() => this.saveStack(code)} className="pointer blue-hover"><i className="material-icons">save</i><span></span></div>
                    </Tooltip>
                )

                forkButton = (
                    <Tooltip
                        position={'top'}
                        message={'Fork'}
                    >
                        <div onClick={() => this.switchMode('fork')} className="pointer blue-hover"><i className="material-icons">call_split</i><span></span></div>
                    </Tooltip>                    
                )
            }

            copyUrlButton = (
                <Tooltip
                    position={'top'}
                    message={'Copy Link'}
                >
                    <div data-clipboard-text={shareUrl} onClick={() => {this.props.dispatch(copyShareUrl())}} className="pointer blue-hover"><i className="material-icons">link</i><span></span></div>
                </Tooltip>  
            )
        
        }

        dashboardLink = (
            <div className="align-center">
                <Tooltip
                    position={'top'}
                    message={'Return to Dashboard'}
                >
                    <Link to={"/"}><div className="pointer blue-hover gray"><i className="material-icons">dashboard</i></div></Link>
                </Tooltip>
            </div>
        )

        return (
            <div className="stack align-left">
                <div className="stack-container">
                    <p><span className="stack-header">Author:</span> {this.props.data.author}</p><br/>
                    <p><span className="stack-header">Description:</span> {this.props.data.description}</p><br/>
                    <p><span className="stack-header">Contents:</span> </p><br/>
                    <ul>
                        {this.props.data.contents.map( (element, index) => 
                            <li key={index}>{element.name}</li>
                        )}
                    </ul> 
                </div>
                
                <div className="modal-btn-container">
                    {dashboardLink}
                    {editButton}
                    {saveButton}
                    {forkButton}
                    {copyUrlButton}
                    {togglePublicButton}
                    {deleteButton}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user,
    loggedIn: state.auth.currentUser !== null,
    auth: state.auth
})

export default connect(mapStateToProps)(Stack);

