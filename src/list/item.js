import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';
import FontIcon from '../font-icon';

@getClasses

class ListItem extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string
    };

    render() {
        const {
            title,
            icon,
            children,
            ...others
        } = this.props;

        return (
            <li className={ this.getClasses('list-item', others) } { ...others } >
                { icon && <FontIcon className='list-item-icon' icon={ icon } /> }
                { title && <span className={ `list-item-title` }>{ title }</span> }
                { children }
            </li>
        );
    }
}

export default ListItem;
