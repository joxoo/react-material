'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('../addons');

var _buttonLabel = require('./button-label');

var _buttonLabel2 = _interopRequireDefault(_buttonLabel);

function validateLabel(props, propName, componentName) {
    if (!props.children && !props.label) {
        return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
    }
}

var FlatButton = (function (_React$Component) {
    _inherits(FlatButton, _React$Component);

    _createClass(FlatButton, null, [{
        key: 'propTypes',
        value: {
            disabled: _react.PropTypes.bool,
            hoverColor: _react.PropTypes.string,
            label: validateLabel,
            labelClassName: _react.PropTypes.string,
            labelPosition: _react.PropTypes.oneOf(['before', 'after']),
            primary: _react.PropTypes.bool,
            secondary: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            labelPosition: 'before'
        },
        enumerable: true
    }]);

    function FlatButton() {
        _classCallCheck(this, _FlatButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(_FlatButton.prototype), 'constructor', this).apply(this, args);
        this._handleTouchStart = this._handleTouchStart.bind(this);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
        this._handleMouseDown = this._handleMouseDown.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
    }

    _createClass(FlatButton, [{
        key: '_handleTouchStart',
        value: function _handleTouchStart(event) {
            return event.nativeEvent && event.nativeEvent.targetTouches ? this.addAnimatedTouchPoint(event.nativeEvent.targetTouches[0]) : null;
        }
    }, {
        key: '_handleTouchEnd',
        value: function _handleTouchEnd(event) {
            return event.nativeEvent && event.nativeEvent.targetTouches ? this.removeAnimatedTouchPoint() : null;
        }
    }, {
        key: '_handleMouseDown',
        value: function _handleMouseDown(event) {
            return !this.hasTouchEvents() && event.nativeEvent ? this.addAnimatedTouchPoint(event.nativeEvent) : null;
        }
    }, {
        key: '_handleMouseUp',
        value: function _handleMouseUp(event) {
            return !this.hasTouchEvents() && event.nativeEvent ? this.removeAnimatedTouchPoint() : null;
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel(label, className) {
            return label ? _react2['default'].createElement(_buttonLabel2['default'], { className: className, label: label }) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var disabled = _props.disabled;
            var label = _props.label;
            var labelClassName = _props.labelClassName;
            var labelPosition = _props.labelPosition;

            var others = _objectWithoutProperties(_props, ['children', 'disabled', 'label', 'labelClassName', 'labelPosition']);

            var buttonLabel = this.renderLabel(label, labelClassName, children);

            return _react2['default'].createElement(
                'button',
                _extends({ onTouchStart: this._handleTouchStart,
                    onTouchEnd: this._handleTouchEnd,
                    onMouseDown: this._handleMouseDown,
                    onMouseUp: this._handleMouseUp,
                    disabled: disabled,
                    ref: 'elementTouch',
                    className: this.getClasses('flat-button', this.props)
                }, others),
                _react2['default'].createElement('span', { className: 'flat-button-tap', ref: 'elementTouchTap' }),
                labelPosition === 'before' ? [buttonLabel, children] : [children, buttonLabel]
            );
        }
    }]);

    var _FlatButton = FlatButton;
    FlatButton = (0, _addons.getClasses)(FlatButton) || FlatButton;
    FlatButton = (0, _addons.hasTouchEvents)(FlatButton) || FlatButton;
    FlatButton = (0, _addons.touchPoint)(FlatButton) || FlatButton;
    return FlatButton;
})(_react2['default'].Component);

exports['default'] = FlatButton;
module.exports = exports['default'];