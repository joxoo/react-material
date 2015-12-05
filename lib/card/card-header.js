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

var _avatar = require('../avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var CardHeader = (function (_React$Component) {
    _inherits(CardHeader, _React$Component);

    function CardHeader() {
        _classCallCheck(this, CardHeader);

        _get(Object.getPrototypeOf(CardHeader.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CardHeader, [{
        key: 'renderAvatar',
        value: function renderAvatar(avatar) {
            if (_react2['default'].isValidElement(avatar)) {
                return _react2['default'].cloneElement(avatar, {
                    className: 'card-header-avatar ' + (avatar.className ? avatar.className : '')
                });
            }
            return _react2['default'].createElement(_avatar2['default'], { src: avatar, className: 'card-header-avatar' });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'card-header' },
                this.renderAvatar(this.props.avatar),
                _react2['default'].createElement(
                    'div',
                    { className: 'card-header-text' },
                    _react2['default'].createElement(
                        'span',
                        { className: 'card-header-title' },
                        this.props.title
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: 'card-header-subtitle' },
                        this.props.subtitle
                    )
                ),
                this.props.children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            avatar: _react.PropTypes.element,
            title: _react2['default'].PropTypes.string,
            subtitle: _react2['default'].PropTypes.string
        },
        enumerable: true
    }]);

    return CardHeader;
})(_react2['default'].Component);

exports['default'] = CardHeader;
module.exports = exports['default'];