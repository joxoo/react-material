import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';
import IconButton from '../buttons/icon-button';

@getClasses

class ControlPlay extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    };

    constructor(...args) {
        super(...args);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        return this.props.onClick(event);
    }

    render() {
        return (
            <IconButton
                onClick={ this.handleOnClick }
                className={ this.getClasses('control-play', this.props) }
                icon='0xE037'
            />
        );
    }
}

export default ControlPlay;
