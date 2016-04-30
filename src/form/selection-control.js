import React, { PropTypes } from 'react';
import { getClasses } from '../addons';
import Header from '../header';
import InputControl from './input-control';

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
        onChange: PropTypes.func,
        title: PropTypes.string
    };

    static defaultProps = {
        checked: []
    };

    render() {
        const { type, name, controls, onChange, checked, title, ...others } = this.props;

        return(
            <fieldset className={ this.getClasses('selection-control', others) }>
                { title && <Header title={ title } level={ 4 } /> }
                { controls.map((control, key) => {
                    const { disabled, label, value, count } = control;

                    return (
                        <InputControl { ... {type, name, disabled, value, label } }
                               checked={ checked.indexOf(value) !== -1 }
                               onChange={ onChange }
                               key={ `section-control-item-${key}` } >

                            { count && <span className='selection-control-count'>({ count })</span> }
                        </InputControl>
                    );
                }) }
            </fieldset>
        );
    }
}

export default SelectionControl;
