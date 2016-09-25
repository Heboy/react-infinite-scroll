"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/8/2.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InlineLoading = function (_React$Component) {
    _inherits(InlineLoading, _React$Component);

    function InlineLoading() {
        _classCallCheck(this, InlineLoading);

        return _possibleConstructorReturn(this, (InlineLoading.__proto__ || Object.getPrototypeOf(InlineLoading)).apply(this, arguments));
    }

    _createClass(InlineLoading, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "inline-loading" },
                function () {
                    if (_this2.props.hasMore === true) {
                        return _react2.default.createElement(
                            "div",
                            { className: "kebab-spinner-fading-circle circle-color" },
                            _react2.default.createElement("div", { className: "is-circle1 circle" }),
                            _react2.default.createElement("div", { className: "is-circle2 circle" }),
                            _react2.default.createElement("div", { className: "is-circle3 circle" }),
                            _react2.default.createElement("div", { className: "is-circle4 circle" }),
                            _react2.default.createElement("div", { className: "is-circle5 circle" }),
                            _react2.default.createElement("div", { className: "is-circle6 circle" }),
                            _react2.default.createElement("div", { className: "is-circle7 circle" }),
                            _react2.default.createElement("div", { className: "is-circle8 circle" }),
                            _react2.default.createElement("div", { className: "is-circle9 circle" }),
                            _react2.default.createElement("div", { className: "is-circle10 circle" }),
                            _react2.default.createElement("div", { className: "is-circle11 circle" }),
                            _react2.default.createElement("div", { className: "is-circle12 circle" })
                        );
                    }
                }(),
                _react2.default.createElement(
                    "span",
                    { className: "text", onClick: this.props.retry },
                    this.props.text
                )
            );
        }
    }]);

    return InlineLoading;
}(_react2.default.Component);

InlineLoading.defaultProps = {
    hasMore: true,
    text: '加载中...'
};

InlineLoading.propType = {
    hasMore: _react2.default.PropTypes.bool,
    retry: _react2.default.PropTypes.func,
    text: _react2.default.PropTypes.string
};

exports.default = InlineLoading;