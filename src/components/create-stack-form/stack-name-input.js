import React from 'react';
import ArrowForward from '../../assets/images/arrow-forward.svg';

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
            error = <div className="form-error" aria-live="polite">
                        {this.props.error}
                    </div>
        }
        return (
            <div>
                <h4>Please enter a name for your stack</h4><br/>
                {error}
                <input 
                    tabIndex="1"
                    type="text"
                    name="stackName"
                    placeholder="Name"
                    defaultValue={this.props.fieldValues.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleChange}
                />
                <div className="nav-item">
                    <img 
                        onClick={this.handleNext}
                        src={ArrowForward} alt="arrow-forward" 
                    />Next
                </div>
            </div>
        )
    }
}

export default StackNameInput;


