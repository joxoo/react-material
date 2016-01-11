import React, { PropTypes } from 'react';
import { getClasses } from  './addons';
import FontIcon from './font-icon';

@getClasses

class List extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string
        }))
    };

    static defaultProps = {
        items: []
    };

    hasItemsIcons(items) {
        return items.findIndex((item) => (Boolean(item.icon))) !== -1;
    }

    render() {
        const {
            items,
            ...others
        } = this.props;

        const hasIcons = this.hasItemsIcons(items);

        return (
            <ul className={ this.getClasses('list', others) }>
                { items.map((item, key) => {
                    return (
                        <li key={ key } className='list-item'>
                            { item.icon && <FontIcon className='list-item-icon' icon={ item.icon } /> }
                            <span className={ `list-item-title ${!item.icon && hasIcons && 'list-item-title-icon'}` }>
                                { item.title }
                            </span>
                        </li>
                    );
                }) }
            </ul>
        );
    }
}

export default List;
