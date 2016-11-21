import React, { PropTypes } from 'react';

import { getClasses } from '../addons';

@getClasses

class InputArea extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        placeholder: PropTypes.string,
        floating: PropTypes.bool,
        focused: PropTypes.bool,
        validate: PropTypes.func,
        invalid: PropTypes.bool,
        errorText: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        floating: true,
        required: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = { focused: Boolean(props.focused) || Boolean(props.value), value: props.value || ''};
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            this.setState({ value: nextProps.value });
        }
        if (nextProps.invalid !== undefined) {
            this.setState({ invalid: nextProps.invalid });
        }
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onChange(event) {
        const {validate, required} = this.props;
        const nativeEventType = event.nativeEvent.type;
        const value = event.target.value;
        const mustValidate = required ? true : Boolean(value.length);
        let inValid = required ? !Boolean(value.length) : false;

        if (validate && mustValidate && nativeEventType !== 'input') {
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
        const { label, name, disabled, placeholder, errorText, required, ...others } = this.props;
        const { value, focused, typed, invalid } = this.state;
        const inputProps = { value, name, disabled, placeholder, required, autoFocus: focused };

        return(
            <label className={ this.getClasses('input-area', Object.assign(others, { focused, typed, invalid })) }>
                <span className='input-area-label'>{ `${label}${required ? ' (*)' : ''}` }</span>
                <textarea className='input-area-field' {...inputProps}
                       onFocus={ this.onFocus } onChange={ this.onChange } onBlur={ this.onChange } />
                { this.state.invalid ? <span className='input-area-error'>{ errorText }</span> : null }
            </label>
        );
    }
}

export default InputArea;
