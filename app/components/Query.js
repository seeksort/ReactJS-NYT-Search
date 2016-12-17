var React = require('react');

var Query = React.createClass({
    render: function() {
        
        <div className="white">
            <h2 className="center-align light-blue darken-3">Search</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input placeholder="enter a topic..." id="topic" type="text" className="validate" />
                            <label for="topic">Topic</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input placeholder="enter a year..." id="start_year" type="text" className="validate" />
                            <label for="start_year">Start Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input placeholder="enter a year..." id="end_year" type="text" className="validate" />
                            <label for="end_year">End Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <a className="waves-effect light-blue btn col s10 offset-s1">Submit</a>
                    </div>
                </form>
            </div>
        </div>
    }
});

module.exports = Query;