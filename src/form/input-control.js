import React, { PropTypes } from 'react';
import { getClasses } from '../addons';

@getClasses
    
class InputControl extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        checked: PropTypes.bool,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    };

    static defaultProps = {
        checked: [],
        disabled: false
    };

    constructor(props, context) {
        super(props, context);

        if (props.type === 'checkbox') {
            this.state = {checked: props.checked};
        }
        this.handleChange = this.handleChange.bind(this, props.value);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type === 'checkbox') {
            this.setState({ checked: nextProps.checked });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.type === 'radio') {
            return nextProps.disabled !== this.props.disabled;
        }
        return nextProps.disabled !== this.props.disabled || this.props.checked !== nextState.checked;
    }

    handleChange(value, event) {
        if (this.props.onChange) {
            this.props.onChange( value, event );
        }
        if (this.props.type === 'checkbox') {
            this.setState({checked: !this.state.checked});
        }
    }

    render() {
        const { type, name, children, disabled, checked, value , label } = this.props;
        const props = { type, name, disabled, onChange: this.handleChange };

        if (type === 'radio') {
            Object.assign(props, { defaultValue: value, defaultChecked: checked });
        } else {
            Object.assign(props, { value: value, checked: this.state.checked});
        }

        return (
            <label className={ this.getClasses('input-control', { [type]: true }) }>
                <input className='input-control-field' { ...props }/>
                <span className='input-control-label'>{ label }</span>
                { children }
            </label>
        );
    }
}

export default InputControl;
