import React from 'react';
import ArrowForward from '../../assets/images/arrow-forward.svg';
import ArrowBack from '../../assets/images/arrow-back.svg';

class StackDirectiveInput extends React.Component {
    handleNext = () => {
        const directive = this.state && this.state.directive ? this.state.directive : this.props.fieldValues.directive || '';
        let data = { directive }
        this.props.saveAndContinue(data)
    }
    goBack = () => {
        this.props.previousStep()
    }
    handleChange = (e) => {
        if (e.key === 'Enter') {
            this.handleNext();
        }
        this.setState({
            directive: e.target.value
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
                    name="stackDirective"
                    placeholder="Recommended directions"
                    defaultValue={this.props.fieldValues.directive}
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
      
export default StackDirectiveInput;





                       