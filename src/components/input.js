import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error, warning;
        if(!this.props.meta.submitFailed) {
            if (this.props.meta.touched && this.props.meta.error) {
                error = <div className="red" aria-live="polite">{this.props.meta.error}</div>;
            }
            if (this.props.meta.touched && this.props.meta.warning) {
                warning = <div className="orange" aria-live="polite">{this.props.meta.warning}</div>
            }
        }

        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    {...this.props.input}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    ref={input => (this.input = input)}
                />
            </div>
        );
    }
}
