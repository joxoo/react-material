import _ from 'lodash';

const gridClasses = {
    smPush: 'push-sm',
    smdPush: 'push-smd',
    mdPush: 'push-md',
    lgPush: 'push-lg',
    xlgPush: 'push-xlg',
    xxlgPush: 'push-xxlg',
    xxxlgPush: 'push-xxxlg',
    sm: 'col-sm',
    smd: 'col-smd',
    md: 'col-md',
    lg: 'col-lg',
    xlg: 'col-xlg',
    xxlg: 'col-xxlg',
    xxxlg: 'col-xxxlg'
};

export const getClassesStatic = (prefix, props) => {
    let classes = [];
    _.forIn(props, (value, key ) => {

        if (value === true) {
            return classes.push(`${prefix}-${key.toLowerCase()}`);
        }
        if (Object.keys(gridClasses).indexOf(key) !== -1 ) {
            return classes.push(`${gridClasses[key]}-${value}`);
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
};

/**
 * Makes the given component "getClasses".
 *
 * @param object component Component.
 */
function getClassesDecorator(component) {
    component.prototype.getClasses = getClassesStatic;
}


export default getClassesDecorator;
