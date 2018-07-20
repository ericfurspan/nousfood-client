import React from 'react';
import { saveStack, deleteStack } from '../actions/user';
import { connect } from 'react-redux';

class Stack extends React.Component {
    deleteStack = (code) => {
        this.props.dispatch(deleteStack(this.props.data.code))
    }
    saveStack = (code) => {
        this.props.dispatch(saveStack(this.props.data))
    }
    render() {
        const { code } = this.props.data;
        let saveButton, deleteButton;
        
        if(this.props.saved) {
            deleteButton = (
                <button onClick={() => this.deleteStack(code)} id="delete-stack-btn">Delete</button>
            )
        } else {
            saveButton = (
                <button onClick={() => this.saveStack(code)} id="save-stack-btn">Save</button>
            )
        }
        
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
                            <li key={index}>{element}</li>
                        )}
                    </ul> 
                </div>
                {deleteButton}
                {saveButton}
            </div>
        )
    }
}


export default connect()(Stack);

