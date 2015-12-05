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

var _addons = require('../addons');

var FlatButtonLabel = (function (_React$Component) {
    _inherits(FlatButtonLabel, _React$Component);

    function FlatButtonLabel() {
        _classCallCheck(this, _FlatButtonLabel);

        _get(Object.getPrototypeOf(_FlatButtonLabel.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(FlatButtonLabel, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'span',
                { className: this.getClasses('flat-button-label', this.props) },
                this.props.label
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            label: _react.PropTypes.string
        },
        enumerable: true
    }]);

    var _FlatButtonLabel = FlatButtonLabel;
    FlatButtonLabel = (0, _addons.getClasses)(FlatButtonLabel) || FlatButtonLabel;
    return FlatButtonLabel;
})(_react2['default'].Component);

exports['default'] = FlatButtonLabel;
module.exports = exports['default'];