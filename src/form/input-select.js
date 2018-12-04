import React, { PropTypes } from 'react';

import { getClassesStatic } from '../addons/get-classes';
import InputText from './input-text';
import MenuItem from '../menu/item';

class InputSelect extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })),
        autoComplete: PropTypes.string,
        floating: PropTypes.bool,
        focused: PropTypes.bool,
        validate: PropTypes.func,
        invalid: PropTypes.bool,
        errorText: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    };

    static defaultProps = {
        floating: true,
        required: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: Boolean(props.focused) || Boolean(props.value),
            value: props.value || '',
            selectedLabel: ''
        };
        this.onFocus = this.onFocus.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            const [ selectedOption ] = this.props.options.filter((option) => option.value === nextProps.value );

            this.setState({ value: nextProps.value, selectedLabel: selectedOption.label });
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

    handleSelect(value) {
        const [ selectedOption ] = this.props.options.filter((option) => option.value === value );
        this.setState({ focused: false, value, selectedLabel: selectedOption.label });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render() {
        const { options, ...props } = this.props;
        const { focused, value, selectedLabel } = this.state;

        return(
            <InputText
                {...props}
                onFocus={ this.onFocus }
                onChange={ undefined }
                value={ selectedLabel }
            >
                <div className={ getClassesStatic('input-select-down-options', { focused }) }>
                    { options.map((item, key) =>
                        <MenuItem { ...item } key={ key } selected={ item.value === value } onClick={ this.handleSelect } /> ) }
                </div>
            </InputText>
        );
    }
}

export default InputSelect;
