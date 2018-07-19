import React from 'react';
import { required, nonEmpty } from '../../validators';

class StackDescInput extends React.Component {
    saveAndContinue = () => {
        const description = this.state && this.state.description ? this.state.description : this.props.fieldValues.description || '';
        let data = { description }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    goBack = () => {
        this.props.previousStep()
    }
    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="stackDescription"
                    placeholder="Brief description"
                    defaultValue={this.props.fieldValues.description}
                    onChange={this.handleChange}
                    validate={[required, nonEmpty]}
                /><br/>
                <button
                    type="button"
                    onClick={this.goBack}
                >   Back
                </button>
                <button
                    type="button"
                    disabled={this.props.pristine || this.props.submitting}
                    onClick={this.saveAndContinue}
                >   Continue
                </button>
            </div>
        )
    }
}

export default StackDescInput;



                       