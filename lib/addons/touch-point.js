'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function calculateTouchPoint(node, touche) {
    var rect = node.getBoundingClientRect();
    var touchPageX = touche.pageX;
    var touchPageY = touche.pageY;

    return {
        left: (rect.left - touchPageX) * -1 - rect.width / 2,
        top: (rect.top - touchPageY) * -1 - rect.height / 2
    };
}

function addAnimatedTouchPoint(touch) {
    var elementTouch = _react2['default'].findDOMNode(this.refs.elementTouch);
    var elementTouchTap = _react2['default'].findDOMNode(this.refs.elementTouchTap);
    var touchPoint = calculateTouchPoint(elementTouch, touch);

    elementTouchTap.style.left = touchPoint.left + 'px';

    setTimeout(function () {
        elementTouchTap.style.left = '';
    }, 250);
}

function removeAnimatedTouchPoint() {
    var elementTouch = _react2['default'].findDOMNode(this.refs.elementTouch);

    setTimeout(function () {
        elementTouch.blur();
    }, 500);
}

/**
 * Makes the given component "calculateTouchPoint".
 *
 * @param object component Component.
 */
function getClassesDecorator(component) {
    component.prototype.addAnimatedTouchPoint = addAnimatedTouchPoint;
    component.prototype.removeAnimatedTouchPoint = removeAnimatedTouchPoint;
}

exports['default'] = getClassesDecorator;
module.exports = exports['default'];