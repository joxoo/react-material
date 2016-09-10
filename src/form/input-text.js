import React, { PropTypes } from 'react';

import { getClasses } from '../addons';

@getClasses

class InputText extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['text', 'url', 'email', 'tel', 'password', 'number']),
        value: PropTypes.string,
        list: PropTypes.string,
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        placeholder: PropTypes.string,
        floating: PropTypes.bool,
        validate: PropTypes.func,
        errorText: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        type: 'text',
        floating: true,
        required: false
    };

    constructor(...args) {
        super(...args);
        this.state = { focused: false };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onChange(event) {
        const nativeEventType = event.nativeEvent.type;
        const value = event.target.value;
        const mustValidate = this.props.required ? true : Boolean(value.length);
        let inValid = false;

        if (this.props.validate && mustValidate && nativeEventType !== 'input') {
            inValid = !this.props.validate(value);
        }

        if (this.props.onChange && !inValid) {
            this.props.onChange(value, nativeEventType);
        }

        this.setState({
            focused: false,
            typed: nativeEventType === 'input' || Boolean(value.length),
            invalid: inValid
        });
    }

    render() {
        const { label, type, value, name, disabled, placeholder, errorText, required, list, ...others } = this.props;

        return(
            <label className={ this.getClasses('input-text', Object.assign(others, this.state)) }>
                <span className='input-text-label'>{ `${label}${required ? ' (*)' : ''}` }</span>
                <input className='input-text-field' {... {type, value, name, disabled, placeholder, required, list }}
                       onFocus={ this.onFocus } onChange={ this.onChange } onBlur={ this.onChange } />
                { this.state.invalid ? <span className='input-text-error'>{ errorText }</span> : null }
            </label>
        );
    }
}

export default InputText;
