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
                {error}
                {warning}
                <input
                    {...this.props.input}
                    type={this.props.type}
                    aria-label={this.props.input.name}
                    id={this.props.input.name}
                    autoComplete={this.props.autoComplete}
                    placeholder={this.props.placeholder}
                    value={this.props.defaultValue}
                    ref={input => (this.input = input)}
                />
            </div>
        );
    }
}
