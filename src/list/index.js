import React, { PropTypes } from 'react';
import { getClasses } from  '../addons';
import ListItem from './item';

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
            children,
            ...others
        } = this.props;

        const hasIcons = this.hasItemsIcons(items);

        return (
            <ul className={ this.getClasses('list', others) } { ...others }>
                { items.map((item, key) => (<ListItem key={ key } hasIcon={ key !== 0 && hasIcons } { ...item } />)) }
                { children }
            </ul>
        );
    }
}

export { ListItem };
export default List;
