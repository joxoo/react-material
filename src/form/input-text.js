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
        autoComplete: PropTypes.string,
        floating: PropTypes.bool,
        focused: PropTypes.bool,
        validate: PropTypes.func,
        errorText: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        type: 'text',
        floating: true,
        required: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = { focused: Boolean(props.focused), value: props.value || ''};
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            this.setState({ value: nextProps.value });
        }
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
            this.props.onChange(value);
        }

        this.setState({
            focused: false,
            typed: nativeEventType === 'input' || Boolean(value.length),
            invalid: inValid,
            value
        });
    }

    render() {
        const { label, type, name, disabled, placeholder, errorText, required, list, autoComplete, ...others } = this.props;
        const { value, focused, typed, invalid } = this.state;
        const inputProps = { type, value, name, disabled, placeholder, required, list, autoComplete, autoFocus: focused };

        return(
            <label className={ this.getClasses('input-text', Object.assign(others, { focused, typed, invalid })) }>
                <span className='input-text-label'>{ `${label}${required ? ' (*)' : ''}` }</span>
                <input className='input-text-field' {...inputProps}
                       onFocus={ this.onFocus } onChange={ this.onChange } onBlur={ this.onChange } />
                { this.state.invalid ? <span className='input-text-error'>{ errorText }</span> : null }
            </label>
        );
    }
}

export default InputText;
