import _ from 'lodash';

function getClasses(prefix, props) {
    let classes = [];
    _.forIn(props, (value, key ) => {

        if (value === true) {
            return classes.push(`${prefix}-${key}`);
        }
        if (typeof value === 'number' && value >= 1) {
            return classes.push(`${prefix}-${key}-${value}`);
        }
        if ([ 'color', 'background', 'hoverColor' ].indexOf(key) !== -1 ) {
            return classes.push(`${key.toLowerCase()}-${value}`);
        }
        if ([ 'size' ].indexOf(key) !== -1 ) {
            return classes.push(`${prefix}-${key.toLowerCase()}-${value}`);
        }
        if (key === 'className' && typeof value === 'string' ) {
            classes = classes.concat(value.split(' '));
        }
    });

    classes.push( prefix );
    classes.reverse();

    return classes.join(' ');
}

/**
 * Makes the given component "getClasses".
 *
 * @param object component Component.
 */
function getClassesDecorator(component) {
    component.prototype.getClasses = getClasses;
}

export default getClassesDecorator;
