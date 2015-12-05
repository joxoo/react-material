'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('./addons');

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

var _buttonsIconButton = require('./buttons/icon-button');

var _buttonsIconButton2 = _interopRequireDefault(_buttonsIconButton);

var _fontIcon = require('./font-icon');

var _fontIcon2 = _interopRequireDefault(_fontIcon);

var AppBar = (function (_React$Component) {
    _inherits(AppBar, _React$Component);

    _createClass(AppBar, null, [{
        key: 'propTypes',
        value: {
            onLeftIconButtonTouchTap: _react.PropTypes.func,
            onRightIconButtonTouchTap: _react.PropTypes.func,
            showMenuIconButton: _react.PropTypes.bool,
            iconLeft: _react.PropTypes.string,
            iconRight: _react.PropTypes.string,
            elementLeft: _react.PropTypes.element,
            elementRight: _react.PropTypes.element,
            title: _react2['default'].PropTypes.node,
            depth: _react2['default'].PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            showMenuIconButton: true,
            title: '',
            depth: 1
        },
        enumerable: true
    }]);

    function AppBar() {
        _classCallCheck(this, _AppBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(_AppBar.prototype), 'constructor', this).apply(this, args);
        this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
        this._onRightIconButtonTouchTap = this._onRightIconButtonTouchTap.bind(this);
    }

    /* eslint  no-console: 0 */

    _createClass(AppBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (process.env.NODE_ENV !== 'production') {
                if (this.props.elementLeft && this.props.iconLeft) {
                    console.warn('Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' + 'defined. Please use one or the other.');
                }

                if (this.props.elementRight && this.props.iconRight) {
                    console.warn('Properties iconClassNameRight and iconElementRight cannot be simultaneously ' + 'defined. Please use one or the other.');
                }
            }
        }
    }, {
        key: 'renderMenuElementLeft',
        value: function renderMenuElementLeft(props) {
            var elementLeft = props.elementLeft;

            if (props.showMenuIconButton) {
                if (elementLeft) {
                    elementLeft = _react2['default'].cloneElement(elementLeft, {
                        className: this.getClasses('app-bar-icon-button', { className: elementLeft.className })
                    });
                    return _react2['default'].createElement(
                        'div',
                        { className: 'app-bar-icon-left' },
                        elementLeft
                    );
                }
                var child = _react2['default'].createElement(_fontIcon2['default'], { className: 'app-bar-icon-button', icon: props.iconLeft ? props.iconLeft : 'menu' });
                return _react2['default'].createElement(_buttonsIconButton2['default'], {
                    className: 'app-bar-icon-left',
                    iconElement: child,
                    onTouchTap: this._onLeftIconButtonTouchTap });
            }
        }
    }, {
        key: 'renderMenuElementRight',
        value: function renderMenuElementRight(props) {
            var iconRight = props.iconRight;
            var elementRight = props.elementRight;
            var prefix = 'app-bar-icon-button';

            if (elementRight) {
                switch (elementRight.type.displayName) {
                    case 'IconButton':
                        prefix = 'app-bar-icon-button';
                        break;
                    case 'FlatButton':
                        prefix = 'app-bar-flat-button';
                        break;
                }

                elementRight = _react2['default'].cloneElement(elementRight, {
                    className: this.getClasses(prefix, { className: elementRight.className })
                });

                return _react2['default'].createElement(
                    'div',
                    { className: 'app-bar-icon-right' },
                    elementRight
                );
            }

            if (iconRight) {
                return _react2['default'].createElement(_buttonsIconButton2['default'], {
                    className: 'app-bar-icon-right',
                    iconClassName: 'app-bar-icon-button',
                    icon: iconRight,
                    onTouchTap: this._onRightIconButtonTouchTap });
            }
            return null;
        }
    }, {
        key: '_onLeftIconButtonTouchTap',
        value: function _onLeftIconButtonTouchTap(event) {
            if (this.props.onLeftIconButtonTouchTap) {
                this.props.onLeftIconButtonTouchTap(event);
            }
        }
    }, {
        key: '_onRightIconButtonTouchTap',
        value: function _onRightIconButtonTouchTap(event) {
            if (this.props.onRightIconButtonTouchTap) {
                this.props.onRightIconButtonTouchTap(event);
            }
        }
    }, {
        key: 'renderTitle',
        value: function renderTitle(title) {
            if (typeof title === 'string' || title instanceof String) {
                return _react2['default'].createElement(
                    'h1',
                    { className: 'app-bar-title app-bar-main' },
                    title
                );
            }
            return _react2['default'].createElement(
                'div',
                { className: 'app-bar-main' },
                title
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            return _react2['default'].createElement(
                _paper2['default'],
                { rounded: false, className: this.getClasses('app-bar', { className: props.className }),
                    depth: props.depth },
                this.renderMenuElementLeft(props),
                this.renderTitle(props.title),
                this.renderMenuElementRight(props),
                props.children
            );
        }
    }]);

    var _AppBar = AppBar;
    AppBar = (0, _addons.pureRender)(AppBar) || AppBar;
    AppBar = (0, _addons.getClasses)(AppBar) || AppBar;
    return AppBar;
})(_react2['default'].Component);

exports['default'] = AppBar;
module.exports = exports['default'];