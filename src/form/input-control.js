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

        this.handleChange = this.handleChange.bind(this, props.value);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.disabled !== this.props.disabled;
    }

    handleChange(value, event) {
        if (this.props.onChange) {
            this.props.onChange( value, event );
        }
    }

    render() {
        const { type, name, children, disabled, checked, value , label } = this.props;

        return (
            <label className={ this.getClasses('input-control', { [type]: true }) }>
                <input className='input-control-field' { ... {type, name, disabled } }
                       defaultChecked={ checked }
                       defaultValue={ value }
                       onClick={ this.handleChange }/>
                    <span className='input-control-label'>{ label }</span>
                    { children }
            </label>
        );
    }
}

export default InputControl;
