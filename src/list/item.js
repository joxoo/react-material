import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';
import FontIcon from '../font-icon';

@getClasses

class ListItem extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.shape({
            background: PropTypes.string,
            color: PropTypes.string,
            icon: PropTypes.string
        }) ])
    };

    render() {
        const {
            title,
            icon,
            children,
            ...others
        } = this.props;
        const fontIcon = typeof icon === 'string' ? { icon } : icon;

        return (
            <li className={ this.getClasses('list-item', others) } { ...others } >
                { fontIcon && <FontIcon className='list-item-icon' {...fontIcon} /> }
                { title && <span className={ `list-item-title` }>{ title }</span> }
                { children }
            </li>
        );
    }
}

export default ListItem;
