import React from 'react';
import { required, nonEmpty } from '../../validators';

class StackNameInput extends React.Component {
    saveAndContinue(e) {
        const stackName = this.state && this.state.stackName ? this.state.stackName : this.props.fieldValues.stackName || '';
        let data = { stackName }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    handleChange(e) {
        this.setState({
            stackName: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="stackName"
                    placeholder="Stack name"
                    defaultValue={this.props.fieldValues.stackName}
                    onChange={this.handleChange.bind(this)}
                    validate={[required, nonEmpty]}
                /><br/>
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
      

export default StackNameInput;


