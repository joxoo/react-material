'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('../addons');

var Video = (function (_React$Component) {
    _inherits(Video, _React$Component);

    function Video() {
        _classCallCheck(this, _Video);

        _get(Object.getPrototypeOf(_Video.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Video, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var autoplay = _props.autoplay;
            var controls = _props.controls;
            var url = _props.url;
            var poster = _props.poster;
            var contentType = _props.contentType;

            var others = _objectWithoutProperties(_props, ['autoplay', 'controls', 'url', 'poster', 'contentType']);

            return _react2['default'].createElement(
                'div',
                { className: this.getClasses('video', others) },
                _react2['default'].createElement(
                    'video',
                    { poster: poster ? poster : '' },
                    _react2['default'].createElement('source', { src: url, type: contentType })
                ),
                controls && this.renderControls(others)
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            url: _addons.MaterialPropTypes.url.isRequired,
            contentType: _react.PropTypes.string.isRequired,
            controls: _react.PropTypes.bool,
            autoplay: _react.PropTypes.bool,
            poster: _addons.MaterialPropTypes.url
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            autoplay: false,
            controls: true
        },
        enumerable: true
    }]);

    var _Video = Video;
    Video = (0, _addons.getClasses)(Video) || Video;
    return Video;
})(_react2['default'].Component);

exports['default'] = Video;
module.exports = exports['default'];