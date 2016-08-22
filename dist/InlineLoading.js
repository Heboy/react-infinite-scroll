/**
 * Created by Soup Tang on 2016/8/2.
 */
import React from 'react';

class InlineLoading extends React.Component {

    render() {
        return React.createElement("div", { className: "inline-loading" }, (() => {
            if (this.props.hasMore === true) {
                return React.createElement("div", { className: "kebab-spinner-fading-circle circle-color" }, React.createElement("div", { className: "is-circle1 circle" }), React.createElement("div", { className: "is-circle2 circle" }), React.createElement("div", { className: "is-circle3 circle" }), React.createElement("div", { className: "is-circle4 circle" }), React.createElement("div", { className: "is-circle5 circle" }), React.createElement("div", { className: "is-circle6 circle" }), React.createElement("div", { className: "is-circle7 circle" }), React.createElement("div", { className: "is-circle8 circle" }), React.createElement("div", { className: "is-circle9 circle" }), React.createElement("div", { className: "is-circle10 circle" }), React.createElement("div", { className: "is-circle11 circle" }), React.createElement("div", { className: "is-circle12 circle" }));
            }
        })(), React.createElement("span", { className: "text", onClick: this.props.retry }, this.props.text));
    }
}

InlineLoading.defaultProps = {
    hasMore: true,
    text: '加载中...'
};

InlineLoading.propType = {
    hasMore: React.PropTypes.bool,
    retry: React.PropTypes.func,
    text: React.PropTypes.string
};

module.exports = InlineLoading;