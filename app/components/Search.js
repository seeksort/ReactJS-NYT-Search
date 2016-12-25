var React = require('react'),
    Query = require('./Query'),
    Results = require('./Results'),
    helpers = require("./utils/helpers");

var Search = React.createClass({
    getInitialState: function() {
        return { topic: "", startYr: "", endYr: "", results: []};
    },

    componentDidUpdate: function(prevProps, prevState) {
        // user must enter at least a topic
        if (prevState.topic !== this.state.topic) {

            var searchArr = [this.state.topic, this.state.startYr, this.state.endYr];

            helpers.runQuery(searchArr).then(function(data) {
                if (data !== this.state.results) {
                    this.setState({results: data});
                    window.location.href = '#/search/results';
                }
            }.bind(this));
        }

    },

    setTopic: function(topic) {
        this.setState({ topic: topic });
    },

    setStartYr: function(startYr) {
        this.setState({ startYr: startYr });
    },

    setEndYr: function(endYr) {
        this.setState({ endYr: endYr });
    },

    render: function() {
        var children = React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {
                    setTopic: this.setTopic,
                    setStartYr: this.setStartYr,
                    setEndYr: this.setEndYr,
                    currentSearch: this.state,
                    results: this.state.results,
                    setParent: this.props.setParent
                })
              }.bind(this));

        return (
            
            <div>{children}</div>
            
        )
    }
});

module.exports = Search;