import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        console.log(this.props)
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error} {this.props.input.name}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = <div className="form-warning">{this.props.meta.warning} {this.props.input.name}</div>
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
