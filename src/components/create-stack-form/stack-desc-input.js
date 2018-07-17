import React from 'react';
import { required, nonEmpty } from '../../validators';

class StackDescInput extends React.Component {
    saveAndContinue(e) {
        const stackDesc = this.state && this.state.stackDesc ? this.state.stackDesc : this.props.fieldValues.stackDesc || '';
        let data = { stackDesc }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    goBack(e) {
        this.props.previousStep()
    }
    handleChange(e) {
        this.setState({
            stackDesc: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="stackDescription"
                    placeholder="Brief description"
                    defaultValue={this.props.fieldValues.stackDesc}
                    onChange={this.handleChange.bind(this)}
                    validate={[required, nonEmpty]}
                /><br/>
                <button
                    type="button"
                    onClick={this.goBack.bind(this)}
                >   Back
                </button>
                <button
                    type="button"
                    disabled={this.props.pristine || this.props.submitting}
                    onClick={this.saveAndContinue.bind(this)}
                >   Continue
                </button>
            </div>
        )
    }
}

export default StackDescInput;



                       