import React from 'react';
import ArrowForward from '../../assets/images/arrow-forward.svg';

class StackNameInput extends React.Component {
    handleNext = () => {
        const name = this.state && this.state.name ? this.state.name : this.props.fieldValues.name || '';
        let data = { name };
        this.props.saveAndContinue(data);
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
        console.log(e.key)
        if (e.key === 'Enter') {
            this.handleNext();
        }
    };
    render() {
        return (
            <div>
                <input 
                    tabIndex="1"
                    type="text"
                    name="stackName"
                    placeholder="Stack name"
                    defaultValue={this.props.fieldValues.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleChange}
                /><br/>
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


