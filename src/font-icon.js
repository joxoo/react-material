import React, { PropTypes } from 'react';
import { getClasses } from './addons';

@getClasses

class FontIcon extends  React.Component {

    static propTypes = {
        background: PropTypes.string,
        color: PropTypes.string,
        icon: PropTypes.string
    };

    render() {
        const props = this.props;

        return (
            <span className={ this.getClasses('font-icon', this.props) }>{ props.icon }</span>
        );
    }
}

export default FontIcon;
