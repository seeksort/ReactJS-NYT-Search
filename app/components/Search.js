var React = require('react');

var Search = React.createClass({
    render: function() {
        <div>
            {this.props.children}
        </div>
    }
});

module.exports = Search;