'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validUrl = require('valid-url');

var _validUrl2 = _interopRequireDefault(_validUrl);

var _reactLibReactPropTypeLocationNames = require('react/lib/ReactPropTypeLocationNames');

var _reactLibReactPropTypeLocationNames2 = _interopRequireDefault(_reactLibReactPropTypeLocationNames);

var ANONYMOUS = '<<anonymous>>';

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
    var propType = typeof propValue;
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
        if (props[propName] == null) {
            var locationName = _reactLibReactPropTypeLocationNames2['default'][location];
            if (isRequired) {
                return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
            }
            return null;
        } else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
}

function createUrlTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        var locationName = _reactLibReactPropTypeLocationNames2['default'][location];
        if (propType !== 'string') {
            return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `uri_string`.'));
        }
        if (!_validUrl2['default'].isUri(props[propName])) {
            return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `valid url`.'));
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}

var PropTypes = {
    url: createUrlTypeChecker()
};

exports['default'] = PropTypes;
module.exports = exports['default'];