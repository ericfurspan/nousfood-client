import React from 'react';
import ArrowForward from '../../assets/images/arrow-forward.svg';
import ArrowBack from '../../assets/images/arrow-back.svg';

class StackDescInput extends React.Component {
    handleNext = () => {
        const description = this.state && this.state.description ? this.state.description : this.props.fieldValues.description || '';
        let data = { description }
        this.props.saveAndContinue(data)
    }
    handleChange = (e) => {
        if (e.key === 'Enter') {
            this.handleNext();
        }
        this.setState({
            description: e.target.value
        })
    }
    goBack = () => {
        this.props.previousStep()
    }
    render() {
        return (
            <div>
                <p>As the author of this stack, please share a description of how you
                   would characterize your experience with it.</p>
                <input
                    tabIndex="1"
                    type="text" 
                    name="stackDescription"
                    placeholder="Author description"
                    defaultValue={this.props.fieldValues.description}
                    onChange={this.handleChange}
                    onKeyPress={this.handleChange}
                /><br/>
                <div className="nav-item">
                    <img 
                        onClick={this.goBack}
                        src={ArrowBack} alt="arrow-back" 
                    />Back
                </div>
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

export default StackDescInput;



                       