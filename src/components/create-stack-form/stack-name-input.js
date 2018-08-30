import React from 'react';
import TextField from '@material-ui/core/TextField';

class StackNameInput extends React.Component {
    
    handleNext = () => {
        const name = this.state && this.state.name ? this.state.name : this.props.fieldValues.name || '';
        if(name.length < 3) {
            this.props.handleError('Please enter a longer name')
        } else {
            this.props.handleError(null);
            let data = { name };
            this.props.saveAndContinue(data);
        }
    }
    handleChange = (e) => {
        if (e.key === 'Enter') {
            this.handleNext();
        }
        this.setState({
            name: e.target.value
        })
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleNext();
        }
    };
    render() {
        let error;
        if(this.props.error) {
            error = <div className="red" aria-live="polite">
                        {this.props.error}
                    </div>
        }
        return (
            <div>
                <h4>Please enter a name for your stack</h4><br/>
                {error}
                <TextField 
                    tabIndex="1"
                    type="text"
                    name="stackName"
                    className="full-width"
                    placeholder="Name"
                    defaultValue={this.props.fieldValues.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleChange}
                />
                <div className="nav-item">
                <i className="material-icons icon-lg" onClick={this.handleNext}>arrow_forward</i>
                    Next
                </div>
            </div>
        )
    }
}

export default StackNameInput;


