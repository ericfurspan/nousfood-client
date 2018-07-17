import React from 'react';
import { required, nonEmpty } from '../../validators';

class StackDirectiveInput extends React.Component {
    saveAndContinue(e) {
        const stackDirective = this.state && this.state.stackDirective ? this.state.stackDirective : this.props.fieldValues.stackDirective || '';
        let data = { stackDirective }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    goBack(e) {
        this.props.previousStep()
    }
    handleChange(e) {
        this.setState({
            stackDirective: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="stackDirective"
                    placeholder="Recommended directions"
                    defaultValue={this.props.fieldValues.stackDirective}
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
      
export default StackDirectiveInput;





                       