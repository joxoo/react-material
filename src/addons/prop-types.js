import validUrl from 'valid-url';
const ANONYMOUS = '<<anonymous>>';


// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
    const propType = typeof propValue;
    if (Array.isArray(propValue)) {
        return 'array';
    }
    if (propValue instanceof RegExp) {
        return 'object';
    }
    return propType;
}

function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (props[propName] === null) {
            if (isRequired) {
                return new Error(
                    `Required ${location} \`${propFullName}\` was not specified in ` +
                    `\`${componentName}\`.`
                );
            }
            return null;
        } else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }

    const chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
}

function createUrlTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
        const propValue = props[propName];
        const propType = getPropType(propValue);
        const uri = propValue.substr(0, 2) === '//' ? `http:${propValue}` : propValue;
        if (propType !== 'string') {
            return new Error(
                `Invalid ${location} \`${propFullName}\` of type \`${propType}\` ` +
                `supplied to \`${componentName}\`, expected \`uri_string\`.`
            );
        }
        if(!validUrl.isUri(uri)) {
            return new Error(
                `Invalid ${location} \`${propFullName}\` \`${propValue}\` of type \`${propType}\` ` +
                `supplied to \`${componentName}\`, expected \`valid url\`.`
            );
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}

const PropTypes = {
    url: createUrlTypeChecker()
};

export default PropTypes;
