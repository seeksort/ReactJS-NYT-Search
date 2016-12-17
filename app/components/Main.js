var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            {<!-- Main -->}
            <div className="container" id="main">
                <div className="row">
                    <div className="col s12 center-align">
                        <h1>New York Times Article Search</h1>
                        <h4>Search for and save articles from <h4>
                        </h4><a href="http://www.nytimes.com/">The New York Times</a></h4>
                    </div>
                </div>
                
                <Search />
                
                <Saved />

            </div>
        );
    }
});

module.exports = Main;