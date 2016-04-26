import React, { PropTypes } from 'react';

import { getClasses } from '../addons';

@getClasses

class SelectionControl extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        checked: PropTypes.string,
        name: PropTypes.string.isRequired,
        controls: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            count: PropTypes.number,
            disabled: PropTypes.bool
        })).isRequired,
        labelBefore: PropTypes.bool,
        onClick: PropTypes.func
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
        const { type, checked, name, controls, ...others } = this.props;
        const classes = Object.assign(others, {
            checkbox: type === 'checkbox',
            radio: type === 'radio'
        });

        return(
            <section className={ this.getClasses('selection-control', classes) }>
                { controls.map((control, key) => {
                    const { disabled, label, value, count } = control;
                    return (
                        <label className='selection-control-item' key={ `section-control-item-${key}` }>
                            <input className='selection-control-field' { ... {type, name, disabled, value } }
                                   defaultChecked={ checked } onClick={ this.handleOnClick.bind(this, value) }/>
                            <span className='selection-control-label'>{ label }</span>
                            { count && <span className='selection-control-count'>({ count })</span> }
                        </label>
                    );
                }) }
            </section>
        );
    }
}

export default SelectionControl;
