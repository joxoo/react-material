import React from 'react';
import PropTypes from 'prop-types';
import { getClassesStatic } from  '../addons/get-classes';
import ListItem from './item';

const hasItemsIcons = (items) => items.findIndex((item) => (Boolean(item.icon))) !== -1;

const List = (props) => {
    const { items, children, ...others } = props;
    const hasIcons = hasItemsIcons(items);

    return (
        <ul { ...others } className={ getClassesStatic('list', others) } >
            { items.map((item, key) => (<ListItem key={ key } hasIcon={ key !== 0 && hasIcons } { ...item } />)) }
            { children }
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string
    }))
};

List.defaultProps = {
    items: []
};

export { ListItem };
export default List;
