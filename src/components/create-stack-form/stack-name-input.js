import React from 'react';
import { required, nonEmpty } from '../../validators';

class StackNameInput extends React.Component {
    saveAndContinue = () => {
        console.log(this.props)
        const name = this.state && this.state.name ? this.state.name : this.props.fieldValues.name || '';
        let data = { name }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="stackName"
                    placeholder="Stack name"
                    defaultValue={this.props.fieldValues.name}
                    onChange={this.handleChange}
                    validate={[required, nonEmpty]}
                /><br/>
                <button
                    type="button"
                    onClick={this.saveAndContinue}
                >   Continue
                </button>
            </div>
        )
    }
}

export default StackNameInput;


