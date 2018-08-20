import React from 'react';
import ArrowForward from '../../assets/images/arrow-forward.svg';
import ArrowBack from '../../assets/images/arrow-back.svg';

class StackDescInput extends React.Component {
    handleNext = () => {
        const description = this.state && this.state.description ? this.state.description : this.props.fieldValues.description || '';
        let wordCount = description.split(' ');
        if(wordCount.length < 3) {
            this.props.handleError('Please enter a few words')
        } else {
            this.props.handleError(null);
            let data = { description }
            this.props.saveAndContinue(data)
        }
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
        let error;
        if(this.props.error) {
            error = <div className="form-error" aria-live="polite">
                        {this.props.error}
                    </div>
        }
        return (
            <div>
                <p>As the author of this stack, please provide a brief description</p>
                <br/>
                {error}
                <textarea 
                    tabIndex="1"
                    rows="5"
                    cols="25"
                    defaultValue={this.props.fieldValues.description}
                    onKeyPress={this.handleChange}
                    placeholder="Author description"
                    name="stackDescription"
                    onChange={this.handleChange} />
                <br/>
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



                       