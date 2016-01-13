import React, { PropTypes, Children } from 'react';
import { getClasses } from  '../addons';
import ListItem from './item';

@getClasses

class List extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string
        })),
        children: (props, propName, componentName) => {
            const children = props[propName];
            let error = null;

            Children.forEach(children, (child) => {
                if (child.type !== ListItem) {
                    error =  new Error(`'${componentName}' should have children of type ListItem`);
                }
            });
            return error;
        }

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
            <ul className={ this.getClasses('list', others) }>
                { items.map((item, key) => (<ListItem key={ key } hasIcon={ hasIcons } { ...item } />)) }
                { children }
            </ul>
        );
    }
}

export { ListItem };
export default List;
