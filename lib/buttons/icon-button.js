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

var _fontIcon = require('../font-icon');

var _fontIcon2 = _interopRequireDefault(_fontIcon);

var IconButton = (function (_React$Component) {
    _inherits(IconButton, _React$Component);

    _createClass(IconButton, null, [{
        key: 'propTypes',
        value: {
            className: _react.PropTypes.string,
            disabled: _react.PropTypes.bool,
            icon: _react.PropTypes.string,
            iconClassName: _react.PropTypes.string,
            iconElement: _react.PropTypes.element
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            tooltipPosition: 'bottom-center'
        },
        enumerable: true
    }]);

    function IconButton() {
        _classCallCheck(this, _IconButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(_IconButton.prototype), 'constructor', this).apply(this, args);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
    }

    _createClass(IconButton, [{
        key: '_handleTouchEnd',
        value: function _handleTouchEnd(event) {
            return event.nativeEvent && event.nativeEvent.targetTouches ? this.removeAnimatedTouchPoint() : null;
        }
    }, {
        key: '_handleMouseUp',
        value: function _handleMouseUp(event) {
            return !this.hasTouchEvents() && event.nativeEvent ? this.removeAnimatedTouchPoint() : null;
        }
    }, {
        key: 'renderFontIcon',
        value: function renderFontIcon(props) {
            if (props.iconElement) {
                return props.iconElement;
            }
            if (!props.icon) {
                return null;
            }

            return _react2['default'].createElement(_fontIcon2['default'], { className: props.iconClassName, disabled: props.disabled, icon: props.icon });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var disabled = _props.disabled;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['disabled', 'className']);

            return _react2['default'].createElement(
                'button',
                _extends({ onTouchEnd: this._handleTouchEnd,
                    onMouseUp: this._handleMouseUp,
                    disabled: disabled,
                    className: this.getClasses('icon-button', { className: className }),
                    ref: 'elementTouch'
                }, others),
                _react2['default'].createElement('span', { className: 'icon-button-tap', ref: 'elementTouchTap' }),
                this.renderFontIcon(this.props)
            );
        }
    }]);

    var _IconButton = IconButton;
    IconButton = (0, _addons.getClasses)(IconButton) || IconButton;
    IconButton = (0, _addons.touchPoint)(IconButton) || IconButton;
    IconButton = (0, _addons.hasTouchEvents)(IconButton) || IconButton;
    return IconButton;
})(_react2['default'].Component);

exports['default'] = IconButton;
module.exports = exports['default'];