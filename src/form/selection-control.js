import React, { PropTypes } from 'react';
import { getClasses } from '../addons';
import Header from '../header';

@getClasses

class SelectionControl extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        checked: PropTypes.array,
        name: PropTypes.string.isRequired,
        controls: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            count: PropTypes.number,
            disabled: PropTypes.bool
        })).isRequired,
        labelBefore: PropTypes.bool,
        onClick: PropTypes.func,
        title: PropTypes.string
    };

    static defaultProps = {
        labelBefore: false
    };

    handleOnClick( value ) {
        if (this.props.onClick) {
            this.props.onClick( value );
        }
    }

    render() {
        const { type, checked, name, controls, title, ...others } = this.props;
        const classes = Object.assign(others, {
            checkbox: type === 'checkbox',
            radio: type === 'radio'
        });

        return(
            <fieldset className={ this.getClasses('selection-control', classes) }>
                { title && <Header title={ title } level={ 4 } /> }
                { controls.map((control, key) => {
                    const { disabled, label, value, count } = control;
                    return (
                        <label className='selection-control-item' key={ `section-control-item-${key}` }>
                            <input className='selection-control-field' { ... {type, name, disabled, value } }
                                   defaultChecked={ checked.indexOf(value) !== -1 }
                                   onClick={ this.handleOnClick.bind(this, value) }/>
                            <span className='selection-control-label'>{ label }</span>
                            { count && <span className='selection-control-count'>({ count })</span> }
                        </label>
                    );
                }) }
            </fieldset>
        );
    }
}

export default SelectionControl;
