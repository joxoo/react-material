import React, { PropTypes } from 'react';

import { getClassesStatic } from '../addons/get-classes';

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
        invalid: PropTypes.bool,
        errorText: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onDragStart: PropTypes.func,
        onDrop: PropTypes.func
    };

    static defaultProps = {
        type: 'text',
        floating: true,
        required: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = { focused: Boolean(props.focused) || Boolean(props.value), value: props.value || ''};
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            this.setState({ value: nextProps.value });
        }
        if (nextProps.invalid !== undefined) {
            this.setState({ invalid: nextProps.invalid });
        }
    }

    onFocus(event) {
        this.setState({ focused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    validate(event, handler) {
        const {validate, required} = this.props;
        const nativeEventType = event.nativeEvent.type;
        const value = event.target.value;
        const mustValidate = required ? true : Boolean(value.length);
        let inValid = required ? !value.length : false;

        if (validate && mustValidate && nativeEventType !== 'input') {
            inValid = !this.props.validate(value);
        }

        this.setState({
            focused: false,
            typed: nativeEventType === 'input' || Boolean(value.length),
            invalid: inValid,
            value
        });

        if (handler && !inValid) {
            handler(value, event);
        }
    }

    onBlur(event) {
        this.validate(event, this.props.onBlur);
    }

    onChange(event) {
        this.validate(event, this.props.onChange);
    }

    render() {
        const { label, type, name, disabled, placeholder, errorText, required, list,
            autoComplete, onDrop, onDragStart, children, ...others } = this.props;
        const { value, focused, typed, invalid } = this.state;
        const inputProps = { type, value, name, disabled, placeholder, required, list, autoComplete,
            autoFocus: focused, onDragStart, onDrop};

        return(
            <label className={ getClassesStatic('input-text', Object.assign(others, { focused, typed, invalid })) }>
                <span className='input-text-label'>{ `${label}${required ? ' (*)' : ''}` }</span>
                <input
                    {...inputProps}
                    className='input-text-field'
                    onFocus={ this.onFocus }
                    onChange={ this.onChange }
                    onBlur={ this.onBlur }
                />
                { children }
                { this.state.invalid && errorText && <span className='input-text-error'>{ errorText }</span> }
            </label>
        );
    }
}

export default InputText;
