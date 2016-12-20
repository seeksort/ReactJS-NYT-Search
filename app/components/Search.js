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
            console.log('updated topic');
            

            var searchArr = [this.state.topic, this.state.startYr, this.state.endYr];

            helpers.runQuery(searchArr).then(function(data) {
                if (data !== this.state.results) {
                    console.log(data);// debug
                    this.setState({results: data});
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
        return (
            
            <div>
                
                <Query setTopic={this.setTopic} setStartYr={this.setStartYr} setEndYr={this.setEndYr} />

                <Results currentSearch={this.state} results={this.state.results} />

            </div>
            
        )
    }
});

module.exports = Search;