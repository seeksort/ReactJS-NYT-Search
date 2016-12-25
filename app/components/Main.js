var React = require('react');

var Main = React.createClass({
    getInitialState: function() {
        return { savedResults: [] }
    },

    setParent: function(newResults) {
        this.setState({
            savedResults: newResults
        });
    },

    render: function() {
        var children = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {
                savedResults: this.savedResults,
                setParent: this.setParent
            })
        }.bind(this));
        return (

            <div className="container" id="main">
                <div className="row">
                    <div className="col s12 center-align">
                        <h1>New York Times Article Search</h1>
                        <h4>Search for and save articles from </h4>
                        <h4><a href="https://www.nytimes.com/">The New York Times</a></h4>
                    </div>
                </div>
                
                <div>{children}</div>

            </div>
        );
    }
});

module.exports = Main;