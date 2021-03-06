import React from 'react';
import PropTypes from 'prop-types';
import { getClassesStatic } from '../addons/get-classes';
import MenuItem from './item';

class MenuDropDown extends React.PureComponent {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })),
        selected: PropTypes.string,
        name: PropTypes.string.isRequired,
        onSelect: PropTypes.func
    };

    constructor(props, context) {
        super(props, context);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = { open: false, selected: props.selected || props.options[0].value };
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleSelect(selected) {
        this.setState({ selected, open: false });

        if (this.props.onSelect) {
            this.props.onSelect(selected);
        }
    }

    render() {
        const { selected, open } = this.state;
        const { options, name, ...others } = this.props;
        const [ selectedElement ] = options.filter((option) => option.value === selected);

        return (
            <div className={ getClassesStatic('menu-drop-down', Object.assign({ open }, others)) }>
                <input type='hidden' name={ name } value={ selected }/>
                <div className='menu-drop-down-selected' onClick={ this.handleOpen }>{ selectedElement.label }</div>
                <div className='menu-drop-down-options'>
                    { options.map((item, key) =>
                        <MenuItem { ...item } key={ key } selected={ item.value === selected } onClick={ this.handleSelect } /> ) }
                </div>
            </div>
        );
    }
}

export default MenuDropDown;
